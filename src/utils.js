export const fetchData = async (path) => {
  console.log(`${import.meta.env.VITE_SHOP_API_URL}/${path}`);
  const response = await fetch(`${import.meta.env.VITE_SHOP_API_URL}/${path}`);
  const data = await response.json();
  
  return data;
}
