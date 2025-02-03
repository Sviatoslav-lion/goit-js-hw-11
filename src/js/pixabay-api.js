// pixabay-api.js
export const fetchImages = async (query) => {
    const API_KEY = '48615456-7478b61ba219341e00e1cbdfc'; // ключ API

    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    
    console.log(URL); // Вивести URL для перевірки
    
    try {
      const response = await fetch(URL);
  
      // Перевіряємо, чи успішний запит (статус 200)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Перевіряємо, чи є необхідні дані
      if (!data.hits || data.hits.length === 0) {
        throw new Error('No images found for the given search query.');
      }
  
      return data.hits; // Повертаємо масив зображень
    } catch (error) {
      // Логуємо деталі помилки в консолі
      console.error('Error fetching images:', error);
      throw new Error(error.message); // Перекидаємо помилку далі
    }

  };
