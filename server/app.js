const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const HARD_CODED_JSON = {
  results: [
    {
      name: {
        title: "Miss",
        first: "Jennie",
        last: "Nichols",
      },
      email: "jennie.nichols@example.com",
      dob: {
        age: 30,
      },
    },
  ],
};

app.get("/", (req, res) => {
  res.send("Welcome to the Users API!");
});

app.get("/users", (req, res) => {
    // For now, we're using hardcoded JSON data
    let randomUser = HARD_CODED_JSON.results[0];
    res.json(randomUser);

    // TODO: Replace the hardcoded JSON with a real API request to get a random user
    // For example, you might use the `axios` library to make a GET request to the API endpoint
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
