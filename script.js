const hero = {
  id: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceRoll: [3, 1, 4],
};

const monster = {
  id: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceRoll: [2],
};

function renderCharacter(data) {
  const { id, name, avatar, health, diceRoll } = data;

  const diceHtml = diceRoll
    .map(function (num) {
      return `<div class="dice">${num}</div>`;
    })
    .join("");

  document.getElementById(id).innerHTML = `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
