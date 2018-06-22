import components from '../index';

class Turn {
  constructor() {
    this.isPlayerTurn = true;
    this.template = '';
    this.style = '';
  }
  run() {
    if (this.isPlayerTurn) {
      components.spell.renderSpellOptions();
    } else {
      components.spell.setRandomSpell();
      components.spell.animateSpell();
    }
  }
  isDead() {
    $(`#${components.spell.selectedSpell.idEl}`).remove();
    if (components.bot.hp < 0) {
      components.dialogWindow.show(`You won ${components.bot.name}! Ready for next round!`);
      setTimeout(() => {
        components.dialogWindow.hide();
        components.player.score += 100;
        components.bot.restoreHp();
        components.player.restoreHp();
        components.round.run();
      }, 2000);
    } else if (components.player.hp < 0) {
      components.player.score += 100 - components.bot.hp;
      components.scoreTable.saveScore(components.player);
      setTimeout(() => {
        components.scoreTable.renderTable();
        components.dialogWindow.show(components.scoreTable.template);
      }, 2000);
    } else {
      if (this.isPlayerTurn) {
        components.dialogWindow.show(`Turn: ${components.bot.name}`);
      } else {
        components.dialogWindow.show(`Turn: ${components.player.name}`);
      }
      setTimeout(() => {
        components.dialogWindow.hide();
        this.isPlayerTurn = !this.isPlayerTurn;
        this.run();
      }, 2000);
    }
  }
}

export default Turn
