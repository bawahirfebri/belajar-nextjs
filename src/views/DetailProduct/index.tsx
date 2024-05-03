import { ProductType } from "@/types/product.type";
import styles from "./DetailProduct.module.scss";

function DetailProductView({ product }: { product: ProductType }) {
  return (
    <div className={styles.productDetail}>
      <h1 className={styles.productDetail__title}>Detail Product</h1>
      <div className={styles.productDetail__content}>
        <div className={styles.productDetail__content__image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__content__name}>{product.name}</h4>
        <p className={styles.productDetail__content__category}>{product.category}</p>
        <p className={styles.productDetail__content__price}>{product.price && product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
      </div>
    </div>
  );
}

export default DetailProductView;
