// console.log("hey i am working");
// // arithmetic operator
// console.log("this is +", 10 + 20);
// console.log("this is -", 120 - 20);
// console.log("this is *", 10 * 20);
// console.log("this is /", 100 / 20);
// console.log("this is %", 100 % 20);
// console.log("this is ^", 10 ** 2);



// // Logical operator
// // AND-: jab dono contion TRUE HOGI TABHI TRUE AAEGA agar pahli condition false to aage check nhi karega
// console.log(true && true);//true
// console.log(false && false);// false
// console.log(false && true);//false
// console.log(true && false);//false

// // OR-: jab koi ek contion TRUE HOGI TABHI TRUE AAEGA and pahli condition agar false hai to dusri condition check karega
// console.log(true || true);//true
// console.log(false || false);// false
// console.log(false || true);//true
// console.log(true || false);//true


// // Not ! true ko false karne ke leaye and false ko true karne ke leaye
// console.log(!true);//false
// console.log(!false);// true


// comparision Operator
// kinhi do values ko compare karne ke leaye
// console.log(10 < 20);//true
// console.log(10 > 20);// false
// console.log(10 == "10");//true
// console.log(10 === "10");//false
// console.log(10 <= 10);//true
// console.log(20 >= 20);// true
// console.log(10 != "20");//true
// console.log(10 !== "10");// true
// console.log(10 != 9);//true
// console.log(10 !== 10);// true


// let x=10;
// console.log(++x); //output : 11
// console.log(x++); //output : 11
// console.log(x) //output : 12

// console.log(--x); //output : 11
// console.log(x--); //output : 11
// console.log(x) //output : 10

// let a = 10
// let b = 20
// console.log(a++ + ++b)

// let a = 5;
// let b = 3;
// console.log(a++ + ++b + ++a + ++b )

// Conditions -> Its used for controlling the flow code. it has types 1) if 2)ternary 3) switch
// if and switch  both are statements(statements is something which is not store to any varible)
// ternary is a expression(express is something which is store to any varible)

// if ke syntex
// if(10<=5){
//    console.log("ye to bada hai kon 3");
// }

// if else kee syntex 
// let age=90;
// if(age>=95){
//    console.log("Samay najdeek hai");
// }
// else{
//    console.log("Samay najdeek nhi hai");
// }

//else if ladder

// let ticket="confirm"
// if(ticket==="waiting"){
//    console.log("aap mumbai nhi aa sakte hai");
// }
// else if(ticket==="cancle"){
//    console.log("Ab tum ghar me rho");
// }
// else{
//     console.log("congralutions aap mumbai aa rhe hai");
// }


//ternary
// let LOI = true;
// let offerLatter = false;
// const kyaAppEngineerHai = LOI || offerLatter ? "You are selected" : "You are not selectedn keep applying";
// console.log(kyaAppEngineerHai);


//SWITCH 
// let num = prompt();
// console.log(num);
// console.log(typeof (num));
// num = parseInt(num)

// // this is readable wise and managing vice good
// switch (num) {
//     case 1: console.log("me hu no.1 ");
//         break;
//     case 2: console.log("me hu no.2 ");
//         break;
//     case 3: console.log("me hu no.3 ");
//         break;
//     case 4: console.log("me hu no.4 ");
//         break;
//     case 5: console.log("me hu no.5 ");
//         break;
//     default: console.log("me kisi cheej ke layak nhi hu ");
// }


// below code is complex to manage 
// if (num == 1) {
//     console.log("me hu no.1 ");
// }
// else if (num == 2) {
//     console.log("me hu no.2 ");
// }
// else if (num == 3) {
//     console.log("me hu no.3 ");
// }
// else if (num == 4) {
//     console.log("me hu no.2 ");
// }
// else if (num == 5) {
//     console.log("me hu no.2 ");
// }
// else {
//     console.log("me kisi cheej ke layak nhi hu ");
// }


// Loops-:  Its used to perform any task repeatedly till certain condition true.
// in js loop has 5 types abhi ke leaye 3 loops -> 1)while loop 2)do while loop 3)for loop

//while loop ke leaye condition true hona jaruri hai
// let n=0;
// while(n<=10){
//     console.log((n++));
//     // n++;
// }
// let i=0;


// do while loop ek bar jarur chalega condition galt hone par bhi
// do{
//     console.log(i);
//     i++;
// }
// while(i>=5);

//for loop -> eske chalne ke leaye bhi condition true hona jaruri hai 

// for(let x=0;x<=8;x++){
//     console.log(x);
// }

// let x=0
// for(;x<=8;x++){
//     console.log(x);
// }
// // console.log(x);

// let x1;
// for(;;x1++){
//     console.log(x1);
// }

// let x2;
// for(;;){
//     console.log(x2);
// }
