/**
 * Class que representa o jogo.
 * @extends Player
 */
class Game extends Player {
    constructor() {
        super();
        this.players = [];
        this.round = 0;
        let stack = new Stack();
        //embaralha as cartas
        this.shuffleCards(stack);   
        //define numero de jogadores
        let numberOfPlayers;
        // define lista de jogadores
        this.createPlayers(numberOfPlayers = 5);          
        //numero de rodadas
        const rounds = 5
        this.shareCards(stack,rounds);

        
        //confere quem ganhou a rodada com a carta da mao
        // let winner = this.checkCard();
        // //mostra vencedor
        // this.showWinner(winner);   
        // let cards = new Cards();
        //cards.mountCards()
        // console.log('====>',cards)        
          
    }  
    shareCards(stack,rounds){
        for(let c = 0;c < rounds;c++){
            this.players.forEach(el => {
                el.push(stack.pop());                
            }) 
        }                       
    }       
    
    showWinner(winner) {
        let {id,items} = winner;
        console.log(`O vencedor foi ${id} e sua carta ${items[0]}`)
        this.players.forEach(el => {
            if(el.id !== id){
                console.log(`O jogador é: ${el.id} e sua carta: ${el.items[0]}`);
            }            
        })
    }
    
    checkCard() {
        let arr = [...this.players]
        let stack = [];
        arr.forEach(el => {
            for (let k in el.items) {
                stack.push(el.items[k])
            }
        })
        let maxEl = Math.max(...stack);
        let indice = stack.findIndex((el) => el === maxEl);
        //aumenta ponto do vencedor da rodada
        this.players[indice].score++;
        return this.players[indice]
    }
    
    /**
    * Cria lista de joagdores
    * @param {Number} numberOfPlayers - numero de jogadores da partida
    */
    createPlayers(numberOfPlayers) {
        for (let c = 0; c < numberOfPlayers; c++) {
            let player = new Player()
            player.id = c
            //player.push(n.pop())
            this.players.push(player)
        }
    } 
   
    
}