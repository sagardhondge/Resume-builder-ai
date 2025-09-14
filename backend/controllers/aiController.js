import { HfInference } from "@huggingface/inference";

const client = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Example: Generate Career Objective
export const generateCareerObjective = async (req, res) => {
  try {
    const { jobRole } = req.body;

    if (!jobRole) {
      return res.status(400).json({ error: "Job role is required" });
    }

    const response = await client.textGeneration({
      model: "google/flan-t5-base", // free model
      inputs: `Write a professional resume career objective for a ${jobRole}`,
      parameters: { max_new_tokens: 120 },
    });

    res.json({ objective: response.generated_text });
  } catch (error) {
    console.error("AI Error:", error.message);
    res.status(500).json({ error: "AI generation failed" });
  }
};
