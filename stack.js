// items = {
//     0: 99,
//     1:90
// }
/**
 * Class que representa a pilha.
 */
class Stack {
    constructor() {
        this.items = {},
        this.count = 0
    }
    push(el){
        this.items[this.count] = el;
        this.count++;
    }
    pop(){        
        if(this.isEmpty()) {
            return undefined;
        }        
        this.count--;
        const elRemoved = this.items[this.count];
        delete this.items[this.count];                
        return elRemoved;
    }
    peek(){
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    isEmpty(){
        return this.count === 0;
    }
    clear(){
        this.items = {};
        this.count = 0;
    }
    size(){
        return this.count;
    }
    toString() {
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`
        for(let i = 1;i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}
