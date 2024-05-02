const cds = require("@sap/cds");
const axios = require("axios");
const xsenv = require("@sap/xsenv");

var genAIAuthToken, genAIAPIURL;

//const genAIModelDeploymentEndpoint = process.env.deploymentUrl;
const genAIModelDeploymentEndpoint = "/v2/inference/deployments/d2e3b34633808207/chat/completions?api-version=2023-05-15";

getDestination("GENAI_ENABLEMENT_GENAICORE").then((dest) => {
  genAIAuthToken = "Bearer " + dest.authTokens[0].value;
  genAIAPIURL = dest.destinationConfiguration.URL;
});

/** Default Helper function to auth your app getting connected with SAP BTP Destination services and return Destination object. */
async function getDestination(dest) {
  try {
    xsenv.loadEnv();
    let services = xsenv.getServices({
      dest: { tag: "destination" },
    });
    try {
      let options1 = {
        method: "POST",
        url: services.dest.url + "/oauth/token?grant_type=client_credentials",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              services.dest.clientid + ":" + services.dest.clientsecret
            ).toString("base64"),
        },
      };
      let res1 = await axios(options1);
      try {
        let options2 = {
          method: "GET",
          url:
            services.dest.uri +
            "/destination-configuration/v1/destinations/" +
            dest,
          headers: {
            Authorization: "Bearer " + res1.data.access_token,
          },
        };
        let res2 = await axios(options2);
        // return res2.data.destinationConfiguration;
        return res2.data;
      } catch (err) {
        console.log(err.stack);
        return err.message;
      }
    } catch (err) {
      console.log(err.stack);
      return err.message;
    }
  } catch (err) {
    console.log(err.stack);
    return err.message;
  }
}

module.exports = async function (req, prompt) {
  try {

    getDestination("GENAI_ENABLEMENT_GENAICORE").then((dest) => {
      genAIAuthToken = "Bearer " + dest.authTokens[0].value;
    });

    const aicoreAPI = await cds.connect.to("GENAI_ENABLEMENT_GENAICORE");

    const data = {
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
    }

    var headers = {
      'AI-Resource-Group': 'default',
      'Content-Type': 'application/json',
      'Authorization': genAIAuthToken,
    };

    const results = await aicoreAPI
      .tx(req)
      .send("POST", genAIModelDeploymentEndpoint, data, headers);

    //IMPORTANT - results.choices[0] instead of results.data.choices[0]
    console.log('##### Response: ', JSON.stringify(results));
    var res = JSON.parse(results.choices[0].message.content);

    return res;

  } catch (error) {
    req.error(error.code, error.message);
    throw error; // Propagate the error
  }
}
