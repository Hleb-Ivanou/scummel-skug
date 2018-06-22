class DialogWindow {
  constructor(elId) {
    this.elId = elId;
    this.template = '';
    this.style = '';
  }
  show(htmlContent) {
    $(`#${this.elId}`).append(htmlContent).show();
  }
  hide() {
    $(`#${this.elId}`).hide().empty();
  }
}

export default DialogWindow;
