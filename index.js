function takeANumber(line, name) {
  line.push(name);
  var num = line.length + 1;
  console.log(`Welcome ${name}, you are number ${num} in line.`);
}
