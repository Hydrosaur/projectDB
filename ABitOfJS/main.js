function createBits(bits) {
	var bitcombos = [];
	while(bitcombos.length != Math.pow(2, bits)){
		var bitweld = "";
		for (var i = 0; i < bits; i++) {
			var ran = Math.floor(Math.random() * (2 - 0));
			bitweld = bitweld + ran;
		}
		bitcombos.push(bitweld)
	}
	for (var i = 0; i < bitcombos.length; i++) {
	    for (var j = 0; j < bitcombos.length; j++){
	        if (i != j) {
	            if (bitcombos[i] == bitcombos[j]) {
	                var x = bitString(bits);
	                if(!bitcombos.includes(x)){
	                	bitcombos[j] = bitweld;
	                } else {
	                	for (var i = 0; !bitcombos.includes(x); i++) {
	                		x = bitString(bits);
	                	}
	                	bitcombos[j] = bitweld;
	                }
					console.log("Fixed Duplicates:" + bitcombos[i] + " " + bitcombos[j])
	            }
	        }
	    }
	}
	return bitcombos;
}

function bitString(bits){
	var bitwelder = "";
	for (var i = 0; i < bits; i++) {
		var ran = Math.floor(Math.random() * (2 - 0));
		bitwelder = bitwelder + ran;
	}
	return bitwelder;
}
        