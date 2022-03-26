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
                    parseFloat(document.getElementById('result').value) = '';
                }
                //by default its working.
                else
                {
                    document.getElementById('result').value = result;
                    
                }
    //operator work//   
    switch (option)   

    {
        //for addition
        case "+":
            document.getElementById('result').value = n1+n2;
            break;
        //for subtraction
        case "-":
            document.getElementById('result').value = n1-n2;
            break;
        //for multiplication
        case "X":
            document.getElementById('result').value = n1*n2;
            break;
        //for division
        case "/":            
            //for division val1/0 && 0/val2
            if ((n2 == 0) || (n1==0))
            {
                alert ("Sorry, you cannot divide by 0!");
                document.getElementById('result').value = "";
            }
            //else divide properly.
            else
            {
                document.getElementById('result').value = n1/n2;
            }
            break;
    }
    return true;
}


                

