"use strict";

const calculator = () => {
    const calcType = document.getElementById("calc-type");
    const calcTypeMaterial = document.getElementById("calc-type-material");
    const calcSquare = document.getElementById("calc-input");
    const totalInput = document.getElementById("calc-total");
    const calctSelects = [calcType, calcTypeMaterial]

    const countCalc = () => {
        console.log("Вычислилось значение")
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcTypeMaterialValue = !isNaN(+calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value) ? +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value : 1;
        const calcSquareValue = +calcSquare.value;

        // oldValue = totalValue;
        const totalValue = calcTypeValue * calcTypeMaterialValue * calcSquareValue;
        totalInput.value = parseFloat(totalValue.toFixed(2));
    }


    calctSelects.forEach((item) => {
        item.addEventListener("change", () => {
            if (!isNaN(+calcType.options[calcType.selectedIndex].value) && calcSquare.value !== "") {
                console.log("Вычисление после инпута")
                countCalc();
            } else {
                totalInput.value = "";
            }
        })
    })

    calcSquare.addEventListener("input", () => {
        if (!isNaN(+calcType.options[calcType.selectedIndex].value)) {
            countCalc();
        } else {
            totalInput.value = "";
        };
    })
}

export default calculator;