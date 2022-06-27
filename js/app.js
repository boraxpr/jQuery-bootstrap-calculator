$(function () {
    var operandA = 0;
    var operandB = 0;
    var operation = null;
    var temp_entry = 0;
    var history = null;
    $("button").on("click", function () {
        var input_value = this.value;

        if (input_value === "reset") {
            $(".input-screen").val("");
        }

        if (/\d/.test(input_value)) {

            $(".input-screen").val(function () {
                temp_entry = this.value + input_value;
                return temp_entry;
            });
        }

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

        if (input_value === "+" || input_value === "-" || input_value === "x" || input_value === "/" || input_value === "%") {
            operandA = temp_entry;
            operation = this.value;
            $(".input-screen").val("");
        }

        if (input_value === "=") {
            if (operandA !== "0" && operation !== null) {
                operandB = temp_entry;
                history = operandB + " " + operation + " " + operandA;
                $(".history-screen").val(history);
                $(".input-screen").val(function () {
                    switch (operation) {
                        case "+":
                            temp_entry = parseFloat(operandA) + parseFloat(operandB);
                            return temp_entry;
                            break;
                        case "-":
                            temp_entry = parseFloat(operandB) - parseFloat(operandA);
                            return temp_entry;
                            break;
                        case "x":
                            temp_entry = parseFloat(operandA) * parseFloat(operandB);
                            return temp_entry;
                            break;
                        case "/":
                            var raw = parseFloat(operandA) / parseFloat(operandB);
                            raw = raw.toFixed(3);
                            temp_entry = raw;
                            return temp_entry;
                            break;
                        case "%":
                            temp_entry = parseFloat(operandA) % parseFloat(operandB);
                            return temp_entry;
                            break;
                    }
                });
            }
        }

        if (input_value === "+-") {
            $(".input-screen").val(function () {
                temp_entry = -temp_entry;
                return temp_entry;
            });
        }
    });
});
