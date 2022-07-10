import { getDiceRollArray, getDicePlaceholderHtml } from "./utils/utils.js";

function Character(data) {
  Object.assign(this, data);

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.getDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map(function (num) {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };

  this.getCharacterHtml = function () {
    const { name, avatar, health, diceArray } = this;

    return `<div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}" />
      <div class="health">health: <b> ${health} </b></div>
      <div class="dice-container">
          ${diceArray}
      </div>
  </div>`;
  };

  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(function (
      totalScore,
      currentScore
    ) {
      return totalScore + currentScore;
    });

    this.health -= totalAttackScore;
  };
}

export default Character;
