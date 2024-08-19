import React from 'react'
interface Params{
    blog:string
}
interface Props{
    params: Params
}
export default function page(props:Props) {
    const {params}=props
  return (
    <div>"bạn đang xem blog với đường dẫn: {params.blog} "</div>
  )
}
