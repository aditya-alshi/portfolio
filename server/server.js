const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const main = require("./nodemailerpfolio").main;
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.post("/contactme", async (req, res) => {
  try {
    const thebody = req.body;
    main(thebody.name, thebody.emailaddress, thebody.messageforMe)
      .then(() => res.json({ message: "Sent successfully " }))
      .catch((err) => {
        res.json({ message: "Error while sending message try later" });
      });
  } catch (err) {
    res.json({ message: "Error while sending message try later" });
  }
});

app.use(express.static(path.join("public")));
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(5000);
