const time = (h, m) => {
    let count = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twen two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty"]
    if (m === 1) {
      return count[m] + " minute past " + count[h];
    } else
    if (m === 59) {
      return count[60 - m] + " minute to " + count[h + 1];
    } else
    if (m === 0 ) {
      return count[h] + " o'clock"; 
    } else
    if (m === 15) {
      return "Quarter past " + count[h];
    } else
    if (m === 30) {
      return "half past " + count[h];
    } else 
    if (m === 45) {
      return "Quarter to " + count[h];
    } else
    if (m < 30) {
      return count[m] + " minutes past " + count[h];
    } else 
    if (m > 30) {
      return count[60 - m] + " minutes to " + count[h + 1];
    }
  };