import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
const CodeExplaination = ({ explaination }) => {
    return (
        <div className=" w-full mt-6 p-6 bg-gray-50 border-l-4  text-black rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-2">Code Explanation:</h2>
            <Markdown remarkPlugins={[remarkGfm]}>{explaination}</Markdown>
        </div>
    );
}
export default CodeExplaination;