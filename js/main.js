const textarea = document.getElementById("txinput");
const counter = document.getElementById("counter");
const postbutton = document.getElementById("postButton");
const maxLength = 280;

const counterState =() => {

    let textWrittn = textarea.value;
    if(textWrittn.length > maxLength){
        textWrittn = textWrittn(0, maxLength);
        textarea.value = textWrittn;
    }
    const reminder = maxLength - textWrittn.length;
    counter.textContent = `${reminder} characters remaining`;

    if (reminder < 0){
        counter.classList.add("exceeded");
        postbutton.disabled = true;
    } else{
        counter.addList.remove("exceede");
        postbutton.disabled = false;
    }
}
textarea.addEventListener("input", counterState);
counterState();