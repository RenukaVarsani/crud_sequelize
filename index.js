const { json } = require("body-parser");
const express = require("express");
const User = require("./model");
const app = express();
app.use(express.json());

app.get("/data", async (req, res) => {
  try {
    const user = await User.findAll();
    console.log(user);
    res.send("okayy");
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/create", async (req, res) => {
  try {
    const { id, email, fullName, age, employed } = req.body;
    const user = await User.create({
      id,
      email,
      fullName,
      age,
      employed,
    });
    res.send(user);
  } catch (error) {
    res.send(e);
  }
});

app.get("/data/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.params.id);
    const user = await User.findByPk(id);
    res.send(user);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
});

app.patch("/data/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.update(req.body, {
      where: { id: id },
    });
    res.send(user);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/remove/:id", async (req, res) => {
  try {
    const id = req.params.id;
    User.destroy({ where: { id: id } });
    res.send("deleted");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(8080, () => {
  console.log("server running");
});
