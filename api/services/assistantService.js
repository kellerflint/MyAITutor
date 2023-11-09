const OpenAI = require("openai")
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

class AssistantService {
  async getResponse(question) {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: question }
      ],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message.content;
  }
}

module.exports = new AssistantService();
