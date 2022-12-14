import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const makeGalleryStr = makeGallery(galleryItems).join('');

function makeGallery(item) {
  return item.map(({ preview, original, description }) => {
    return `
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}"" alt="${description}" />
        </a>`;
  });
}

galleryRef.innerHTML = makeGalleryStr;
var lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: "alt",
  captionDelay: 250,
});