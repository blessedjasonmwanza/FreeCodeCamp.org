function palindrome(str) {
    const userinput = str
    
    // convert input to Lowercase
    .toLowerCase()

    /* filter out non-alphanumeric characters*/
    .match(/[a-z0-9]/g);

  // return string matched reversed String
 return userinput.join('') === userinput.reverse().join('');
    
}



palindrome("A man, a plan, a canal. Panama");
