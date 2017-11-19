class Game {

    constructor(players) {
        this.molkkys = [];
        players.forEach(element => {
            this.molkkys.push(new Molkky(element));
        });
        this.winner = undefined;
    };

    start() {
        while(this.noWins()){
            for(let i = 0; i < this.molkkys.length; i++) {
                this.molkkys[i].play();
                if(this.molkkys[i].test() == this.molkkys[i].getPlayerName()+' Victoire')
                    break;
            }
        }
        return this.winner;
    };
    noWins() {
        let tab = this.molkkys.filter(item => item.test() === item.getPlayerName()+ ' Victoire');
        if(tab.length != 0){
            //console.log(tab);
            this.winner = tab[0];
            console.log('************ '+tab[0].getPlayerName()+' wins ************');
        }
        return tab.length === 0;
    };
}