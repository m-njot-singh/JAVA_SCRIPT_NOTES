const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// old method to join to strings

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// new method my spred operation by ...

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// arrays.flat command flats all internal array into singlee array you can give depth also
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// array.from  it converts into array which is given inside ()

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// arrays.of  make an array to things given in ()
console.log(Array.of(score1, score2, score3));