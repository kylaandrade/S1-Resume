document.addEventListener("DOMContentLoaded", function () {
    const colors = ['#ADD8E6', '#FFFACD', '#FAEBD7', '#E0FFFF', '#F5F5DC'];
    const button = document.getElementById('colorChangeBtn');
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');

    if (!button || !leftSide || !rightSide) {
        console.error("One or more elements not found.");
        return;
    }

    button.addEventListener('click', function () {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        leftSide.style.backgroundColor = randomColor;
        rightSide.style.backgroundColor = randomColor;
        document.body.style.backgroundColor = randomColor; // Ensures full-page color change
    });
});
