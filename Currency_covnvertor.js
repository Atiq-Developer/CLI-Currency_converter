import inquirer from "inquirer";
const currecyRate = {
    USD: 1, //BASE CURRENCY
    EUR: 0.92, //EURO
    SAR: 3.75, //SAUDI RIYAL
    INR: 83.24, //INDIAN RUPEES
    PKR: 278.75, // PAKISTANI RUPEES
};
let user_answer = await inquirer.prompt([
    {
        name: "FromCurrency",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "SAR", "INR", "PKR"],
    },
    {
        name: "ToCurrency",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "SAR", "INR", "PKR"],
    },
    {
        name: "Amount",
        message: "Enter Your Amount",
        type: "number",
    }
]);
let fromAmount = currecyRate[user_answer.FromCurrency];
let ToAmount = currecyRate[user_answer.ToCurrency];
let AmountEnter = user_answer.Amount;
let BaseAmount = AmountEnter / fromAmount;
let ConvertAmount = BaseAmount * ToAmount;
console.log(`Amount Entered : ${AmountEnter}`);
console.log(`Slected Currency : ${fromAmount}`);
console.log(`ChangeAble Currency : ${ToAmount}`);
console.log(`Converted Amount is : ${ConvertAmount}`);
console.log(`Base Currency : ${BaseAmount}`);
