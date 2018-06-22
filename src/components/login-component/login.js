import components from '../index';

class Login {
  constructor(elId) {
    this.elId = elId;
    this.template = '';
    this.style = '';
  }
  run() {
    this.addSubmitEvent();
  }
  addSubmitEvent() {
    $(`#${this.elId}`).submit(() => {
      components.player.name = $('#login-name').val();
      components.dialogWindow.hide();
      components.round.run();
    });
  }
}

export default Login;
