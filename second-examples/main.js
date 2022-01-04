let beers = [{
  name: "Heineken",
  price: 3.5,
  alcohol: 8.5
},
{
  name: "Stella Artouis",
  price: 5.5,
  alcohol: 5
},
{
  name: "Corona",
  price: 2.5,
  alcohol: 4.5
},
{
  name: "Budweiser",
  price: 6,
  alcohol: 4.5
},
{
  name: "Corona",
  price: 1,
  alcohol: 1
}
]

const c = beers.reduce((acc, beer) => acc + " " + beer.name, " ")
console.log(c);

// const beers2 = beers.map(element => {
//   return element.price * 2
// })

// beers.reverse();

// let fn = (e) => e.price > 290

// console.log(beers.some(fn))

// const beers2 = beers.filter(element => element.name === "Corona")


// beers.sort((a, b) => {
//   if (a.name > b.name) {
//     return 1
//   }
//   if (a.name < b.name) {
//     return -1
//   }
//   return 0
// })

showDom("array1", beers)
// showDom("array2", beers2)

const fns = [
  () => console.log("Soy el primero"),
  () => console.log("Soy el segundo"),
  () => console.log("Soy el tercero")
]

fns.forEach(element => element());

// HELPERS ----------------------------------------------------------------
function show(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function showDom(el, arr) {
  document.getElementById(el).innerHTML = ""
  for (let e of arr) {
    document.getElementById(el).innerHTML += `<div>${e.name} $${e.price} ${e.alcohol}</div>`
  }
}

// console.log(numbers.at(2)); //Parecido a con corchetes pero admite valores negativos