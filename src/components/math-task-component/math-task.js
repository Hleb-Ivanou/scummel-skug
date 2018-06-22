import components from '../index';
import correctSound from './correct.mp3';
import incorrectSound from './incorrect.mp3';

class MathTask {
  constructor(formElId) {
    this.formElId = formElId;
    this.mathSigns = ['+', '-', '/', '*'];
    this.taskText = '';
    this.answer = '';
    this.template = '';
    this.style = '';
    this.correctSoundId = 'correct-sound';
    this.incorrectSoundId = 'incorrect-sound';
  }
  generat() {
    const a = components.utility.setRandomNumber(0, 9);
    const b = components.utility.setRandomNumber(0, 9);
    const mathOperation = this.mathSigns[components.utility.setRandomNumber(0, 3)];
    this.taskText = `${a} ${mathOperation} ${b}`;
    this.answer = eval(this.taskText);
    this.taskText += ' = ';
    if (!Number.isInteger(this.answer / 1)) {
      this.generat();
    }
  }
  renderTask() {
    this.generat();
    components.dialogWindow.show(this.template);
    this.bindEvent();
    $('#math-task-text').text(this.taskText);
  }
  getAnswer() {
    return $('#math-task-answer').val();
  }
  checkAnswer() {
    $(`#${this.formElId} .submit-btn`).prop('disabled', true);
    if (this.getAnswer() === `${this.answer}`) {
      $(`#${this.correctSoundId}`).get(0).play();
      $('.correct-massage')
      .show()
      .delay(1000)
      .queue(() => { components.dialogWindow.hide(); components.spell.animateSpell(); });
    } else {
      $(`#${this.incorrectSoundId}`).get(0).play();
      $('.wrong-massage').show().delay(1000).queue(() => {
        components.dialogWindow.hide();
        components.turn.isPlayerTurn = !components.turn.isPlayerTurn;
        components.turn.run();
      });
    }
  }
  bindEvent() {
    $(`#${this.formElId}`).submit(() => this.checkAnswer());
  }
}

export default MathTask
