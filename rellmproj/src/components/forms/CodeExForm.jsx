import { use, useActionState } from "react"; 
import { explain } from "../../actions";
import { useState } from "react";
import CodeExplaination from "../CodeExplaination";
import Error from "../Error";
const CodeExForm = () => {
    const [formState,formAction,isPending] =useActionState(explain,null);
      const [formValues, setFormValues] = useState({
        language: "python",
        code: ""
    });

  
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };
    return( <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <form action={formAction}>
            <label className="block mb-2 text-black font-semibold">Language:</label>
            <select name="language"  placeholder="language" value={formValues.language} onChange={handleChange} className="border text-black rounded-lg p-2 w-full mb-4 bg-transparent">
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
            </select>

             <label className="block mb-2 text-black font-semibold">Code:</label>
             <textarea
                 name="code"
                 required
                 value={formValues.code}
                 onChange={handleChange}
                 className="border text-black rounded-lg p-3 w-full mb-4 bg-transparent font-mono mi-h-[150px]"
                 placeholder="Enter your code here..."
             ></textarea>

             <button
                 type="submit"
                 disabled={isPending}
                 className="bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors w-full"
             >
                 {isPending ? "Explaining..." : "Explain Code"}
             </button>
        </form>
        {
            isPending ? (
                <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                    Processing your request...
                </div>
            ) : formState ?.success ? (
                <CodeExplaination explaination={formState?.data.explaination} />
            ) : formState ?.success === false && (
                <Error error={formState?.error} />
            )
                      
        }
    </div>
);};
export default CodeExForm;