type DataType = {
  id: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
};

type DataTwoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const data = async () => {
  const result = fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((json: DataTwoType[]) => json);
  return result;
};
export const limitedData = async (amount: number) => {
  const products = fetch(`https://fakestoreapi.com/products?limit=${amount}`)
    .then((res) => res.json())
    .then((json: DataType[]) => json);
  return products;
};
