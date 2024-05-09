function getCharacterInfo() {
  const rickMortyNamesInput = document.getElementById("rickMortyNames");
  const characterInfo = document.getElementById("characterInfo");

  const rickMortyNames = rickMortyNamesInput.value.toLowerCase();
  console.log("Character", rickMortyNames);

  fetch(`http://localhost:3000/characters/${rickMortyNames}`)
    .then((response) => {
      // console.log("character:", response.status);
      return response.json();
    })
    .then((data) => {
      console.log("info character:", data);
      const { name, status, species, gender, origin, image } = data;
      characterInfo.innerHTML = `
    <h2>Name: ${name}</h2>
    <p>Status:${status}</p>
    <p>Species:${species}</p>
    <p>Gender:${gender}</p>
    <p>Origin:${origin.name}</p>
    <img src="${image}" alt="${name}"
    `;
    })
    .catch((error) => {
      characterInfo.innerHTML = `<p>Imposible to access the character</p>`;
    });
}

getCharacterInfo();
