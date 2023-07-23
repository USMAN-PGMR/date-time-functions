
// for date,year
var now = new Date();
var year = now.getFullYear(year)
document.getElementById("year").innerText = year

// clear input field 
document.getElementById('clear').onclick = function(){
    document.getElementById('search').value=""
}

// clear output
function clearOutput(){
    document.getElementById('output').innerHTML="";
}
//output function
const showOutput = (output) =>{
    document.getElementById('output').innerHTML=output;
}


// orignal statement 
let rightNowDate= new Date()
document.getElementById('oraginalString').innerHTML = rightNowDate;

// get name of today
var daysNames=[ "Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
function nameOfToday(){
    let theDay=rightNowDate.getDay();
    let nameOfToday=daysNames[theDay];
    showOutput("<h1 class=text-primary>"+nameOfToday+"</h1>")
}
//  arrow function for tostify
const toastifyerror=(text,color)=>{
    Toastify({
        text: text,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #2193b0, #6dd5ed)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    //   return;
 }
// calculate days passed i born
 function calculateDaysPassed(){
    let inputValue=document.getElementById('search').value;
    let dob=inputValue;
    if(!dob){
        toastifyerror("Please Enter Your Date of Birthday");
        return;
          
    }
    let bornDate= new Date(dob);
    let msDiff= rightNowDate.getTime()-bornDate.getTime();
    let daysDiff=msDiff/(1000*60*60*24);
    let html='<span class=text-success>'+Math.floor(daysDiff)+'</span>'+" "+"days have been passed since you born" ;
    showOutput(html)
 }
//  next birthday
function nextBirthday(){
    let inputValue=document.getElementById('search').value;
    let dob=inputValue;
    if(!dob){
        // alert('please enter data')
        toastifyerror("Please Enter Your Next Birthday Date");
        return;
    }
    let bornDate= new Date(dob);
    let msDiff= bornDate.getTime()-rightNowDate.getTime();
    let daysDiff=msDiff/(1000*60*60*24);
    let html='Your Next Birthday is'+" "+'<span class=text-primary>'+Math.floor(daysDiff)+'</span>'+" "+"days away" ;
    showOutput(html)
}
//toastify for differ color
const toastifyConditional=(text,color)=>{
    Toastify({
        text: text,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: color,
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
// Greet user
function greetUserBtn(){
    let username=prompt('Enter Your Name');
    if(!username){
        toastifyConditional("Please Enter Your Name","linear-gradient(to right, aqua, red)");
          return;
    }
    var Time=new Date ();
    var hour=Time.getHours();
    var greet;
    if(hour>0 && hour<11){
        greet="Good Morning";
    }else if (hour>11 && hour<16){
        greet="Good AfterNoon"
    }else {
        greet="Good Night";
    }
    showOutput(greet+" "+username)
}

// get time 
function time(){
    var nowTime= new Date();
    let theHr=nowTime.getHours();
    let theMin=nowTime.getMinutes();
    let theSec=nowTime.getSeconds();
    output.innerHTML+= "<br>You Clicked This Button @" +" "+"<span class=text-primary bold>" + theHr + ":" + theMin + ":" + theSec+"</span>"+"<br>";
    
}
// time 1
function time1(){
    document.getElementById('output').innerHTML=" ";
    time()
    
}

// time 1
function time2(){
    time()
}

// time 1
function time3(){
    time()
}

// calculate tax
function calculate(price,taxRate){                
    var tax=price* taxRate/100;
    return tax;
}
 function calculateTax (){
    let price= +prompt("Please Enter The Price");
    if(!price){
        toastifyConditional("Please Enter The Price","linear-gradient(to right, pink, red)")
          return;
    }
    let taxRate=17;
    let tax=calculate(price,taxRate);
    let html = "Tax :"+"<span class=text-danger>"+ tax+"</span><br>NOTE: It is according to the pakistan's TaxRate";
    showOutput(html);
 }

//  CALCULATE TOTAL

// this function make for easiness
function calculateTotal(price){
    if (price<1000){
       var taxRate=17;
    } else {
        var taxRate=8;
        toastifyConditional("Congratulation! your tax is discreased","linear-gradient(to right, aqua, green)");
    }
    var tax=calculate(price,taxRate);
    var total= price+tax;
    return total;
}
 function calculateTotalBtn(){
    // toastifyConditional("Note:","linear-gradient(to right, aqua, green)");
    let price=+prompt('Enter The Price');
    if(!price){
        toastifyConditional("Please Enter The Price","linear-gradient(to right, pink, red)");
          return;
    }
    var totalPrice=calculateTotal(price);
    var html= "Total Price ="+"<span class=text-success>"+totalPrice+"</span>"+"<br><br><br><span class= fw-bold >NOTE:</span>Tax will be dicrease up to 8% from 17% when your price will be higher than 1000";
    showOutput(html);
 }