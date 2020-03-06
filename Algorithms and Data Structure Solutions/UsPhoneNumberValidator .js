// Kindly note that this method is used for future readability purposes as opposed to a one line RegExp which is baout 5 times faster
function telephoneCheck(str) {
  const validPhoneNumberPatterns = [
    // Check 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,

    //check 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,

    //check  1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    //check 5555555555
    /^\d{10}$/,

    //check (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,

    //check 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,

    //check 1(555)555-5555
    /1\(\d{3}\)\d{3}-\d{4}/
  ];

  return validPhoneNumberPatterns.some((PhoneNumberPattern) => PhoneNumberPattern.test(str));
}
telephoneCheck("555-555-5555");
