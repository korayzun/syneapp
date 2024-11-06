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

// const functions = require("firebase-functions");
// const cors = require("cors");

// const corsOptions = {
//   origin: "https://korayzun.github.io",
//   methods: ["GET"],
//   allowedHeaders: ["Content-Type"],
// };

// exports.getAppScriptUrl = functions.https.onRequest((req, res) => {
//   cors(corsOptions)(req, res, () => {
//     if (req.method === "GET") {
//       const appScriptUrl = process.env.APPSCRIPT_URL;
//       if (!appScriptUrl) {
//         return res.status(500).send("App Script URL not set.");
//       }

//       res.status(200).json({url: appScriptUrl});
//     } else {
//       return res.status(405).send("Method Not Allowed");
//     }
//   });
// });

// const functions = require("firebase-functions");
// const cors = require("cors");

// const corsOptions = {
//   origin: "https://korayzun.github.io",
//   methods: ["GET"],
//   allowedHeaders: ["Content-Type"],
// };

// exports.getAppScriptUrl = functions.https.onRequest((req, res) => {
//   cors(corsOptions)(req, res, async () => {
//     try {
//       if (req.method !== "GET") {
//         console.error("Invalid request method:", req.method);
//         return res.status(405).send("Method Not Allowed");
//       }

//       // Logging the request details for debugging
//       console.log("Request received from origin:", req.headers.origin);

//       // Retrieve App Script URL from environment variable
//       const appScriptUrl = process.env.APPSCRIPT_URL;

//       if (!appScriptUrl) {
//         console.error("App Script URL is not set in environment variables.");
//         return res.status(500).send("App Script URL not set.");
//       }

//       console.log("App Script URL retrieved successfully:", appScriptUrl);

//       // Respond with the URL in JSON format
//       res.status(200).json({url: appScriptUrl});
//     } catch (error) {
//       console.error("Error occurred in getAppScriptUrl function:", error);
//       res.status(500).send("Internal Server Error: " + error.message);
//     }
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
  cors(corsOptions)(req, res, async () => {
    try {
      if (req.method !== "GET") {
        console.error("Invalid request method:", req.method);
        return res.status(405).send("Method Not Allowed");
      }

      // Access environment variable directly
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

// const functions = require("firebase-functions");
// const cors = require("cors")({origin: "https://korayzun.github.io"});
// const fetch = require("node-fetch");

// exports.getAppScriptUrl = functions.https.onRequest((req, res) => {
//   cors(req, res, async () => {
//     try {
//       // Use the environment variable APPSCRIPT_URL directly
//       const appScriptUrl = process.env.APPSCRIPT_URL;

//       if (!appScriptUrl) {
//         console.error("App Script URL is not set in environment variables.");
//         return res.status(500).send("App Script URL not set.");
//       }

//       // Retrieve email from query parameters
//       const email = req.query.email;

//       // Post request to the Apps Script URL
//       const response = await fetch(appScriptUrl, {
//         method: "POST",
//         headers: {"Content-Type": "application/x-www-form-urlencoded"},
//         body: new URLSearchParams({"email": email}),
//       });

//       const result = await response.json();
//       res.status(response.status).json(result);
//     } catch (error) {
//       console.error("Error submitting email:", error);
//       res.status(500).send("Error submitting email.");
//     }
//   });
// });

