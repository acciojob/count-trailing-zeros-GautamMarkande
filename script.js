function trailingZeros(n) {
  //your JS code here. If required.
	let divider = 5;
	let count = 0;
	while (parseInt(n/divider)>=1) {
		count = count + parseInt(n/divider);
		divider = divider*5;
	}
	return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
