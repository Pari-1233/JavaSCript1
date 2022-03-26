function calc()
            {
                //values initialization
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
                //result variable
                var option = document.getElementById('operators').value;

                //checking if value 1 is entered 
                if(document.getElementById('n1').value.length==0) 
                {
                    alert ("please enter a number in first value :");
                    parseFloat(document.getElementById('result').value) = '';
                }
                //checking if value 2 is entered 
                 else if(document.getElementById('n2').value.length==0) 
                {
                    alert ("please enter a number in second value :");
                    console.log('20');
                    parseFloat(document.getElementById('result').value) = '';
                    
                }
                
    //operator work//   
    switch (option)   

    {
        //for addition
        case "add":
            add(n1,n2) //calling add function
           // document.getElementById('result').value = n1+n2;
            break;
        //for subtraction
        case "min":
            min(n1,n2) //calling min function
            break;
        //for multiplication
        case "mult":
            mult(n1,n2) //calling mult function
            break;
        //for division
        case "div":            
            
            div(n1,n2) //calling div function
            break;
        default:
            return false;
    }
    return true;
}
//function for addition
function add(n1,n2) {  
    document.getElementById('result').value = n1+n2; 

}  
//function for multiplication
function mult(n1,n2) {  
    document.getElementById('result').value = n1*n2;


}  
//function for subtraction
function min(n1,n2) {  

    document.getElementById('result').value = n1-n2;

}  
//function for division

function div(n1,n2) {  

   // try {
        //result=n1/n2;
        //document.getElementById('result').value = result;
    //}
    //catch (error) {
        //console.log(error.message,"pari");
        
    //}
    result=n1/n2;
    //creating alert for n1/0;
    if(result=="Infinity")
    {
        document.getElementById('result').value = "";
        alert("cant divide by 0!");
    }
    else
    {
        document.getElementById('result').value = result;
    }

}  
                

