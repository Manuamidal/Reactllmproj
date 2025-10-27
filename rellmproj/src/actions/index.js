"use server"

export async function explain(prevState, formData) {    
    const language = formData.get("language");
    const code = formData.get("code");
    
    try {
        const res=await fetch(`${import.meta.env.VITE_API_BASE_URL}/explain-code`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ language, code }),
        });
        if (!res.ok) {
            return{
                success: false,
                error: `Error: Failed to fetch explanation. Status ${res.status}`,
            };
        }
        const data = await res.json();
        return {
            success: true,
            data
            }
    } catch (error) {
        return {
            success: false,
            error: `Error: ${error.message}`,
        };
    }
}
