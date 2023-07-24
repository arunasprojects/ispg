import { ProductResponse, ProductsResponse } from "types/product";

export const getProducts = async (
  skip: number,
  limit: number
): Promise<ProductsResponse> => {
  try {
    const resp = await fetch(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error; // Throw the error again to maintain the return type
  }
};

export const getProduct = async (id: number): Promise<ProductResponse> => {
  try {
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error; // Throw the error again to maintain the return type
  }
};

export const triggerProductRegeneration = async (productId: number) => {
  try {
    // Call the function to fetch and update the product data from the backend
    const updatedData = await getProduct(productId);

    // Return the updated data if needed
    return updatedData;
  } catch (error) {
    throw error;
  }
};
