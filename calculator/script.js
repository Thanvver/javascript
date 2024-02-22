function displayScreen(val){

    let operatorArray=["+","-","*","/","."]
    let lastChar=root.value.slice("-1")
    if(operatorArray.includes(lastChar)&& operaterArray.invludes(num)){

        return
    }
    else{

        root.value+=num

    }

}

function clearBox(){

    root.value=""
}

function evaluateExpression(){

    let curExpression=root.value;
    let result=eval(curExpression)
    root.value=result

}

function backSpace(){

    let currentValue=root.value
    let newValue=currentValue.slice(0,-1)
    root.value=newValue

}