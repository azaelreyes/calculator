function add(num1, num2){
    return num1+num2;
};
function subtract(num1, num2){
    return num1-num2;
};
function multiply(num1, num2){
    return num1*num2;
};
function divide(num1, num2){
    return num1/num2;
};

function operate(op, num1, num2){
    if (op == "+") {
        return add(num1,num2);
    } else if (op == "-") {
        return subtract(num1,num2);
    } else if (op == "*") {
        return multiply(num1,num2);
    } else if (op == "/") {
        return divide(num1,num2);
    };
};



const calcBtn = document.querySelectorAll(".calcBtn"); //all btns
const display= document.querySelector(".display");
let num1='';
let num2='';
let operator = '';

calcBtn.forEach(btn => {

    btn.addEventListener('click', e =>{
        
        let btnClicked = e.target.innerHTML;
        //every time clear(c) gets clicked
        if (btnClicked == 'C') {
            display.innerHTML=0;
            num1='';
            operator='';
            num2='';
           

        //every time equals(=) gets pressed
;        } else if (btnClicked== '='){
            if(num2!=""){
                num1=Number(num1);
                num2=Number(num2);
                display.innerHTML = operate(operator, num1, num2);
                num1=''+display.innerHTML;
                num2='';
                operator='';
            };   

        //every time plus(+) gets pressed
        } else if (btnClicked== '+')  {
            if (num2 == '' && operator =='') {
                num1=display.innerHTML;
                display.innerHTML=0;
                operator = '+';
            } else if(num2 !== ''){
                num1=Number(num1);
                num2=Number(num2);
                display.innerHTML = operate(operator, num1, num2);
                num1= ""+display.innerHTML;
                num2='';
                operator='+';
            };
        //every time minus(-) gets pressed
        } else if(btnClicked== '-' && num1!=='') {
            if (num2 == '' && operator =='') {
                num1=display.innerHTML;
                display.innerHTML=0;
                operator = '-';
            } else if(num2 !== ''){
                num1=Number(num1);
                num2=Number(num2);
                display.innerHTML = operate(operator, num1, num2);
                num1= ""+display.innerHTML;
                num2='';
                operator='-';
            };
         //every time divide(/) gets pressed   
        } else if(btnClicked== '/' && num1!=='' ){

            if (num2 == '' && operator =='') {
                num1=display.innerHTML;
                display.innerHTML=0;
                operator = '/';
            } else if(num2 !== ''){
                num1=Number(num1);
                num2=Number(num2);
                display.innerHTML = operate(operator, num1, num2);
                num1= ""+display.innerHTML;
                num2='';
                operator='/';
            };
        //every time multiply(*) gets pressed
        } else if(btnClicked== '*' && num1!==''){
            if (num2 == '' && operator =='') {
                num1=display.innerHTML;
                display.innerHTML=0;
                operator = '*';
            } else if(num2 !== ''){
                num1=Number(num1);
                num2=Number(num2);
                display.innerHTML = operate(operator, num1, num2);
                num1= ""+display.innerHTML;
                num2='';
                operator='*';
            };
        } else if(btnClicked == 1 || btnClicked == 2 || btnClicked == 3 ||
            btnClicked == 4 || btnClicked == 5 || btnClicked == 6 ||
            btnClicked == 7 || btnClicked == 8 || btnClicked == 9 || 
            btnClicked == 0) {
                if (operator == "") {
                    num1=""+num1+btnClicked;
                    display.innerHTML= num1; 
                } else if(operator !==""){
                    num2=""+num2+btnClicked;
                    display.innerHTML= num2;
                }
        };

        //makes effect that button was clicked
        e.target.classList.add("clicked");
        setTimeout(() => {
            e.target.classList.remove("clicked");
          }, "300");

    });

});

