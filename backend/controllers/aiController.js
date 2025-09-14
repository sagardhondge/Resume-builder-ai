// controllers/aiController.js
import OpenAI from "openai";

export const getAtsScore = async (req, res) => {
  try {
    const { jobDescription } = req.body;
    const resumeText = req.file ? req.file.buffer.toString("utf-8") : null;

    if (!resumeText || !jobDescription) {
      return res
        .status(400)
        .json({ message: "Resume text & job description required" });
    }

    // Initialize OpenAI client directly
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `
You are an ATS analyzer. Evaluate this resume against the job description.
Return ONLY valid JSON in the following format (no extra text, explanation, or commentary):

{
  "score": number (0-100),
  "checks": [string],
  "suggestions": [string]
}

Job Description:
${jobDescription}

Resume:
${resumeText}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an expert ATS resume analyzer." },
        { role: "user", content: prompt },
      ],
      temperature: 0,
    });

    const aiOutput = response.choices[0].message.content;

    let parsed;
    try {
      parsed = JSON.parse(aiOutput);
    } catch {
      parsed = {
        score: 70,
        checks: ["Could not parse AI response"],
        suggestions: [
          "Ensure resume includes relevant keywords from the job description",
          "Highlight measurable achievements (e.g., reduced costs by 20%)",
          "Optimize formatting for ATS readability (simple fonts, no tables)",
        ],
      };
    }

    res.json(parsed);
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({ message: "Error analyzing resume" });
  }
};
