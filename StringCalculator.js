class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    
    let delimiter = /,|\n/;
    
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEnd));
      numbers = numbers.substring(delimiterEnd + 1);
    }
    
    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    
    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
}

// Example usage:
const calculator = new StringCalculator();
console.log(calculator.add("")); // 0
console.log(calculator.add("1")); // 1
console.log(calculator.add("1,5")); // 6
console.log(calculator.add("1\n2,3")); // 6
console.log(calculator.add("//;\n1;2")); // 3
