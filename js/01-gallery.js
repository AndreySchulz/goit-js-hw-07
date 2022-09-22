import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');


const makeGalleryStr = makeGallery(galleryItems).join('')

function makeGallery(item){
    return item.map(({preview, original, description}) =>{
           return`<div class="gallery__item">
           <a class="gallery__link" href="${original}">
             <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
             />
           </a>
         </div>` 
    })
}

galleryRef.innerHTML = makeGalleryStr
galleryRef.addEventListener("click", (event)=>{
    if(event.target.nodeName !== "IMG"){
        return
    }
    event.preventDefault()
    basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show()
})