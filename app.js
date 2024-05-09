const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors());
//get api characters
//it does not find name????
//?name= api
//have to get each character en do a find()of response/data/results...console.log()

app.get("/characters/:name", async (req, res) => {
  const rickMortyName = req.params.name.toLowerCase();
  const url = `https://rickandmortyapi.com/api/character/?name=${rickMortyName}`;

  console.log(url);

  try {
    const response = await axios.get(url);
    console.log(response.data.results);
    const characters = response.data.results.find(
      (character) => character.name === rickMortyName
    );
    // console.log(characters)
    if (characters) {
      const {
        name,
        status,
        species,
        gender,
        origin: { name: originName },
        image,
      } = characters;

      res.json({
        name,
        status,
        species,
        gender,
        origin: { name: originName },
        image,
      });
    }
  } catch (error) {
    res.status(404).json({ Error: "Character not found" });
  }
});

app.listen(3000, (req, res) => {
  console.log("Server on http://localhost:3000/character/:name");
});
