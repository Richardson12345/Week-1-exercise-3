var rows = 5;

while(rows >= 1) {
  console.log('*');
  rows -- ;
}

//part 1

function fourX(rows){
for(j = 0; j < rows; j++){
  var string = '****'
  console.log(string);
 }
}

fourX(4);
//part 2


function xLadder(row){
  var str = '';
  for(i = 0; i <= row ; i++){
    // var str = ''
    // for(ii = 0; ii <= i; ii++){
    //   str = str + '*';
    // }
    // console.log(str)
    str += '*';
    console.log(str);
  }
}

xLadder(5)


var row = 5;
for(i = 0; i <= row ; i++){
   var str = ''
   for(ii = 0; ii <= i; ii++){
     str = str + '*';
   }
   
  console.log(str);
}
//part 3