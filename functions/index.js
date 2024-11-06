const functions = require("firebase-functions");
const cors = require("cors");

const corsOptions = {
  origin: "https://www.syneeapp.com",
  methods: ["GET"],
  allowedHeaders: ["Content-Type"],
};

exports.getAppScriptUrl = functions.https.onRequest((req, res) => {
  cors(corsOptions)(req, res, async () => {
    try {
      if (req.method !== "GET") {
        console.error("Invalid request method:", req.method);
        return res.status(405).send("Method Not Allowed");
      }

      const appScriptUrl = process.env.APPSCRIPT_URL;

      if (!appScriptUrl) {
        console.error("App Script URL is not set in environment variables.");
        return res.status(500).send("App Script URL not set.");
      }

      res.status(200).json({url: appScriptUrl});
    } catch (error) {
      console.error("Error in getAppScriptUrl function:", error);
      res.status(500).send("Internal Server Error: " + error.message);
    }
  });
});
