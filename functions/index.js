// const functions = require("firebase-functions");
// const cors = require("cors")({origin: "https://korayzun.github.io"});

// exports.getAppScriptUrl = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     // Access the App Script URL via environment variables
//     const appScriptUrl = process.env.APPSCRIPT_URL;

//     if (!appScriptUrl) {
//       return res.status(500).send("App Script URL not set.");
//     }

//     res.status(200).json({url: appScriptUrl});
//   });
// });

const functions = require("firebase-functions");
const cors = require("cors");

const corsOptions = {
  origin: "https://korayzun.github.io",
  methods: ["GET"],
  allowedHeaders: ["Content-Type"],
};

exports.getAppScriptUrl = functions.https.onRequest((req, res) => {
  cors(corsOptions)(req, res, () => {
    if (req.method === "GET") {
      const appScriptUrl = process.env.APPSCRIPT_URL;
      if (!appScriptUrl) {
        return res.status(500).send("App Script URL not set.");
      }

      res.status(200).json({url: appScriptUrl});
    } else {
      return res.status(405).send("Method Not Allowed");
    }
  });
});
