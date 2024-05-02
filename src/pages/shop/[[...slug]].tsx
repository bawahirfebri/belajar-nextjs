import { useRouter } from 'next/router'
import React from 'react'

const ShopPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Shop Page - {query.slug ? query.slug[0] : null}</h1>
    </div>
  )
}

export default ShopPage