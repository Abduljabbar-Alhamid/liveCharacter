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

  const length = textWritten.length;
  const remaining = maxLength - length;

  counter.textContent = `${length}/${maxLength}`;

  if (remaining <= 20 && remaining > 0) {
    counter.classList.add("warning");
  } else {
    counter.classList.remove("warning");
  }

  if (remaining === 0) {
    counter.classList.add("limit");
  } else {
    counter.classList.remove("limit");
  }

  postButton.disabled = length === 0 || length === maxLength;
};

textarea.addEventListener("input", counterState);
counterState();
