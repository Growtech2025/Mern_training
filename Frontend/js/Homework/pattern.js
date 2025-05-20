// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//         row += String.fromCharCode(65 + j) + " ";
//     }
//     console.log(row);
// }




// #
// include < stdio.h >


//     int main() {
//         int a, b, c, d, e;


//         for (a = 1; a <= 5; a++) {
//             for (b = 1; b <= 5 - a; b++)
//                 printf(" ");
//             for (b = 1; b <= 2 * a - 1; b++)
//                 printf("*");
//             printf("\n");
//         }
//         for (c = 4; c >= 1; c--) {
//             for (d = 1; d <= 5 - c; d++)
//                 printf(" ");
//             for (e = 1; e <= 2 * c - 1; e++)
//                 printf("*");
//             printf("\n");
//         }


//         return 0;
//     }



// #
// include < stdio.h >

//     int main() {
//         int a, b, c, d, e;
//         for (a = 1; a <= 5; a++) {
//             for (b = 1; b <= 5 - a; b++)
//                 printf(" ");
//             for (b = 1; b <= 2 * a - 1; b++) {
//                 if (b == 1 || b == 2 * a - 1)
//                     printf("*");
//                 else
//                     printf(" ");
//             }
//             printf("\n");
//         }
//         for (c = 4; c >= 1; c--) {
//             for (d = 1; d <= 5 - c; d++)
//                 printf(" ");
//             for (e = 1; e <= 2 * c - 1; e++) {
//                 if (e == 1 || e == 2 * c - 1)
//                     printf("*");
//                 else
//                     printf(" ");
//             }
//             printf("\n");
//         }

//         return 0;
//     }