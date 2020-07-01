let init = new Game()
let {items} = init.players[0]
let cont = 0;
for (let i in items) {    
    document.getElementById(`${cont}`).src = `../imgs/${items[i].value}_of_${items[i].suits}.png`;
    cont++;
}
console.log('&&&&',init)