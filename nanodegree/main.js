// var shirtWidth = 26; // size L (large)
// var shirtLength = 33; // size L (large)
// var shirtSleeve = 9.63; // size L (large)

// if(18 <= shirtWidth && shirtWidth <  20 && shirtLength >= 28 && shirtLength < 29 && 8.13 <= shirtSleeve && shirtSleeve < 8.38) {
//     console.log("S");
// } else if(20 <= shirtWidth && shirtWidth <  22 && shirtLength >= 29 && shirtLength < 30 && 8.38 <= shirtSleeve && shirtSleeve < 8.63) {
//     console.log("M");
// } else if(22 <= shirtWidth && shirtWidth <  24 && shirtLength >= 30 && shirtLength < 31 && 8.63 <= shirtSleeve && shirtSleeve < 8.88) {
//     console.log("L");
// } else if(24 <= shirtWidth && shirtWidth <  26 && shirtLength >= 31 && shirtLength < 33 && 8.88 <= shirtSleeve && shirtSleeve < 9.63) {
//     console.log("XL");
// } else if(26 <= shirtWidth && shirtWidth <  28 && shirtLength >= 33 && shirtLength < 34 && 9.63 <= shirtSleeve && shirtSleeve < 10.13) {
//     console.log("2XL");
// } else if(28 <= shirtWidth && shirtLength <= 34 && shirtSleeve <= 10.13) {
//     console.log("3XL");
// }
//  else {
//     console.log("N/A");
// }

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
// var education = "no high school diploma";

// // set the value of this based on a person's education
// var salary;

// // your code goes here
// switch(education) {
//     case "no high school diploma":
//         salary = 25636;
//         break;
//     case "a high school diploma":
//         salary = 35256;
//         break;
//     case "an Associate's degree":
//         salary = 41496;
//         break;
//     case "a Bachelor's degree":
//         salary = 59124;
//         break;
//     case "a Master's degree":
//         salary = 69732;
//         break;
//     case "a Professional degree":
//         salary = 89960;
//         break;
//     case "a Doctoral degree":
//         salary = 84396;
//         break;
// }

// console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");


// /*
//  * Programming Quiz: JuliaJames (4-1)
//  */

// var x = 1;

// while (x <= 20) {
//     // check divisibility
//     // print Julia, James, or JuliaJames
//     // increment x
//     if(x % 3 === 0) {
//         if(x % 5 === 0) {
//             console.log("JuliaJames");
//         } else {
//             console.log("Julia");
//         }
//     } else if(x % 5 === 0) {
//         console.log("James");
//     } else {
//         console.log(x);
//     }
//     x++;
// }

// var num = 99;
// while (num > 0) {
//     if(num === 2) {
//         console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");        
//     }
//     else if(num === 1) {
//         console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
//     } else {
//         console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num -1) + " bottles of juice on the wall!");
//     }
//     num--;
// }

// var t = 60;
// while(t >= 0) {
//     if(t === 50){
//         console.log("Orbiter transfers from ground to internal power");  
//         t--;      
//     } else if(t === 31) {
//         console.log("Ground launch sequencer is go for auto sequence start");   
//         t--;     
//     } else if(t === 16) {
//         console.log("Activate launch pad sound suppression system");   
//         t--;     
//     } else if( t === 10) {
//         console.log("Activate main engine hydrogen burnoff system");
//         t--;
//     } else if(t === 6) {
//         console.log("Main engine start");
//         t--;
//     } else if(t === 0) {
//         console.log("Solid rocket booster ignition and liftoff!");        
//         t--;
//         break;
//     }
//     console.log("T-" + t + " seconds");
//     t--;
// }


// for(var i = 0; i <= 25; i++) {
//     for(var j = 0; j < 100; j++) {
//         console.log(i + "-" + j);
//     }
// }

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
// function makeLine(length) {
//     var line = "";
//     for (var j = 1; j <= length; j++) {
//         line += "* ";
//     }
//     return line + "\n";
// }

// // your code goes here.  Make sure you call makeLine() in your own code.
// function buildTriangle(x) {
//     var result = "";
//     for(var i = 1; i <= x; i++) {
//         result+= makeLine(i);
//     }
//     return result;
// }

// // test your code by uncommenting the following line
// console.log(buildTriangle(10));

// var bills = [50.23, 19.12, 34.01,
//     100.11, 12.15, 9.90, 29.11, 12.99,
//     10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];

// var totals = bills.map(function(value){
//     value = Number((value*1.15).toFixed(2));
//     return value;
// })
// console.log(totals);

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for(var row = 0; row < numbers.length; row++){
    for(var column = 0; column < numbers[row].length; column++) {
        if(numbers[row][column] % 2 === 0) {
            numbers[row][column] = "even";
        } else {
           numbers[row][column] = "odd"; 
        }
    }
}
// console.log(numbers);

let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
