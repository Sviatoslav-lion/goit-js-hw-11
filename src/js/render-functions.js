// render-functions.js

// Функція для очищення галереї перед новим пошуком
export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очищаємо галерею
};

// Функція для відображення карток зображень
export const renderImages = (images) => {
  const gallery = document.querySelector('.gallery'); //зв'язок з html div з класом gallery

  const markup = images.map(image => {
    return `
    <a href="${image.largeImageURL}">
    <div class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </div>
  </a>
    `;
  }).join('');

  gallery.innerHTML = markup;

  // Після того, як зображення додано, потрібно оновити SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a');
  //lightbox.refresh();  // Оновлюємо бібліотеку після того, як зображення додано до галереї

  // Додаємо функціонал для відкриття зображення в модальному вікні за допомогою BasicLightbox
  const galleryItems = document.querySelectorAll('.gallery-item img');
};

// Функція для показу повідомлення, якщо нічого не знайдено
export const showNoResultsMessage = () => {
  iziToast.error({
    title: 'Sorry',
    message: 'There are no images matching your search query. Please try again!',
  });
};

// Функція для показу індикатора завантаження
export const showLoadingIndicator = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block'; // Показуємо індикатор
};

// Функція для приховання індикатора завантаження
export const hideLoadingIndicator = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none'; // Приховуємо індикатор
};
