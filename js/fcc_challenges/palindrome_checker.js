function palindrome(str) {
  const palindromeWord = str.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const reversedPalindromeWord = palindromeWord.split("").reverse().join("");

  if (palindromeWord === reversedPalindromeWord) return true;
  return false;
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /- :) 0-0");
palindrome("five|_/|four");
