import React from 'react'
interface Params{
    idProduct: string
}
interface Props{
    params:Params
}
export default function ProductDetail(props:Props) {
    const {params}=props

  return (
    <div>trang chi tiết sản phẩm có id là: {params.idProduct}</div>
  )
}
