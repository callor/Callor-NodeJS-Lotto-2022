exports.shuffle = function(arr) {
	if (arr instanceof Array) {
		var len = arr.length;
		if (len == 1)
			return arr;
		var i = len * 2;
		while (i > 0) {
			var idx1 = Math.floor(Math.random() * len);
			var idx2 = Math.floor(Math.random() * len);
			if (idx1 == idx2)
				continue;
			var temp = arr[idx1];
			arr[idx1] = arr[idx2];
			arr[idx2] = temp;
			i--;
		}
	} else {
		alert("No Array Object");
	}
	return arr;
}

exports.sort = function(arr) {

	for (var i = 0; i < arr.length; i++) {
		for (var j = i; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
