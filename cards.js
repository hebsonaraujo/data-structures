/**
 * Class que representa as cartas.
 * @extends Stack
 */
const _cardValues = Symbol();
const _cardSuits = Symbol();
class Cards extends Stack {
    
    constructor() {
        super();        
        this[_cardSuits] = ["diamonds", "hearts", "spades", "clubs"];
        this[_cardValues] = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];              
        this.cards = {}
        this.mountCards()
        
    }    
    mountCards() {
        let obj = {};
        this[_cardSuits].forEach((el1) => {
            this[_cardValues].forEach((el, id) => {
                obj[id] = {
                    id: ++id,
                    value: el,
                    suits: el1
                }
            })
            this.cards[el1] = {
                ...obj,                
            }            
        })      
    }
     /**
     * 
     * @param {Stack} n - Pilha para armazenar as cartas
     */   
    shuffleCards(n) { 
        let c = new Cards();
        let arr = [];          
        let itemsCard = c.cards;
        for(let card in itemsCard) {
            for(let j in itemsCard[card]) {                
                arr.push(itemsCard[card][j]);                
            }
        }
        const arrLength = arr.length;        
        for (let i = 0; i < arrLength; i++) {          
            let k = Math.floor(Math.random() * arr.length + 1) - 1;                        
            n.push(arr.splice(k, 1).pop())                                    
        }
    }

}
