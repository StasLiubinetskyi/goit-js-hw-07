import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery-container");
const galleryList = galleryContainer.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return (
        <li class="gallery__item">
          {" "}
          <a class="gallery__link" href="${original}">
            {" "}
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
              data-source="${original}"
            />{" "}
          </a>{" "}
        </li>
      );
    })
    .join("");
}

galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));