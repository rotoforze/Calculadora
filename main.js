//Acortamos código
const textarea = document.querySelector("textarea");
const limpiar = document.getElementById("clear");
const swmm = document.getElementById("swmm");
const porcent = document.getElementById("percentage");
const div = document.getElementById("div");
const mult = document.getElementById("mult");
const men = document.getElementById("men");
const mas = document.getElementById("mas");
const igual = document.getElementById("igual");
const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
//Variables
var bool = true;
var boolMult = false;
var boolDiv = false;
var boolMen = false;
var boolMas = false;
var boolLimpiar = false;
var boolCambiarNum = false;
var tempNum1;
var tempNum2;
var temp1 = 0;
var temp2 = 0;
let value1 = [];
let value2 = [];
const orange = "ff8800";
const white = "f5f5f5";
const black = "252525";
const grey = "b0b0b0"; 
const darkgrey = "454545";


window.onload = start();
function start(){
    limpiar.addEventListener("click", clean);
    swmm.addEventListener("click", swmmf);
    mult.addEventListener("click", operador);
    mult.style.backgroundColor = "#"+orange;
    div.addEventListener("click", operador);
    mas.addEventListener("click", operador);
    men.addEventListener("click", operador);
    igual.addEventListener("click", igualf);
    porcent.addEventListener("click", percf);
    mult.style.backgroundColor = "#"+orange
    div.style.backgroundColor = "#"+orange
    mas.style.backgroundColor = "#"+orange
    men.style.backgroundColor = "#"+orange
    mult.style.color = "#"+white;
    div.style.color = "#"+white;
    mas.style.color = "#"+white;
    men.style.color = "#"+white;
    num0.addEventListener("click", function(){number(0)});
    num1.addEventListener("click", function(){number(1)});
    num2.addEventListener("click", function(){number(2)});
    num3.addEventListener("click", function(){number(3)});
    num4.addEventListener("click", function(){number(4)});
    num5.addEventListener("click", function(){number(5)});
    num6.addEventListener("click", function(){number(6)});
    num7.addEventListener("click", function(){number(7)});
    num8.addEventListener("click", function(){number(8)});
    num9.addEventListener("click", function(){number(9)});
}



function clean(){
    if(boolLimpiar == false){
        clearAll();
    }else if(boolLimpiar == true){
        clearSingle();
    }
    //Comprobamos si no hay valor en value
    function clearSingle(){
        if(bool == true){
            for (i = temp1;i>=0;i--){
                value1.pop(i);
            }
            temp1 = 0;
            textarea.value=null;
        }else if(bool == false){
            for (i = temp2;i>=0;i--){
                value2.pop(i);
            }
            temp2 = 0;
            textarea.value=null;
        }
    }
    function clearAll(){
        for (i = temp1;i>=0;i--){
            value1.pop(i);
        }
        for (i = temp2;i>=0;i--){
            value2.pop(i);
        }
        temp1 = 0;
        temp2 = 0;
        textarea.value=null;
    }
}
function swmmf(){
    //cambiar si es número negativo o positivo
}
function percf(){
    //Hacer el porcentaje del número
    if(bool = true){
        tempNum1 = tempNum1 / 100;
        textarea.value = tempNum1;
    }else if(bool = false){
        tempNum2 = tempNum2 / 100;
        textarea.value = tempNum2;
    }else{
        //Error
    }
}
function igualf(){
    if(temp1 == 0 || temp2 == 0){
        console.log("falta un número")    
    }else{
        if(boolDiv == true){
            x = parseFloat(tempNum1) / parseFloat(tempNum2);
        }else if(boolMult == true){
            x = parseFloat(tempNum1) * parseFloat(tempNum2);
        }else if(boolMen == true){
            x = parseFloat(tempNum1) - parseFloat(tempNum2);
        }else if(boolMas == true){
            x = parseFloat(tempNum1) + parseFloat(tempNum2);
        }else{
            //Error
        }
        tempNum1 = x;
        tempNum2 = null;
        boolLimpiar = true;
        clean();
        textarea.value = x;
    }
}
function operador(){
    var op = this.innerHTML;
    console.log(op)
    //Saber cuál es la operación que se va a realizar
    if(op == "/"){
        bool = !bool;
        boolMult = false; boolMas = false; boolMen = false; boolDiv = true;
        this.style.backgroundColor = "#"+white;
        this.style.color = "#"+orange;
        mult.style.backgroundColor = "#"+orange
        mas.style.backgroundColor = "#"+orange
        men.style.backgroundColor = "#"+orange
        mult.style.color = "#"+white;
        mas.style.color = "#"+white;
        men.style.color = "#"+white;
    }else if(op == "x"){
        bool = !bool;
        boolMult = true; boolMas = false; boolMen = false; boolDiv = false;
        this.style.backgroundColor = "#"+white;
        this.style.color = "#"+orange;
        div.style.backgroundColor = "#"+orange
        mas.style.backgroundColor = "#"+orange
        men.style.backgroundColor = "#"+orange
        div.style.color = "#"+white;
        mas.style.color = "#"+white;
        men.style.color = "#"+white;
    }else if(op == "-"){
        bool = !bool;
        boolMen = true; boolMas = false; boolDiv = false; boolMult = false;
        this.style.backgroundColor = "#"+white;
        this.style.color = "#"+orange;
        mult.style.backgroundColor = "#"+orange
        div.style.backgroundColor = "#"+orange
        mas.style.backgroundColor = "#"+orange
        mult.style.color = "#"+white;
        div.style.color = "#"+white;
        mas.style.color = "#"+white;
    }else if(op == "+"){
        bool = !bool;
        boolMas = true; boolDiv = false; boolMen = false; boolMult = false;
        this.style.backgroundColor = "#"+white;
        this.style.color = "#"+orange;
        mult.style.backgroundColor = "#"+orange
        div.style.backgroundColor = "#"+orange
        men.style.backgroundColor = "#"+orange
        mult.style.color = "#"+white;
        div.style.color = "#"+white;
        men.style.color = "#"+white;
    }
    console.log("boolDiv: "+boolDiv+" "+"BoolMas: "+boolMas+" "+"boolMen: "+boolMen+" "+"boolMult: "+boolMult)
    boolCambiarNum = true;
    //Cambiar color del botón
    console.log(this.style.backgroundColor+" test "+this.style.color)
    if (this.style.backgroundColor = "#"+orange){
        //Cambiar a blanco y naranja
        this.style.backgroundColor = "#"+white;
        this.style.color = "#"+orange;
    }else{
        //Cambiar a naranja y blanco
        this.style.backgroundColor = "#"+orange;
        this.style.color = "#"+white;
    }
}
function number(x){
    if(boolCambiarNum == false){
        addNum(x);
    }else if(boolCambiarNum == true){
        textarea.value = null;
        boolCambiarNum = false;
        addNum(x);
    }
    function addNum(x){
        if (bool == true){
            //Primer número
            value1.push(x);
            console.log("num1: "+value1);
            textarea.value = textarea.value+value1[temp1];
            tempNum1 = textarea.value;
            temp1++;
        }else if(bool == false){
            //Segundo número
            value2.push(x);
            console.log("num2: "+value2);
            textarea.value = textarea.value+value2[temp2];
            tempNum2 = textarea.value;
            temp2++;
        }else{
            //Error
        }
    }
}