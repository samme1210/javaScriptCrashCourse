// console.log('Hello world'[10])
// console.log('12345'.length)

// let celcius = 10;
// let farenheight = celcius * 1.8 + 32;

// console.log(farenheight);

// let cash = 50;
// let price = 40;
// let isStoreOpen = false;
// let difference = cash - price;

// if (cash > price) {
//     console.log(`Here is your change £${difference}`)
// }

// else if (cash === price) {
//     console.log('you paid the exact amount thanks')
// }

// else {
//     console.log(`you still owe £${difference * -1}`)
// }

// let str = cash >= price && isStoreOpen ? 'give receipt' : 'Do not give receipt'
// console.log(str);

// let count = 1;

// while (count <= 5){
//     console.log(count)
//     count = count + 1;
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i + 1);
// }

// for (let num = 1; num <= 20; num++) {

//     if (num % 3 === 0 && num % 5 !== 0) {
//         console.log('frontend')
//     } 
//     else if (num % 3 !== 0 && num % 5 === 0) {
//         console.log('simplified')
//     }
//     else {
//         let str = num % 3 === 0 && num % 5 === 0 ? 'frontend simplified' : num
//         console.log(str);
//     }
// }

// const str = 'Frontend simplified'

// for (i = 0; i < str.length; i++) {
//     console.log(str[i])
// }


function convertCelciusToFarenheight(celcius) {
    let farenheight = celcius * 1.8 + 32;
    return farenheight;
}

console.log(convertCelciusToFarenheight(10))