var readline=require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var n=0,
	lineArr=[],
	count;
rl.on('line', function(line){
	n+=1;
	if(n===1){
		count=parseInt(line.trim());
	}
	lineArr.push(line.trim());
	if(n===2*count+1){
		wash(lineArr)
		rl.close();
	}
});
function wash(arr) {
	for(var i=0,l=parseInt(arr[0]);i<l;i++){
		me(arr[2*i+1].split(' '),arr[2*i+2].split(' '));
	}
}
function me(args,arr) {
	var first=[],
		result=[],
		n=parseInt(args[0]),
		k=parseInt(args[1]);
	for(var x=0;x<k;x++){
		for(var i=0;i<n;i++){
			first.push(arr.shift());
		}
		for(var j=0;j<n;j++){
			result.push(arr.pop());
			result.push(first.pop())
		}
		arr=result.reverse();
		first=[];
		result=[];
	}
	console.log(arr.join(' '))
}
