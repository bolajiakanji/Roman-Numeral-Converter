let input = document.getElementById("number");
let convertButton = document.getElementById("convert-btn");
let output = document.getElementById("output");

function convertToRoman(num) {
  let rm = [
    [
      "M",
      "MM",
      "MMM",
      "MMMM",
      "MMMMM",
      "MMMMMM",
      "MMMMMMM",
      "MMMMMMMM",
      "MMMMMMMMM",
      "MMMMMMMMMM",
    ],
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"],
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"],
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"],
  ];
  let rrm = rm.reverse();
  let yin;
  let snum = String(num).split("");
  let [a, b, c, d] = snum;
  let yd = [];
  yd.push(a * 1, b * 10, c * 100, d * 1000);
  let fr = [];
  let mapsn = yd.filter((el1) => !isNaN(el1));
  let you = mapsn.reduce((y, el) => {
    if (el !== 0) {
      let hj = String(el);
      let kj = Number(hj[0]);
      let k = mapsn.indexOf(el);
      yin = rrm[mapsn.length - 1 - k][kj - 1];
      fr.push(yin);
    } else {
      yin = "";
    }
    return y + yin;
  }, "");
  return you;
}

console.log(convertToRoman(99)); 
let ty = "45";
console.log(ty.indexOf(4));
console.log("3" - 1);

let boo;
let nb;
let me = [1000, 100, 10, 1];
let stu = ["2", "3", "4", "2"];
nb = stu.map((el) => {
  for (let a = 0; a <= 3; a++) {
    if (stu.indexOf(el) == a) {
      boo = el * a;
    }
  }
  return boo;
});
function displayOutput(inputNumber) {
   if (inputNumber === "") {
    output.innerHTML = "Please enter a valid number"
} 
 else  if (inputNumber <=0) {
    output.innerHTML = "Please enter a number greater than or equal to 1"
} else if (inputNumber >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999"

    
}else {
    output.innerHTML=convertToRoman(inputNumber)
    
}
}
convertButton.onclick = ()=>displayOutput(input.value)

