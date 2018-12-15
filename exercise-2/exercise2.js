function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var resultArray = []
//   var obj = {}
  var result ;
    for ( var i = 0; i < arrPenumpang.length; i++){
        var temp = []
        for ( var k = 0; k < arrPenumpang[i].length; k++){
            for ( var j = 0; j < rute.length; j++){
                if ( arrPenumpang[i][k] === rute[j]){
                    temp.push(j)
                    //   console.log(arrPenumpang[i][k])
                }
            }
            // console.log(k)
        }
        result = ((temp[temp.length-1]) - temp[0]) * 2000
        // console.log(temp[temp.length-1]) 
        // console.log(arrPenumpang[i][1])
        var obj = {
            ['penumpang'] : arrPenumpang[i][0],
            ['naikDari'] : arrPenumpang[i][1],
            ['tujuan'] : arrPenumpang[i][2],
            ['bayar'] : result
        }
        resultArray.push(obj)
    }
    return resultArray
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'A', 'F'], ['Icha', 'A', 'B'] ]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]