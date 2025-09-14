import axios from "axios";

export const getAtsScore = async (req, res) => {
  try {
    const { resumeText, jobRole } = req.body;

    // Example prompt for ATS scoring
    const prompt = `
You are an ATS (Applicant Tracking System) expert.
Analyze the resume text for the role: ${jobRole}.
Give:
1. ATS Score out of 100
2. Missing important keywords
3. Suggestions to improve
Resume:
${resumeText}
    `;

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/gpt2", // (or other free model)
      { inputs: prompt },
      { headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` } }
    );

    res.json({ result: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI ATS scoring failed" });
  }
};

export const getSuggestions = async (req, res) => {
  try {
    const { jobRole, section } = req.body;

    const prompt = `
Suggest strong ATS-friendly ${section} for a resume applying to the role of ${jobRole}.
Make sure to include industry keywords.
    `;

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/gpt2",
      { inputs: prompt },
      { headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` } }
    );

    res.json({ result: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI suggestion failed" });
  }
};
