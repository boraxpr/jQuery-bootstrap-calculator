$(function () {
    var operandA = null;
    var operandB = null;
    var operation = null;
    var temp_entry = 0;
    var continuous = 0;
    var cont_value = 0;
    var history = null;
    $(".input-screen").val("READY");
    $("button").on("click", function () {
        var input_value = this.value;

        //RESET Module
        if (input_value === "reset") {
            operandA = null;
            operandB = null;
            operation = null;
            temp_entry = 0;
            continuous = 0;
            history = null;
            cont_value = 0;
            $(".input-screen").val("READY");
            $(".history-screen").val("RESET");
        }

        //INPUT Module
        if (/\d/.test(input_value)) {
            let input_screen_val = $(".input-screen").val();
            if (input_screen_val === "READY") {
                $(".input-screen").val("");
            }
            $(".input-screen").val(function () {
                temp_entry = this.value + input_value;
                if (cont_value !== 0) {
                    operandB = temp_entry;
                }
                return temp_entry;
            });
        }

        //Decimal Module
        if (input_value === ".") {
            $(".input-screen").val(function () {

                if (/\./.test(this.value) && input_value === ".") {
                    temp_entry = this.value;
                }
                else {
                    temp_entry = this.value + input_value;
                }
                return temp_entry;
            });

        }

        //Operations Module
        if (input_value === "+" || input_value === "-" || input_value === "x" || input_value === "/" || input_value === "%") {
            operandA = temp_entry;
            operation = this.value;
            $(".input-screen").val("");
        }

        //Calculations Module
        if (input_value === "=") {
            if (operandB === null && continuous === 0) {
                operandB = temp_entry;
                continuous = 1;
            }
            else {
                operandA = cont_value;
            }

            history = operandA + " " + operation + " " + operandB;
            $(".history-screen").val(history);
            $(".input-screen").val(function () {
                switch (operation) {
                    case "+":
                        temp_entry = parseFloat(operandA) + parseFloat(operandB);
                        cont_value = temp_entry;
                        return temp_entry;
                        break;
                    case "-":
                        temp_entry = parseFloat(operandA) - parseFloat(operandB);
                        cont_value = temp_entry;
                        return temp_entry;
                        break;
                    case "x":
                        temp_entry = parseFloat(operandA) * parseFloat(operandB);
                        cont_value = temp_entry;
                        return temp_entry;
                        break;
                    case "/":
                        var raw = parseFloat(operandA) / parseFloat(operandB);
                        cont_value = raw;
                        raw = raw.toFixed(3);
                        temp_entry = raw;
                        return temp_entry;
                        break;
                    case "%":
                        temp_entry = parseFloat(operandA) % parseFloat(operandB);
                        cont_value = temp_entry;
                        return temp_entry;
                        break;
                }
            });

        }

        //Negative module
        if (input_value === "+-") {
            $(".input-screen").val(function () {
                temp_entry = -temp_entry;
                return temp_entry;
            });
        }
    });
});
