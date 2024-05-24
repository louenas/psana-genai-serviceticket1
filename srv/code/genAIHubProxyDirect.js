const axios = require('axios');
const qs = require('qs');

let genAIHubAccessToken;

async function getAccessToken() {
  const tokenConfig = {
    method: 'post',
    url: process.env.genAITokenURL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.genAICliemntID,
      client_secret: process.env.genAIClientSecret
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
completion = async function (req, prompt, llmEndpoint) {

  genAIHubAccessToken = genAIHubAccessToken || await getAccessToken();
  if (!genAIHubAccessToken) return;

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
    url: process.env.genAIModelDeploymentRootURL + llmEndpoint,
    headers: {
      'Authorization': `Bearer ${genAIHubAccessToken}`,
      'AI-Resource-Group': 'default'
    },
    data: postData
  };

  try {
    const results = await axios(config);
    console.log('Response: ', results);
    //.content should be a string form of a Json object
    var res = results.data?.choices[0]?.message?.content;
    return res;
  } catch (error) {
    console.error('Error: ', error);
    req.error(error.code, error.message);
    throw error; // Propagate the error
  }
}

embed = async function(req, text, llmEndpoint){
  genAIHubAccessToken = genAIHubAccessToken || await getAccessToken();
  if (!genAIHubAccessToken) return;

  const postData = {
    "input": text
  };
  const config = {
    method: 'post',
    url: process.env.genAIModelDeploymentRootURL + llmEndpoint,
    headers: {
      'Authorization': `Bearer ${genAIHubAccessToken}`,
      'AI-Resource-Group': 'default'
    },
    data: postData
  };

  try {
    const results = await axios(config);
    console.log('Response: ', results);
    //.embedding is already a Json object
    var res = results.data?.data[0]?.embedding;
    return res;
  } catch (error) {
    console.error('Error: ', error);
    req.error(error.code, error.message);
    throw error; // Propagate the error
  }
}

module.exports = {
  completion,
  embed
}