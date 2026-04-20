// Get references to DOM elements
const textarea = document.getElementById("txinput");
const counter = document.getElementById("counter");
const postButton = document.getElementById("postButton");

// Maximum allowed characters
const maxLength = 280;

// Maximum allowed characters
const counterState = () => {
  // Read current text from textarea
  let textWritten = textarea.value;

  // If text exceeds the max length
  if (textWritten.length > maxLength) {
    // Trim the text to the allowed limit
    textWritten = textWritten.slice(0, maxLength);
    // Update textarea with trimmed text
    textarea.value = textWritten;
  }

  // Current text length
  const length = textWritten.length;
  // Remaining characters
  const remaining = maxLength - length;

  // Update counter display (e.g., 15/280)
  counter.textContent = `${length}/${maxLength}`;

  // If user is close to the limit (20 or fewer characters left)
  if (remaining <= 20 && remaining > 0) {
    // Add warning style
    counter.classList.add("warning");
  } else {
    // Remove warning style
    counter.classList.remove("warning");
  }
  // If the user reached the exact limit
  if (remaining === 0) {
    // Add limit style (usually red)
    counter.classList.add("limit");
  } else {
    // Remove limit style
    counter.classList.remove("limit");
  }

  // Disable button if:
  // - textarea is empty
  // - OR max length is reached (based on your requirement)
  postButton.disabled = length === 0 || length === maxLength;
};

textarea.addEventListener("input", counterState);

// Run once on page load to initialize state
counterState();
