// nmr 1

const nama = "saya suka javascript"



const arrNames = [];
let strTemp = '';

for (let i = 0; i <= nama.length; i++) {
  if (nama[i] === ' ' || i === nama.length) {
    arrNames.push(strTemp);
    strTemp = '';
  } else {
    strTemp += nama[i];
   }
 }

 
const haha = arrNames.reverse();
 console.log(haha.join(' '));

 //nmr 2
 arrNames.splice(0,1);
 arrNames.reverse();
 console.info(arrNames);

 // jawaban nomor 3
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
