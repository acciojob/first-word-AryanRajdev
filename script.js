function firstWord(s) {
  // your code here
	s = s.trim();
	let ans = "";
	let i = 0;
	while(s[i]!=' '){
		ans += s[i];
		i++;
	}

	return ans;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
