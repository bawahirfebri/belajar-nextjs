import React from 'react'
import { useRouter } from 'next/router'
import DetailProductView from '@/views/DetailProduct'
import useSWR from 'swr'
import { fetcher } from '@/lib/swr/fetcher'

const DetailProduct = () => {
  const { query } = useRouter()

  const { data, error, isLoading} = useSWR(
    `/api/product/${query.product}`,
    fetcher
  )

  return (
    <div>
      <DetailProductView product={isLoading ? {} : data.data} />
    </div>
  )
}

export default DetailProduct