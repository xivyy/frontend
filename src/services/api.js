const API_URL = 'http://localhost:5000';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Błąd podczas pobierania produktów');
    }
    const data = await response.json();
    return data;
  } catch (error) {
      console.error(error);
    return [];
  }
};