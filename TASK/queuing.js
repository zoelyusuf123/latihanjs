/**
 * Dalam sebuah bank terdapat sebuah antrian dengan kasus sebagai berikut
 */

// 1. Tidak ada antrian

// 2. Lusi Lala Lucky memasuki antrian

// 3. Antrian paling depan dipanggil

// 4. Bu Laras memasuki antrian. Karena sudah tua dia didahulukan di antrian paling depan.

// 5. Antrian paling belakang memutuskan untuk keluar dari antrian


const bank = []
const antrian  = bank;
antrian.push('lusi','lala','lucky');
console.log(' masuk antrian'+ '  '+ bank);
antrian.shift();
console.log('antrian paling depan dipangil'+'   '+ bank);
const antrian2 = antrian;
antrian.unshift('BULaras')
console.log('karena sudah tua didahulukan diantrian paling depan  '+'  '+ antrian)
antrian2.pop();
console.log('antrian paling belakang memutuskan keluar antrian'+ ' '+bank);

