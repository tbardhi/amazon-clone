const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HbXbBJFGhk3FB3uUyeZ5EhZeyFn188SYx3HwB8TfcWvOT0UhTVLonyve3mPFu9owAsWLGvPhfyCA4lAEQq37SgZ00nYkNX3PO"
);

// API

//APP Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-react-dfee2/us-central1/api
