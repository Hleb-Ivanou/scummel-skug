class Utility {
  constructor(canvasClass) {
    this.canvasClass = canvasClass;
  }
  addToCanvas(addedHtml) {
    $(`.${this.canvasClass}`).append(addedHtml);
  }
  setRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default Utility
