import OpenAI from "openai";

export const getAtsScore = async (req, res) => {
  try {
    const { jobDescription } = req.body;
    const resumeText = req.file ? req.file.buffer.toString("utf-8") : null;

    if (!resumeText || !jobDescription)
      return res.status(400).json({ message: "Resume text & job description required" });

    // Initialize OpenAI client directly
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // directly here
    });

    const prompt = `
You are an ATS analyzer. Evaluate this resume vs job description.
Return JSON with score, checks, and suggestions.

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
      parsed = { score: 70, checks: [], suggestions: [] }; // fallback
    }

    res.json(parsed);
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({ message: "Error analyzing resume" });
  }
};
