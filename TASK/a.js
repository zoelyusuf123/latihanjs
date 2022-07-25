const yy= "saya suka javascript";

const aman = yy.substring(3,-1)+(' ')+yy.substring(4,3)+yy.substring(6,4)+(' ')+yy.substring(9,6)+('')+yy.substring(12,9)+(' ')+yy.substring(15,12)+(' ')+yy.substring(18,15)+(' ')+yy.substring(20,18);

const yangAda = [];
let hasil = '';

for (let i = 0; i <= aman.length; i++) {
  if (aman[i] === ' ' || i === aman.length) {
    yangAda.push(hasil);
    hasil = '';
  } else {
    hasil += aman[i];
   }
 }
console.log(yangAda);

