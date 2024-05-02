const axios = require('axios');

const openAiApiUrl = 'https://api.openai.com/v1/chat/completions';
const apiKey = 'XXXX';

const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
};

module.exports =  async function (req,prompt) {

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "user",
        "content": prompt,
      }
    ],
    max_tokens: 1000,
    temperature: 0.1
  };

  try {
    const response = await axios.post(openAiApiUrl, data, { headers });
    console.log('Response: ', JSON.stringify(response.data.choices[0]));
    const result = response.data.choices[0].message.content;
    return JSON.parse(result);
  } catch (error) {
    console.error('Error:', error.message);
    throw error; // Propagate the error
  }
}
