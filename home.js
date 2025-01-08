const roles = ["Software Developer", "UI/UX Designer", "Technician"];
let roleIndex = 0;
let charIndex = 0;

const typingEffectElement = document.getElementById("typing-effect");

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingEffectElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Typing speed
    } else {
        setTimeout(erase, 2000); // Pause before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        typingEffectElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Erasing speed
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
        setTimeout(type, 500); // Pause before typing next role
    }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
    type();
});



