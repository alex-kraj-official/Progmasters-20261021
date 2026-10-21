console.log('Hello World!')

let myFirstNumber = 5

console.log(myFirstNumber)

myFirstNumber = "apple"

console.log(myFirstNumber)

// comments

/* comment block
*/

let num1 = 4
let num2 = 7

let sum = num1 + num2

let sub = num1 - num1

let mul = num1 * num2

let div = num1 / num2

let mar = num1 % num2

console.log(`\nÖsszeg: ${sum}\nKülönbség: ${sub}\nSzorzat: ${mul}\nHányados: ${div}\nMaradék: ${mar}\n`)

let num = 0

if (num > 0) {
    console.log("A szám nagyobb, mint 0")
}
else if (num === 0) {
    console.log("A szám 0")
}
else {
    console.log("A szám kisebb, mint 0")
}

console.log("A program a végére ért")

let a = 5
let b = 7
let guess = 0

if (a + b === guess) {
    console.log("Ügyi vagy, gratulálok!");
}
else {
    console.log("Egy buta tök vagy!");
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("A program a végére ért")

let printcucc = ""
let printcucci = 2
for (i = 100; i < 1000; i++) {
    if (i % 10 === 0) {
        printcucc += (i + " ")
        if (printcucci === 11) {
            console.log(printcucc)
            printcucc = ""
            printcucci = 1
        }
        printcucci++
    }
}

let n = 20
let pyramid = 0

for (let i = 1; i <= n; i++) {
    pyramid *= 10
    pyramid += i
    console.log(pyramid)
}

console.log("------------------")

pyramid = ""

for (let i = 10; i <= n; i++) {
    pyramid += i
    console.log(pyramid)
}

console.log("----------------")

let n2 = 5
let pyramid2

/*
....o....
...ooo...
..ooooo..
.ooooooo.
ooooooooo
*/

for (let i = 1; i <= n; i++) {
    pyramid2 = ""

    for (let j = 0; j <= n2 - 1; j--) {
        pyramid2 += "."
    }

    for (let k = 1; k === n2; k += 2) {
        pyramid2 += "o"
    }

    for (let l = 0; l <= n2 - 1; l--) {
        pyramid2 += "."
    }

    console.log(pyramid2)
}