// pixabay-api.js
export const fetchImages = async (query) => {
    const API_KEY = '48615456-7478b61ba219341e00e1cbdfc'; // ключ API
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data.hits; // Повертаємо масив зображень
    } catch (error) {
      console.error('Error fetching images:', error);
      throw new Error('Error fetching images');
    }
  };
