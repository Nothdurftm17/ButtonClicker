function ninjaLike(){
    alert("ninja was liked")
}

function logOff(element){
    if(element.innerText =="Login"){
        element.innerText = "Log off"
    }
    else{
        element.innerText = "Login"
    }
}

function hide(element) {
    element.remove();
}

