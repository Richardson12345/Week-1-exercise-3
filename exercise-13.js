function xo(str) {
    countX = 0;
    countO = 0;
    for(i =str.length; i >= 0; i-- ){
      var store = str[i]
      if (store === 'x'){
        countX ++
      }if(store === 'o'){
        countO ++
      }
    }
   return countX === countO;
    // you can only write your code here!
  }
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true