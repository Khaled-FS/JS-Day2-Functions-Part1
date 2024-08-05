function task(number) {
  console.log(`-----task ${number}------`);
}

function printName() {
  console.log("Khaled ALshammari");
}
task(1);
printName();

function printAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(age);
}
task(2);
printAge(2000);

function printAgeAndName(age, name) {
  console.log(`'Hello ${name} you are ${age} years old'`);
}
task(3);
printAgeAndName(24, "Khaled");

function printHello(name, lang) {
  if (lang == "en") {
    console.log(`Hello ${name}`);
  } else if (lang == "es") {
    console.log(`Hola ${name}`);
  } else if (lang == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (lang == "tr") {
    console.log(`Merhaba ${name}`);
  }
}
task(4);
printHello("Khaled", "es");

function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  } else {
    console.log("equal");
  }
}

task(5);
printMax(20, 50);
