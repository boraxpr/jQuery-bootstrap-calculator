$(document).ready(function() {
    var operandA = 0;
    var operandB = 0;
    var operation = null;
    var temp_entry = 0;

    $("button").click(function()
    {
        var input_value = this.value;

        if(input_value==="reset"){
            $(".input-screen").val("");
        }

        if($.isNumeric(input_value)){

            $(".input-screen").val(function(){
                temp_entry = this.value+input_value;
                return temp_entry;
            });
        }

        if(input_value==="."){
            $(".input-screen").val(function(){
                if(this.value.slice(-1)==="." && input_value==="."){
                    temp_entry = this.value;
                }
                else{
                    temp_entry = this.value+input_value;
                }
                return temp_entry;
            });

        }

        if(input_value==="+" || input_value==="-" || input_value==="x"|| input_value==="/" || input_value==="%"){
                operandA = temp_entry;
                operation = this.value;
                $(".input-screen").val("");
        }

        if(input_value==="="){
            if(operandA!=="0" && operation!==null){
                operandB = temp_entry;

                $(".input-screen").val(function(){
                    switch(operation){
                        case "+":
                            return parseFloat(operandA)+parseFloat(operandB);
                            break; 
                        case "-":
                            return parseFloat(operandA)-parseFloat(operandB);
                            break;
                        case "x":
                            return parseFloat(operandA)*parseFloat(operandB);
                            break;
                        case "/":
                            var raw = parseFloat(operandA)/parseFloat(operandB);     
                            return raw.toFixed(3);
                            break;
                        case "%":
                            return parseFloat(operandA) % parseFloat(operandB);
                            break;
                    }
                });
            }
        }
    });
});
