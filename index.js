function takeANumber(line, name) {
  line.push(name);
  var num = line.length + 1;
  console.log(`Welcome ${name}, you are number ${num} in line.`);
  return (line);
}

function nowServing(line) {
  if (line.length === 0) {
    console.log("There is nobody waiting to be served!");
  } else {
    return (line.shift());
  }
}
