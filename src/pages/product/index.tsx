import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const { push } = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  // const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  const { data, error, isLoading } = useSWR(
    "/api/product",
    fetcher
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("/api/product");
  //     const data = await response.json();

  //     setProducts(data.data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
