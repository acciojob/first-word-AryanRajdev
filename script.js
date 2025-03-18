function firstWord(s) {
  // your code here
	s = s.trim();
	let ans = "";
	let i = 0;
	while(s[i]!=' ' && i<s.length){
		ans += s[i];
		i++;
	}

	return ans;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
