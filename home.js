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




document.querySelector('.form-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Get form data
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;

    // Construct the mailto link
    const mailtoLink = `mailto:seagabophelo@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${fname}%20${lname}%0AEmail:%20${email}%0AMessage:%20${subject}`;

    // Open the mailto link
    window.location.href = mailtoLink;
});
