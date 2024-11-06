const functions = require("firebase-functions");
const cors = require("cors")({origin: "https://korayzun.github.io"});

exports.getAppScriptUrl = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // Access the App Script URL via environment variables
    const appScriptUrl = process.env.APPSCRIPT_URL;

    if (!appScriptUrl) {
      return res.status(500).send("App Script URL not set.");
    }

    res.status(200).json({url: appScriptUrl});
  });
});
