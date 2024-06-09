// Ensure this variable is updated to the total # of contents in /images
// whenever new images are added to the directory.
const totalImages = 9;

const imagesDirectory = 'images/';
const imagesPerPage = 12;
let currentPage = 1;

const images = [];
for (let i = 1; i <= totalImages; i++) {
    images.push(`${imagesDirectory}${i}.jpg`);
}
const page_index = document.getElementById('page-index');
page_index.textContent = 'Page 1';

images.reverse();

function displayImages(page) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    const start = (page - 1) * imagesPerPage;
    const end = page * imagesPerPage;
    const imagesToDisplay = images.slice(start, end);

    imagesToDisplay.forEach(src => {
        const anchor = document.createElement('a');
        anchor.href = src;
        anchor.target = '_blank';

        const img = document.createElement('img');
        img.src = src;
        anchor.appendChild(img);
        gallery.appendChild(anchor);
    });

    displayPagination();
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(images.length / imagesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => {
            currentPage = i;
            displayImages(i);
            page_index.textContent = `Page ${i}`;
        };
        pagination.appendChild(button);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayImages(currentPage);
});
