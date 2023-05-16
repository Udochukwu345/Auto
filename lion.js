// const selectElement=(selector) => {
//     const element=document.querySelector(selector);
//     if(element) return element;
//     throw new Error('Cannot find the element (selector)')
// }
// const form=selectElement('form');
// const input=selectElement('input');
// const result=selectElement('result');
// const hamburger=selectElement('hamburger ');
// const navmenu=selectElement(nav-menu);

// setInterval(() =>{
// // investments 

// });
// let items=document.querySelectorAll('.liondepositamt');
// console.log(items);
// class Calculator{
// constructor(previousOperandtextElement,currentOperandtextElement){
// this.previousOperandtextElement=previousOperandtextElement
// this.currentOperandtextElement=currentOperandtextElement
// }
// clear() {

// }
// delete(){

// }
// appendNumber(){

// }
// chooseOperation(){


// }
// compute(){

// }
// updateDisplay(){
    
// }
// }
// const numberButtons=document.querySelectorAll('[data-number]')
// const operationButtons=document.querySelectorAll('[data-operation]')
// const equalsButton=document.querySelector('[data-equals]')
// const deleteButton=document.querySelector('[data-delete]')
// const allClearButton=document.querySelector('[data-all-clear]')
// const previousOperandtextElement=document.querySelector('[data-previous-operand]')
// const currentOperandtextElement=document.querySelector('[data-current-operand]')

// const hamburger=document.querySelector(".hamburger ");
// const navmenu=document.querySelector(".nav-menu");
// hamburger.addEventListener(() =>{
//     hamburger.classList.toggle("active");
//     navmenu.classList.toggle("active");
// })
// document.querySelectorAll(".nav-link").forEach(n => 
//     n.addEventListener("click", () => {
//         hamburger.classList.remove("active");

// }))
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const endpoint = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';

// fetch(endpoint)
//   .then(response => response.json())
//   .then(data => {
//     const btcPrice = data.data.amount;
//     console.log(`The current price of Bitcoin is $${btcPrice}.`);
//   })
//   .catch(error => {
//     console.error('Error fetching Bitcoin price:', error);
//   });
const endpoint = 'https://api.polygon.io/v1/last_quote/tokens/MATIC/USD?apiKey=558HTH3YEHDF2M7C45MU4TIHCNMRZY527Z';

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const maticPrice = data.lastQuote;
    console.log(`The current price of MATIC is $${maticPrice}.`);
  })
  .catch(error => {
    console.error('Error fetching MATIC price', error);
  });

