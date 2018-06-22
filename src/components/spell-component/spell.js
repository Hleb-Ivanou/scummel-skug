import components from '../index';
import spellWater from './water-spell.png';
import spellFire from './fire-spell.png';
import waterAnimation from './water-spell.html';
import fireAnimation from './fire-spell.html';


class Spell {
  constructor() {
    this.template = '';
    this.style = '';
    this.spellList = {
      'water spell' : {
        name: 'water spell',
        damage: 30,
        template: waterAnimation,
        animationName: 'water-spell',
        idEl: 'water-blast',
        soundId: 'water-sound'
      },
      'fire spell' : {
        name: 'fire spell',
        damage: 30,
        template: fireAnimation,
        animationName: 'fire-spell',
        idEl: 'fire-blast',
        soundId: 'fire-sound'
      }
    };
    this.selectedSpell;
    this.target;
  }
  renderSpellOptions() {
    components.dialogWindow.show(this.template);
    this.bindEvent();
  }
  setRandomSpell() {
    const index = components.utility.setRandomNumber(0, 1);
    (index === 0) ? this.selectedSpell = this.spellList['water spell'] : this.selectedSpell = this.spellList['fire spell'];
  }
  bindEvent() {
    $('.spell-icon').click((e) => this.setUserChoice(e));
  }
  setUserChoice(event) {
    let target = event.target;
    while (!$(target).is('[data-name]')) {
      target = $(target).parent();
    };
    this.selectedSpell = this.spellList[$(target).attr('data-name')];
    components.dialogWindow.hide();
    components.mathTask.renderTask();
  }
  animateSpell() {
    const self = this;
    components.turn.isPlayerTurn ? this.target = components.bot : this.target = components.player;
    components.utility.addToCanvas(this.selectedSpell.template);
    $(`#${this.selectedSpell.soundId}`).get(0).play();
    $(`#${this.selectedSpell.idEl}`).on('animationend', () => {
      $(`#${this.selectedSpell.idEl}`).remove();
      self.target.getDamage(self.selectedSpell);
      components.round.setHpToBar();
      components.turn.isDead();
    });
    $(`#${this.selectedSpell.idEl}`)
    .offset({
      left : $(`#${this.target.modelElId}`).offset().left + $(`#${this.target.modelElId}`).width() / 2,
      top : $(`#${this.target.modelElId}`).offset().top
    });
    $(`#${this.selectedSpell.idEl}`).css('animation', `${this.selectedSpell.animationName} 1.5s steps(14) 0s 1 normal forwards running`);
  }
}

export default Spell;
