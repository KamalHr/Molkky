class Molkky {
    constructor(name){
        this.player = new Player(name, 0);
        this._quilles = [1,2,3,4,5,6,7,8,9,10,11,12];
        this._name = this.player.name;
    };
    getPlayerName() {
        return this.player.name;
    };
    play() {
        let number = Math.floor((Math.random()*11));
        let tab = [];
        if(number == 1) {
            tab.push(Math.floor(Math.random()%11));
            this.fall(tab);
        } else{
            tab = this._shuffle(this._quilles).slice(0,number);
            this.fall(tab);
        }
    };
    win() {
        if(this.player.score === 50){
            //console.log(`${this.player.name} Victoire`);
            return `${this.player.name} Victoire`;
        }
    };
    test() {
        if(this.player.score === 50)
            return this.win();
        if(this.player.score < 50)
            return 'Not Yet';
        this.player.score = 25;
        return 25;
    }
    fall(quilles) {
        if(quilles.length === 1){
            this.player.score += quilles[0];
            console.log(this.getPlayerName()+' Scores '+quilles[0]+' new Score: '+this.player.score);
        }
        else{
            this.player.score += quilles.length;
            console.log(this.getPlayerName()+' Scores '+quilles.length+' new Score: '+this.player.score);
        }
    };
    set score(score) {
        this.player.score = score;
    };
    get score() {
        return this.player.score;
    };
    reset() {
        this.player.score = 0;
    }
    _shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
}