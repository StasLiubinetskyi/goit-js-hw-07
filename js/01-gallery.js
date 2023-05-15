import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
let modalInstance = null;

function createGalleryItemMarkup({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}

function renderGalleryItems() {
  const galleryMarkup = galleryItems
    .map((item) => createGalleryItemMarkup(item))
    .join("");

  galleryContainer.innerHTML = galleryMarkup;
}

function openModal(event) {
  event.preventDefault(); // Заборона перенаправлення при кліку на зображення
  const imageSource = event.target.dataset.source;
  const modalContent = `<img src="${imageSource}" alt="" />`;
  modalInstance = basicLightbox.create(modalContent);
  modalInstance.show();
  document.addEventListener("keydown", closeModalOnEscape);
}

function closeModalOnEscape(event) {
  if (event.code === "Escape") {
    modalInstance.close();
    document.removeEventListener("keydown", closeModalOnEscape);
  }
}

galleryContainer.addEventListener("click", openModal);

renderGalleryItems();