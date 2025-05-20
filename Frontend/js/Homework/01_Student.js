let mark = Number(prompt("Enter Marks :"));
if (mark < 33) {
    console.log("You are Fail");
} else if (mark < 65) {
    console.log("You are Pass By second Division");
} else if (mark <= 75) {
    console.log("You are Pass By First Division ");
} else if (mark > 75) {
    console.log("You are Pass By Distinction ");
}