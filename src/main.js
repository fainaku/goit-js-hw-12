import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { hideLoadMoreButton } from './js/render-functions';
import { showLoadMoreButton } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const loadBtnEl = document.querySelector('.load-btn');

formEl.addEventListener('submit', onSubmit);
loadBtnEl.addEventListener('click', onClick);

let page = 1;
let perPage = 15;
let inputQuery = null;
let totalPages = 0;

async function onSubmit(event) {
  event.preventDefault();

  showLoader();
  hideLoadMoreButton();

  inputQuery = event.currentTarget.elements['search-text'].value.trim();

  if (!inputQuery) {
    iziToast.warning({
      title: '',
      message: 'Please enter a search query!',
    });
    hideLoader();
    return;
  }

  clearGallery();
  page = 1;

  try {
    const images = await getImagesByQuery(inputQuery, page, perPage);

    totalPages = Math.ceil(images.totalHits / perPage);

    if (images.hits.length === 0) {
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    if (page >= totalPages) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
    console.log(page, totalPages);
    createGallery(images.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
    });
    console.error(error);
  } finally {
    hideLoader();
    formEl.reset();
  }
}

async function onClick() {
  page += 1;

  try {
    const images = await getImagesByQuery(inputQuery, page, perPage);
    createGallery(images.hits);

    const firstCard = document.querySelector('.gallery').firstElementChild;

    if (firstCard) {
      const rect = firstCard.getBoundingClientRect();
      const cardHeight = rect.height;

      window.scrollBy({
        top: cardHeight * 2 + 24,
        behavior: 'smooth',
      });
    }

    if (page === totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        title: '',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
