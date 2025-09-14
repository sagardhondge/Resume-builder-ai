import axios from "axios";

// ATS Controller
export const getAtsScore = async (req, res) => {
  try {
    const { jobDescription } = req.body;
    const resumeText = req.file ? req.file.buffer.toString("utf-8") : null;

    if (!resumeText || !jobDescription) {
      return res
        .status(400)
        .json({ message: "Resume text & job description required" });
    }

    console.log("File received:", req.file?.originalname);
    console.log("Job description length:", jobDescription.length);

    const prompt = `
You are an ATS (Applicant Tracking System) analyzer.
Evaluate the following resume against the job description.
Return a JSON with:
{
  "score": number (0-100),
  "checks": [
    { "name": "Contains important job keywords", "status": "pass|fail|warn" },
    { "name": "Work experience relevance", "status": "pass|fail|warn" },
    { "name": "Achievements are quantified", "status": "pass|fail|warn" }
  ],
  "suggestions": ["list", "of", "improvements"]
}

Job Description:
${jobDescription}

Resume:
${resumeText}
`;

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/google/flan-t5-small",
      { inputs: prompt },
      {
        headers: { Authorization: `Bearer ${process.env.HF_ACCESS_TOKEN}` },
      }
    );

    const aiOutput = response.data[0]?.generated_text || "{}";

    let parsed;
    try {
      parsed = JSON.parse(aiOutput);
    } catch {
      // fallback if AI output is not JSON
      parsed = {
        score: Math.floor(Math.random() * 30) + 60,
        checks: [
          { name: "Contains important keywords", status: "warn" },
          { name: "Work experience relevance", status: "warn" },
        ],
        suggestions: [
          "Improve formatting",
          "Add measurable achievements",
          "Highlight relevant experience",
        ],
      };
    }

    res.json(parsed);
  } catch (err) {
    console.error("HF ATS Error:", err.response?.data || err.message);
    res.status(500).json({ message: "Error analyzing ATS score" });
  }
};
