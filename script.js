
document.addEventListener("DOMContentLoaded", function () {
    // Apresentação: transição para stories
    const presentLogo = document.getElementById("presentLogo");
    const presentContainer = document.getElementById("present");
    const storysSection = document.getElementById("storysSection");

    if (presentLogo && presentContainer && storysSection) {
        presentLogo.addEventListener("click", function () {
            presentContainer.classList.add("hide");
            setTimeout(() => {
                presentContainer.style.display = "none";
                storysSection.style.display = "block";
                storysSection.style.opacity = "0";
                storysSection.style.transition = "opacity 0.7s";
                setTimeout(() => {
                    storysSection.style.opacity = "1";
                }, 50);
            }, 1200);
        });
    }

    // Stories logic
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