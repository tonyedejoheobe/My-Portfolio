// Get all elements with the class "letter"
const letters = document.querySelectorAll('.letter');

// Add an event listener to each letter
letters.forEach((letter) => {
  letter.addEventListener('animationstart', () => {
    // Add the ripple effect class when the animation starts
    letter.classList.add('ripple');
  });

  letter.addEventListener('animationend', () => {
    // Remove the ripple effect class when the animation ends
    letter.classList.remove('ripple');
  });
});

// Get the last letter
const lastLetter = letters[letters.length - 1];

// Add an event listener to the last letter
lastLetter.addEventListener('animationend', () => {
  // Restart the animation after 5 seconds
    setTimeout(() => {
    letters.forEach((letter) => {
    letter.style.animation = 'none';
    setTimeout(() => {
        letter.style.animation = '';
    }, 14);
    });
}, 5000);
});


document.addEventListener("DOMContentLoaded", function() {
  const textArray = ["web developer.", "Freelancer.", "Student."];
  const typedText = document.getElementById("typed-text");
  let currentText = "";
  let currentIndex = 0;
  let charIndex = 0;
  let deleteMode = false;

  function typeChar() {
    if (deleteMode) {
      if (currentText.length > 0) {
        currentText = currentText.substring(0, currentText.length - 1);
        typedText.textContent = currentText;
      } else {
        deleteMode = false;
        charIndex = 0;
        currentIndex = (currentIndex + 1) % textArray.length;
      }
    } else {
      if (charIndex < textArray[currentIndex].length) {
        currentText += textArray[currentIndex][charIndex];
        typedText.textContent = currentText;
        charIndex++;
      } else {
        deleteMode = true;
      }
    }

    setTimeout(typeChar, 210); // Adjust the speed here
  }

  typeChar();
});

document.addEventListener("DOMContentLoaded", function() {
  const textArray = (["web developer.", "Freelancer.", "Student."]);
  const typedText = document.getElementById("typed-text");
  let currentText = "";
  let currentIndex = 0;
  let charIndex = 0;
  let deleteMode = false;
  let deleteCount = 0;

  function typeChar() {
    if (deleteMode) {
      if (currentText.length > 0) {
        currentText = currentText.substring(0, currentText.length - 1);
        typedText.textContent = currentText;
      } else {
        deleteMode = false;
        charIndex = 0;
        currentIndex = (currentIndex + 1) % textArray.length;
      }
    } else {
      if (charIndex < textArray[currentIndex].length) {
        currentText += textArray[currentIndex][charIndex];
        typedText.textContent = currentText;
        charIndex++;
      } else {
        deleteMode = true;
      }
    }

    setTimeout(typeChar, 210); // Adjust the speed here
  }

  typeChar();
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollBtn");

  // Function to check if the user has scrolled enough to display the button
  function toggleScrollBtn() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0
    });
  }

  // Add scroll event listener to the window
  window.addEventListener("scroll", toggleScrollBtn);

  // Add click event listener to the scroll button
  scrollBtn.addEventListener("click", scrollToTop);

  // Initially hide the scroll button on page load
  toggleScrollBtn();
});

let links = document.querySelector(".main-content a");
const cursors = document.querySelector(".cur");
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursors.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursors.classList.add("expand");
  setTimeout(() => {
    cursors.classList.remove("expand");
  }, 500);
});
