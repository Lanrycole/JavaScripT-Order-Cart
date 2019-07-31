
function validateUser() {

    //Opens window for innerHTML
    document.getElementById("fnamee").innerHTML ="";
    document.getElementById("lnamee").innerHTML=" ";
    document.getElementById("addr").innerHTML=" ";
    document.getElementById("citie").innerHTML=" ";
    document.getElementById("provi").innerHTML=" ";
    document.getElementById("pCodes").innerHTML=" ";


    //Sets error Message to red
    document.getElementById("fnamee").style.color = "red";
    document.getElementById("lnamee").style.color="red";
    document.getElementById("addr").style.color="red";
    document.getElementById("citie").style.color="red";
    document.getElementById("provi").style.color="red";
    document.getElementById("pCodes").style.color="red";
   
   //connect the id
    var fname = document.forms["orderForm"]["firstName"].value;
    var lname = document.forms["orderForm"]["lastName"].value;
    var add = document.forms["orderForm"]["address"].value;
    var citi = document.forms["orderForm"]["city"].value;
    var pvince= document.forms["orderForm"]["province"].value;
    var pCode = document.forms["orderForm"]["postalCode"].value;
    var wid1 = document.forms["orderForm"]["widget1qty"].value;
    var wid2 = document.forms["orderForm"]["widget2qty"].value;
    var wid3 = document.forms["orderForm"]["widget3qty"].value;
    var total = 0;
   
    
        //makes sure first name is entered
    if (fname == "") {

       document.getElementById("fnamee").innerHTML="Please Enter First Name";
        return false;
    }
//makes sure last name is entered
    if (lname == "") {
        //alert("Fill in Last  name");
        document.getElementById("lnamee").innerHTML="Please Enter Last Name";
        return false;
    }
//makes sure address is entered
    if (add == "") {
        
       document.getElementById("addr").innerHTML="Please Enter an Address";
        return false;
    }
    //makes sure city is entered
    if (citi == "") {
       
        document.getElementById("citie").innerHTML="Please Enter a City";
        return false;
    }
    //makes sure province is entered
    if (pvince == "") {
        document.getElementById("provi").innerHTML="Please Enter a Province";
        //alert("Select a Province!");
        return false;
    }
    //makes postal code is entered
    if (pCode == "") {
        document.getElementById("pCodes").innerHTML="Please Postal Code";
      // alert("Fill in a postal code");
        return false;
    }

    //verifies widget number is positive and more than zero
    if (wid1 < 0) {

        alert("Quantity of the first widget must be 0 or greater");
       //multiples widget number by entered value
    } else {
        total += wid1 * 5

//verifies widget2 number is positive and more than zero
    }
    if (wid2 < 0) {
       
        alert("Quantity of the second widget must be 0 or greater");
         //multiples widget number by entered value
    } else {
        total += wid2 * 15
     //verifies widget3 number is positive and more than zero    
    }
    if (wid3 < 0) {
       
       alert("Quantity of the third widget must be 0 or greater");
        //multiples widget number by entered value
    } else {
        total += wid3 * 25

    }


   //gives condition if total is 0
    if (total == 0) {
        
        alert("At least one product must be ordered");

        return false;


    } 
   
    //selects shiping methods
    var selectedShipping = document.forms["orderForm"]["shippingType"].value;
  
    if(selectedShipping == "Standard"){
      costOfShipping = total +5;
    }
    
      if(selectedShipping == "Express"){
        costOfShipping  = total+ 10;
    }
    
      if(selectedShipping== "Overnight"){
        costOfShipping  = total+20;
    }
    if (true){
    alert("Form Submitted Successfully. Cost of Order is $ " + total + " .Total cost of shipping is $ " + costOfShipping);
    }
  }
   
