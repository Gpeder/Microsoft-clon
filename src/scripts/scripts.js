const btnSearch = document.querySelector('#search');
const searchBox = document.querySelector('.search-box');
const btnCancel = document.querySelector('#btnCancel');

btnSearch.addEventListener('click', () => {
    if (searchBox.style.display === 'none' || searchBox.style.display === '') {
        searchBox.style.display = 'block';
    } else {
        searchBox.style.display = 'none';
    }

    btnCancel.addEventListener('click', () => { 
        searchBox.style.display = 'none';
    });
});

const btnModal = document.querySelector('#drop-modal');
const modal = document.querySelector('.modal-mic');

btnModal.addEventListener('click', () => {
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'grid';
    } else {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".main-carrocel-container > div:not(.main-carrocel-controller)");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const activeButton = document.getElementById("active");
    const passiveButton = document.getElementById("passive");

    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        if (currentIndex === 0) {
            activeButton.innerHTML = '<i class="fa-solid fa-circle"></i>';
            passiveButton.innerHTML = '<i class="fa-regular fa-circle"></i>';
        } else {
            activeButton.innerHTML = '<i class="fa-regular fa-circle"></i>';
            passiveButton.innerHTML = '<i class="fa-solid fa-circle"></i>';
        }
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    updateCarousel();
});


