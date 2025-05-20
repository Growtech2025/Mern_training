let TotalAmount = 1000;
let order = (
    prompt("Enter W for Withdrawal, C for credit and Check for Check Balance")
);
let Amount = (prompt("Enter Amount :"));

switch (order) {
    case 1:
        TotalAmount -= Amount;
        console.log("Amount Withdrawal Successfully");
        break;
    case 2:
        TotalAmount += Amount;
        console.log("Amount Credit Successfully");
        break;
    case 3:
        console.log(Amount);
        break;
    default:
        console.log("Please enter number 1, 2 or 3");
        break;
}