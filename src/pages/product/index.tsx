import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type ProductType = {
  id: number,
  name: string,
  price: number,
  size: string,
}

const ProductPage = () => {
  const { push } = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/product')
      const data = await response.json()

      setProducts(data.data)
    }

    fetchData()
  }, [])

  return (<div>
    <h1>Product Page</h1>
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </div>);
};

export default ProductPage;
