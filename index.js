window.addEventListener("scroll",function(){
    var element = this.document.querySelector("mail_boby")
    if(element.scorollHeight > element.clientHeight){
        element.classList.add("scrollbar-visible");
    }
    else{
        element.classList.remove("scrollbar-visible")
    }
})