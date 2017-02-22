var args=process.argv;
args.shift()
args.shift()
args.pop()
function calculate(args) {
	var result=[];
	for(var i=0,l=args.length;i<l;i++){
		var count=parseInt(args[i]),
			drink=0;
		while(count>1){
			if(count===2){
				drink+=1;
				count=0;
			}else{
				drink+=Math.floor(count/3);
				count=Math.floor(count/3)+count%3;
			}
		}
	result.push(drink);
	}
	console.log(result.join(' '));
}

calculate(args);