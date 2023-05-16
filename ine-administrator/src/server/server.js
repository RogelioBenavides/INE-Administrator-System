const express = require("express");
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3001;

const {
  getAdministrators,
  getBallotBoxes,
  resetVotes,
  updateVotes,
  insertPresidents,
  deletePresidents,
  getCandidates,
  getPoliticalParties,
  insertRepresentative,
  getRepresentativeByCode,
  updateRepresentative,
} = require("./connection");


// Set up multer storage location and filename
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../../../../Desktop/SistemaUrna/renderer/public/assets/candidates');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  },
});

const upload = multer({ storage: storage });

// Your endpoints...


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

app.post("/update_votes", async (req, res) => {
  try {
    await updateVotes();
    res.status(200).send("Votes updated successfully");
  } catch (error) {
    console.error("Error in updateVotes:", error);
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

//Candidates
app.get("/candidates", async (req, res) => {
  try {
    const type = req.query.type; // Accessing type from the query parameters
    const candidates = await getCandidates(type);
    res.status(200).json(candidates);
  } catch (error) {
    console.error("Error in getCandidates:", error);
    res.status(500).send(error);
  }
});

//Political Parties
app.get("/parties", async (req, res) => {
  try {
    const parties = await getPoliticalParties();
    res.status(200).json(parties);
  } catch (error) {
    console.error("Error in getPoliticalParties:", error);
    res.status(500).send(error);
  }
});

//Representatives
app.post("/representatives", upload.single('image'), async (req, res) => {
  try {
    const { name, owner, substitute, type } = req.body;
    let fullpath = req.file ? req.file.path : '';
    let image = "/assets/candidates/" + path.basename(fullpath);
    await insertRepresentative(name, owner, substitute, image, type);
    res.status(200).send("Representative inserted successfully");
  } catch (error) {
    console.error("Error in insertRepresentative:", error);
    res.status(500).send(error);
  }
});


app.get("/representatives/:code", async (req, res) => {
  try {
    const code = req.params.code;
    const representative = await getRepresentativeByCode(code);
    res.status(200).json(representative);
  } catch (error) {
    console.error("Error in getRepresentativeByCode:", error);
    res.status(500).send(error);
  }
});

app.put("/representatives/:id", upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, owner, substitute, type } = req.body;
    let fullpath = req.file ? req.file.path : '';
    let image = "/assets/candidates/" + path.basename(fullpath);
    await updateRepresentative(id, name, owner, substitute, image);
    res.status(200).send("Representative updated successfully");
  } catch (error) {
    console.error("Error in updateRepresentative:", error);
    res.status(500).send(error);
  }
});




app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
