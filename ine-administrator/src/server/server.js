const express = require("express");
const app = express();
const port = 3001;

const {
  getAdministrators,
  getBallotBoxes,
  resetVotes,
  insertPresidents,
  deletePresidents,
  insertCandidacy,
  getCandidacies,
} = require("./connection");

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

// Administrators
app.get("/administrators", async (req, res) => {
  try {
    const administrators = await getAdministrators();
    res.status(200).json(administrators);
  } catch (error) {
    console.error("Error in getAdministrators:", error);
    res.status(500).send(error);
  }
});

//Ballot Boxes
app.get("/ballotboxes", async (req, res) => {
  try {
    const ballotBoxes = await getBallotBoxes();
    res.status(200).json(ballotBoxes);
  } catch (error) {
    console.error("Error in getBallotBoxes:", error);
    res.status(500).send(error);
  }
});

app.post("/reset_votes", async (req, res) => {
  try {
    await resetVotes();
    res.status(200).send("Votes reset successfully");
  } catch (error) {
    console.error("Error in resetVotes:", error);
    res.status(500).send(error);
  }
});

//Administrators
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const administrators = await getAdministrators(username, password);
    if (administrators.length > 0) {
      res.status(200).json({ success: true, user: administrators[0] });
    } else {
      res.status(200).json({ success: false });
    }
  } catch (error) {
    console.error("Error in getAdministrators:", error);
    res.status(500).send(error);
  }
});

// Presidents
app.post("/presidents", async (req, res) => {
  console.log("Received data:", req.body);
  try {
    await insertPresidents(req.body); // Pass the array of presidents directly
    res.status(200).send("All presidents inserted");
  } catch (error) {
    console.error("Error in insertPresidents:", error);
    res.status(500).send(error);
  }
});

app.delete("/presidents/:code", (req, res) => {
  deletePresidents(req.params.code)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// Candidacies
app.post("/candidacy", async (req, res) => {
  const { name, date } = req.body;

  // Insert into the database
  try {
    await insertCandidacy(name, date);
    res.status(200).send("Candidacy created successfully");
  } catch (error) {
    console.error("Error in insertCandidacy:", error);
    res.status(500).send(error);
  }
});

app.get('/candidacies', async (req, res) => {
  try {
    const candidacies = await getCandidacies();
    res.status(200).json(candidacies);
  } catch (error) {
    console.error('Error in getCandidacies:', error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
