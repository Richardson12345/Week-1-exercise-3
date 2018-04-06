var container = '';
function reverseString(str){
    for(var reverse = str.length-1; reverse >=0; reverse--  ){
      container += str[reverse];
  }return container;
}
console.log(reverseString('hello world!'));
