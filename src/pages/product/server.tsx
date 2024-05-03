import { ProductType } from '@/types/product.type'
import ProductView from '@/views/Product'

function ProductPage(props: {products: ProductType[]}) {

  const { products } = props
  return (
    <div>
      <ProductView products={products} />
    </div>
  )
}

export async function getServerSideProps() {
  const res =  await fetch('http://localhost:3000/api/product')
  const response = await res.json()

  return {
    props: {
      products: response.data
    }
  }
}

export default ProductPage