const axios = require('axios');
const qs = require('qs');

//const genAIModelDeploymentEndpoint = process.env.deploymentUrl;
const genAIModelDeploymentEndpoint = "https://api.ai.prod.us-east-1.aws.ml.hana.ondemand.com/v2/inference/deployments/d2e3b34633808207/chat/completions?api-version=2023-05-15";

async function getAccessToken() {
  const tokenConfig = {
    method: 'post',
    url: 'https://xym1kl6-km83prdb.authentication.us10.hana.ondemand.com/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      grant_type: 'client_credentials',
      client_id: 'sb-2a48918b-92f4-4612-b03e-f96c279abb26!b275360|aicore!b164',
      client_secret: 'xxxxx'
    })
  };

  try {
    const response = await axios(tokenConfig);
    return response.data.access_token;
  } catch (error) {
    console.error('Error obtaining access token:', error);
    return null;
  }
}
module.exports = async function (req, prompt) {

  const accessToken = await getAccessToken();
  if (!accessToken) return;

  const postData = {
    "messages": [
      {
        "role": "user",
        "content": prompt
      }
    ],
    "max_tokens": 1000,
    "temperature": 0.1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  };

  const config = {
    method: 'post',
    url: genAIModelDeploymentEndpoint,
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'AI-Resource-Group': 'default'
    },
    data: postData
  };

  try {
    const results = await axios(config);
    console.log('Response: ', results);
    var res = JSON.parse(results.data.choices[0].message.content);
    return res;
  } catch (error) {
    req.error(error.code, error.message);
    throw error; // Propagate the error
  }
}
