import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtnEl = document.querySelector('.load-btn ');

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
            <a href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"/>
            </a>
            <div class="gallery-wrap">
            <ul class="gallery-list">
                <li class="gallery-item-text"><p class="gallery-text"><b>Likes </b></p>
                <p class="info-text">${image.likes}</p></li>
                 <li class="gallery-item-text"><p class="gallery-text"><b>Views </b></p>
                <p class="info-text">${image.views}</p></li>
                 <li class="gallery-item-text"><p class="gallery-text"><b>Comments </b></p>
                <p class="info-text">${image.comments}</p></li>
                 <li class="gallery-item-text"><p class="gallery-text"><b>Downloads </b></p>
                <p class="info-text">${image.downloads}</p></li>
                </ul>
            </div>
        </li>
      `;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function clearGallery() {
  galleryEl.innerHTML = '';
}
export function showLoader() {
  loader.classList.add('is-visible');
}
export function hideLoader() {
  loader.classList.remove('is-visible');
}
export function showLoadMoreButton() {
  loadBtnEl.classList.add('show-btn');
}
export function hideLoadMoreButton() {
  loadBtnEl.classList.remove('show-btn');
}
