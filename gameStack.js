class Game extends Stack {
    constructor() {
        super();        
        this.cardsTypes = [1,2,3,4,5,6,7,8,9,10,11,12,13];        
        let n = new Stack(); 
        this.shuffleCards(n)
        let p1= n.pop();
        let p2= n.pop();
       
        console.log('****',p1,p2,n)
    }

    shuffleCards(n) {
        let arr = [...this.cardsTypes];              
        for(let i = 0;i < this.cardsTypes.length;i++) {
            n.push(this.removeItems(arr))            
        }  
    }
    removeItems(arr) {
        let arrLength = arr.length;
        let k = Math.floor(Math.random() * arrLength + 1) - 1        
        return arr.splice(k,1).pop();
    }

}
