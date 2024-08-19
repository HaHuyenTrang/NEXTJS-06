import React from 'react'
import { useRouter } from 'next/navigation'
export default function page() {
    // const router=useRouter();
    // const buttonc=()=>{
    //     router.push("/status/c++")
    // }
  return (
    <div className='flex'>
        <div className='border-2 w-[200px] text-center'>
            <img className='h-[200px]' src="https://www.siberoloji.com/wp-content/uploads/2024/06/cpp.png" alt="" />
            <p>Lập trình cơ bản C</p>
            <button  className='border-2'>Xem chi tiết</button>
        </div>
        <div className='border-2 w-[200px] text-center'>
            <img className='h-[200px]' src="https://tuyendung.kfcvietnam.com.vn/Data/Sites/1/media/blog/java-la-gi.jpg" alt="" />
            <p>Lập trình Java Core</p>
            <button className='border-2'>Xem chi tiết</button>
        </div>
        <div className='border-2 w-[200px] text-center'>
            <img className='h-[200px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png" alt="" />
            <p>Lập trình PHP</p>
            <button className='border-2'>Xem chi tiết</button>
        </div>
        <div className='border-2 w-[200px] text-center'>
            <img className='h-[200px]' src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="" />
            <p>Lập trình ReactJS</p>
            <button className='border-2'>Xem chi tiết</button>
        </div>
    </div>
  )
}
