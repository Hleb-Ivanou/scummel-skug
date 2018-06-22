import components from '../index';
import app from '../index';

class ScoreTable {
  constructor(idElement) {
    this.idElement = idElement;
    this.template = '';
    this.style = '';
    this.scoreInfo = [];
  }
  saveScore(user) {
    const currentUser = {};
    currentUser.name = user.name;
    currentUser.score = user.score;
    this.scoreInfo.push(currentUser);
    localStorage.setItem('score', JSON.stringify(this.scoreInfo));
    this.loadFromStorage();
    this.scoreInfo = this.sortTopFive();
  }
  loadFromStorage() {
    this.scoreInfo = JSON.parse(localStorage.getItem('score'));
  }
  sortTopFive() {
    let arr = this.scoreInfo.slice();
    arr.sort((a, b) => parseInt(b.score) - parseInt(a.score));
    if (arr.length >= 5) {
      arr.length = 5;
    }
    return arr;
  }
  renderTable() {
    let rows = '';
    for (let i = 0; i < this.scoreInfo.length; i++) {
      rows += `<tr><td>${this.scoreInfo[i].name}</td><td>${this.scoreInfo[i].score}</td></tr>`;
    }
    this.template = this.template.replace(/tbody/gi, `<tbody>${rows}</tbody>`);
  }
}

export default ScoreTable
