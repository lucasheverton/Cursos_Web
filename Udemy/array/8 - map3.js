Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const carrinho = [
    '{ "nome": "Bolacha", "preco": 2.25 }',
    '{ "nome": "Sal", "preco": 1.59 }',
    '{ "nome": "Desodorante", "preco": 14.98 }',
    '{ "nome": "Nescau", "preco": 10.99 }'
]

//Retornar um array apenas com os preços usando map

let onlyPrice = carrinho.map2(function(json) {
    return JSON.parse(json).preco;
})

console.log(onlyPrice)