import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import OpenAI  from "openai";

const app = express();

// Middleware
app.use(helmet());
app.use(cors(
    { origin: process.env.FRONTEND_URL || "http://localhost:3001",
        credentials: true
     }
));
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, 
    message:"Too many request from this IP"// limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use(express.json({limit: '10mb'}));  
const API_KEY=process.env.NEBIUS_API_KEY;
const client = new OpenAI({
    baseURL: 'https://api.studio.nebius.com/v1/',
    apiKey: API_KEY,
});

app.post("/api/explain-code", async(req, res) => {
  try{
    const {code,language} = req.body;
    if(!code ){
        return  res.status(400).json({error: "Code are required"});
    }
    const messages=[{
        role:"user",
        content:`Please explain this ${language || ""} code in simple terms:\n\n\'\'\'${language || ""}\n${code}\n\'\'\'`
    }
    ];
    const response = await client.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages,
        temperature: 0.3,
        max_tokens: 800,
    });
    const explaination=response?.choices[0]?.message?.content;
    if(!explaination){
        return res.status(500).json({error: "Failed to get explanation"});
    }
    res.json({explaination,language:language || "unknown"});

  } catch(err){ 
    console.error(err);
    res.status(500).json({error: "Internal server error"});
  }
    
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});