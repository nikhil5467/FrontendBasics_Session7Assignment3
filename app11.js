var counter = (function(){

var count =1;

return function(){
return count++;
}
}());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());