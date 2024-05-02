import React from 'react'
import { useRouter } from 'next/router'

const DetailProduct = () => {
  const { query } = useRouter()

  return (
    <div>Product: {query.id}</div>
  )
}

export default DetailProduct