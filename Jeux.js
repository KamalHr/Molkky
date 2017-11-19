class Game {
    constructor(players) {
        this.molkkys = [];
    };

    start() {
        while(this.noWins()){
            for(let i = 0; i < this.molkkys.length; i++) {
                this.molkkys[i].play();
                if(this.molkkys[i].test() != this.molkkys[i].player.name+' Victoire')
                    break;
            }
        }
    };
    noWins() {
        for(let i = 0; i < this.molkkys.length; i++)
            if(this.molkkys[i].test() != this.molkkys[i].player.name+' Victoire'){
                console.log(this.molkkys[i].player.name+' wins');
                return false;
            }
        console.table(this.molkkys);
        return true;
    };
}