chai.should();
describe('Molkky game\'s description.', () => {
    let Gamer1;
    let game;
    beforeEach(() => {
        Gamer1 = new Molkky('Kamal');
        game = new Game(['Kamal', 'Omar', 'Dan']);
        //game.start();
    });
    it('if score == 50 then Victoire', () => {
        Gamer1.score = 50;
        Gamer1.test().should.equal(Gamer1._name + ' Victoire');
    });
    it('if score < 50 Not Yet', () => {
        Gamer1.score = 25;
        Gamer1.test().should.equal('Not Yet');
    });
    it('if score > 50 then score = 25', () => {
        Gamer1.score = 55;
        Gamer1.test().should.equal(25);
    });
    it('if the pin number 12 fall then score = 12', () => {
        Gamer1.reset();
        Gamer1.fall([12]);
        Gamer1.score.should.equal(12);
    });
    it('if the number of pin falling is 5 then score = 5', () => {
        Gamer1.reset();
        Gamer1.fall([12,5,6,7,8]);
        Gamer1.score.should.equal(5);
    });
    it('multiplayers, the winner is the first to acheive 50', () => {
        let winner = game.start();
        winner.player.score.should.equal(50);
    })
});