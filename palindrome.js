function palindrome(str) {
 
  str = str.replace(/[\W_]/g, '').toLowerCase();
	for (var i = 0, len = str.length -1; i < len/2; i ++){
		if (str[i] !== str[len-i]){
			return false;
		}
	}
	return true;
 }
	
 palindrome("eye");