// Набор игроков в команду
export default class Team {
  constructor(arr) {
    this.chars = arr; //игроки в команде 
  }
  
  //генрация игроков в команде
  *[Symbol.iterator]() {

    for (let i = 0; i < this.chars.length; i++) {
     yield this.chars[i];
    }   
  }    
}


