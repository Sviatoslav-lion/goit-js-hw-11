// main.js
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery, showNoResultsMessage, showLoadingIndicator, hideLoadingIndicator } from './js/render-functions.js';


const form = document.querySelector('#search-form');
const input = document.querySelector('.search-input');
const loader = document.querySelector('.loader'); // Отримуємо індикатор завантаження
const gallery = document.querySelector('.gallery'); // Галерея

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (query === '') return;

  loader.style.display = 'block'; // Показуємо індикатор

  // Очищаємо галерею перед новим пошуком
  gallery.innerHTML = '';

  try {
    const images = await fetchImages(query);

    hideLoadingIndicator(); // Приховуємо індикатор завантаження

    if (images.length > 0) {
      renderImages(images); // Відображаємо зображення
    } else {
      showNoResultsMessage(); // Якщо немає результатів
    }
  } catch (error) {
    hideLoadingIndicator(); // Приховуємо індикатор у разі помилки
    alert('An error occurred while fetching the images.');
  }
});