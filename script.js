const hero = {
  id: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3,
};

const monster = {
  id: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceRoll: [2],
  diceCount: 3,
};

function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6) + 1;
  });
}

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map(function (num) {
      return `<div class="dice">${num}</div>`;
    })
    .join("");
}

function renderCharacter(data) {
  const { id, name, avatar, health, diceCount } = data;

  const diceHtml = getDiceHtml(diceCount);

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
