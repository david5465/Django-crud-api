import axios from 'axios'

const productApi = axios.create({
    baseURL: 'http://localhost:8000/products/api/v1/products/'
})

export const searchProducts = async (searchTerm) => {
    try {
      const response = await productApi.get(`?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle errors appropriately (e.g., throw an error or display a message to the user)
    }
  };

export const getAllProducts = (search = '') => {
    const searchQuery = search ? `?search=${search}` : '';
    return productApi.get(`/${searchQuery}`);
};

export const getProduct = (id) => productApi.get(`/${id}/`);

export const createProduct = (product) => productApi.post('/', product);

export const deleteProduct = (id) => productApi.delete(`/${id}/`);

export const updateProduct = (id, product) => productApi.put(`/${id}/`,product);