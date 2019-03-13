const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
let word = "geeksforgeeks", binary = "", result = "", padding = "";
let bits = [];
let paddingCount = 0;


function toBinary(word) {
  for (var i = 0; i < word.length; i++) {
    n = word[i].charCodeAt(0).toString(2);
    binary += ("000000000"+n).substr(-8)
  }
  bits = binary.match(/.{1,6}/g);
}

function charMap(bits) {
  for (var i = 0; i < bits.length; i++) {
    while(bits[i].length <6){
      bits[i] += '0';
      paddingCount +=1;
    }
    result += charset[parseInt(bits[i], 2)]
  }
  padding = "=".repeat(paddingCount/2);
  result+= padding
  console.log(result);
}

toBinary(word)
charMap(bits)
