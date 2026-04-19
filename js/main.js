const textarea = document.getElementById("txinput");
const counter = document.getElementById("counter");
const postButton = document.getElementById("postButton");
const maxLength = 280;

const counterState = () => {
  let textWritten = textarea.value;

  if (textWritten.length > maxLength) {
    textWritten = textWritten.slice(0, maxLength);
    textarea.value = textWritten;
  }

  const remaining = maxLength - textWritten.length;

  counter.textContent = `${remaining} characters remaining`;

  if (remaining <= 20) {
    counter.classList.add("warning");
  } else {
    counter.classList.remove("warning");
  }

  postButton.disabled = textWritten.length === 0;
};

textarea.addEventListener("input", counterState);
counterState();
