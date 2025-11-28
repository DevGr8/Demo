// Elements
const greetingEl = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const boxes = document.querySelectorAll(".box");

// Track the current name
let currentName = "";

// Greet button logic
greetBtn.addEventListener("click", () => {
  const val = nameInput.value.trim();
  currentName = val;
  
  if (currentName) {
      greetingEl.textContent = `Hello, ${currentName}`;
  } else {
      greetingEl.textContent = "Hello";
  }

  // Visual feedback
  greetingEl.style.opacity = "0.6";
  setTimeout(() => (greetingEl.style.opacity = "1"), 160);
});

// Box Click Logic
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const color = box.getAttribute("data-color");
    const textColor = box.getAttribute("data-text-color");

    // Check if the box is currently "active" (colored)
    // We use a class 'active' to track the state
    if (box.classList.contains("active")) {
        // --- TURN OFF (Revert to Normal) ---
        box.style.background = "";      // clear inline color
        box.style.color = "";           // clear inline text color
        box.style.borderColor = "";     // clear inline border
        box.classList.remove("active"); // remove the tracker flag
    } else {
        // --- TURN ON (Apply Color) ---
        if (color) {
            box.style.background = color;
            box.style.borderColor = color;
        }
        if (textColor) {
            box.style.color = textColor;
        }
        box.classList.add("active");    // add the tracker flag
    }

    // Animation effect (happens on every click)
    box.style.transform = "translateY(-3px) scale(0.98)";
    setTimeout(() => (box.style.transform = ""), 140);
  });
});