// script.js
function hamburg() {
    document.querySelector('.dropdown').style.display = 'block';
}

function cancel() {
    document.querySelector('.dropdown').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.querySelector('.typewriter-text');
    const textArray = ["Web Developer", "Designer", "Trader",];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            currentText = textArray[textIndex].substring(0, charIndex--);
        } else {
            currentText = textArray[textIndex].substring(0, charIndex++);
        }

        typewriterText.textContent = currentText;

        if (!isDeleting && charIndex === textArray[textIndex].length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 100 : 200);
        }
    }

    type();
});

