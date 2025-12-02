document.addEventListener("DOMContentLoaded", function () {
    const totalStories = 7;
    let currentIndex = 0;
    const stories = document.getElementById("stories");
    const indicators = document.getElementById("indicators");

    // bolinhas dinamicas
    for (let i = 0; i < totalStories; i++) {
        const dot = document.createElement("div");
        dot.className = "dot" + (i === 0 ? " active" : "");
        indicators.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    function updateIndicators(index) {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Swipe
    let startX = 0;

    document.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    document.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;
        let diff = startX - endX;

        if (diff > 50 && currentIndex < totalStories - 1) {
            currentIndex++;
        } else if (diff < -50 && currentIndex > 0) {
            currentIndex--;
        }

        stories.style.transform = `translateX(${-currentIndex * 100}vw)`;
        updateIndicators(currentIndex);
    });
});