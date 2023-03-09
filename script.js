const calculator = {
    display:                document.querySelector(".display"),
    numbers:                document.querySelectorAll(".numbers > input"),
    actions:                document.querySelectorAll(".actions > .modify"),
    operations:             document.querySelectorAll(".actions > .operation"),
    a:                      false,
    b:                      false,
    chosenOperation:        false,
    add()                   {return this.a + this.b},
    subtract()              {return this.a - this.b},
    divide()                {return this.b === 0 ? 'mathError' : this.a / this.b },
    multiply()              {return this.a * this.b},
    pickNum(num)            {this.chosenOperation === false ? this.a = num : this.b = num},
    pickOperator(operator)  {this.chosenOperation = operator; if (this.a === false) this.a = 0},
    getResult()             {   if (this.chosenOperation === false)         return
                                if (this.chosenOperation === 'add')         return this.add()
                                if (this.chosenOperation === 'subtract')    return this.subtract()
                                if (this.chosenOperation === 'multiply')    return this.multiply()
                                if (this.chosenOperation === 'divide')      return this.divide()
                            },
    clearLast()             {   if (this.b !== false){
                                    let numToString = this.b.toString();
                                    if (numToString.length > 1) this.b = Number(numToString.slice(0, numToString.length - 1))
                                }
                                else if (this.chosenOperation !== false) this.chosenOperation = false
                                else {
                                    let numToString = this.a.toString();
                                    if (numToString.length > 1) this.a = Number(numToString.slice(0, numToString.length - 1))
                                }            
                            }
};