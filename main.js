var cArgs = process.argv.slice(2);
var phonetics = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];

var i;
for (i = 0; i < cArgs.length; i++){
  var currentNumber = parseInt(cArgs[i]);
  cArgs[i] = "";
}
