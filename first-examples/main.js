let beers = ["erdinger", "corona", "delirium"]
let wines = ["chardonnay", "merlot", "cabernet"]
const numbers = [6, 5, 99, 4]

console.log(numbers.indexOf(99))

const numbers2 = [...numbers]
numbers2[0] = 100

// mutable
beers.push("heineken")
beers.unshift("modelo especial")
beers.splice(2, 1, "fullers")
beers.fill("pato", 0, beers.length - 1)

let b = beers.pop() // elimina del final
let b2 = beers.shift() // elimina del principio

// inmutable
const alcoholicDrinks = beers.concat(wines)
alcoholicDrinks.push("rioja")

const beer2 = beers.slice(0, 2)

show(beers)
showDom("array1", numbers)
showDom("array2", numbers2)

// showDom("array2", alcoholicDrinks)

// HELPERS ----------------------------------------------------------------
function sum(a, b, c, d) {
  return a + b + c + d
}


function show(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function showDom(el, arr) {
  document.getElementById(el).innerHTML = ""

  for (let i = 0; i < arr.length; i++) {
    document.getElementById(el).innerHTML += `<div>${arr[i]}</div>`
  }
}

// console.log(numbers.at(2)); //Parecido a con corchetes pero admite valores negativos