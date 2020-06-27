function getNumber(num){
    var result=document.getElementById("result")
    result.value+=num
}

function Clear(){
    var result=document.getElementById("result")
    result.value=""
}

function showResult(){
    var result =document.getElementById("result")
    var showresult=eval(result.value)
    result.value=showresult
}

function backSpace(){
    var result =document.getElementById("result")
    result.value=result.value.substring(0,result.value.length-1)
    
}