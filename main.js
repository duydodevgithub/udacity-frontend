var shirtWidth = 26; // size L (large)
var shirtLength = 33; // size L (large)
var shirtSleeve = 9.63; // size L (large)

if(18 <= shirtWidth && shirtWidth <  20 && shirtLength >= 28 && shirtLength < 29 && 8.13 <= shirtSleeve && shirtSleeve < 8.38) {
    console.log("S");
} else if(20 <= shirtWidth && shirtWidth <  22 && shirtLength >= 29 && shirtLength < 30 && 8.38 <= shirtSleeve && shirtSleeve < 8.63) {
    console.log("M");
} else if(22 <= shirtWidth && shirtWidth <  24 && shirtLength >= 30 && shirtLength < 31 && 8.63 <= shirtSleeve && shirtSleeve < 8.88) {
    console.log("L");
} else if(24 <= shirtWidth && shirtWidth <  26 && shirtLength >= 31 && shirtLength < 33 && 8.88 <= shirtSleeve && shirtSleeve < 9.63) {
    console.log("XL");
} else if(26 <= shirtWidth && shirtWidth <  28 && shirtLength >= 33 && shirtLength < 34 && 9.63 <= shirtSleeve && shirtSleeve < 10.13) {
    console.log("2XL");
} else if(28 <= shirtWidth && shirtLength <= 34 && shirtSleeve <= 10.13) {
    console.log("3XL");
}
 else {
    console.log("N/A");
}