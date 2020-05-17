function takeANumber(line, name) {
  line.push(name);
  var num = line.length + 1;
  console.log(`Welcome ${name}. You are number ${num} in line.`);
  return (line);
}

function nowServing(line) {
  if (line.length === 0) {
    console.log("There is nobody waiting to be served!");
  } else {
    return ("Now serving " + line.shift());
  }
}

function currentLine(line) {
  if (line.length === 0) {
    console.log("The line is currently empty.");
  } else {
    var lineString = "The line is currently: ";
    for (let i = 0; i < line.length; i++) {
      if (i === (line.length - 1)) {
        lineString += i + ". " + line[i]
      } else {
        lineString += i + ". " + line[i] + ", "
      }
    }
  }
}
