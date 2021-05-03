var cArgs = process.argv.slice(2);
var phonetics = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];

var i;
for (i = 0; i < cArgs.length; i++){
  var currentNumber = parseInt(cArgs[i]);
  cArgs[i] = phonetics[currentNumber%10];
  currentNumber = Math.floor(currentNumber/10);
  while (currentNumber > 0){
    cArgs[i] = phonetics[currentNumber%10] + cArgs[i];
    currentNumber = Math.floor(currentNumber/10);
  }
}
