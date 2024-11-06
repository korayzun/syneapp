const functions = require("firebase-functions");
const cors = require("cors")({origin: "https://korayzun.github.io"});

// Fetch the Apps Script URL from Firebase Functions Config
exports.getAppScriptUrl = functions.https.onRequest((req, res) => {
  // CORS pre-flight request
  cors(req, res, () => {
    const appScriptUrl = functions.config().appscript.url;

    if (!appScriptUrl) {
      return res.status(500).send("App Script URL not set.");
    }

    // Send the Apps Script URL to the client
    res.status(200).json({url: appScriptUrl});
  });
});

