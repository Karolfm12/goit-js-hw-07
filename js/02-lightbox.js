// import SimpleLightbox from "../node_modules/simplelightbox/dist/simple-lightbox.min.js";
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulGallery = document.querySelector(".gallery");
const liGallery = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a></li>`
  )
  .join("");
ulGallery.innerHTML = liGallery;
// console.log(galleryItems);
const modalImages = document.querySelectorAll(".gallery__link");
for (const modalImage of modalImages) {
  modalImage.addEventListener("click", (e) => {
    e.preventDefault();
    const lightBox = new SimpleLightbox(modalImage);
    lightBox.show();
    console.log(lightBox);
  });
}
