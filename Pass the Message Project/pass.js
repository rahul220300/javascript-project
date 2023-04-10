(function(){

const form = document.querySelector("#message-form");

form.addEventListener('submit',function(e){
        e.preventDefault();
const message = document.querySelector("#message");
const feedback = document.querySelector(".feedback");
const msgcontent = document.querySelector(".message-content");

    if(message.value ===''){
        feedback.classList.add('show')
        setTimeout(function(){
            feedback.classList.remove('show')
        },4000)
    }
    else{
        msgcontent.textContent = message.value
        message.value=''
    }

})


})();