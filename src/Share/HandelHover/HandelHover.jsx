import React from 'react'
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn'
import { Link } from 'react-router-dom'

const HandelHover = () => {
  return (
    <div className="absolute w-full h-full bg-black/20 group-hover:bg-black/10 duration-500 flex flex-col items-center justify-center gap-5 backdrop-blur-[2px] hover:backdrop-blur-none">
      <h1 className="text-5xl 2xl:text-6xl text-white">Up to 70% off</h1>
      <Link to={"/shop"} onClick={() => window.scrollTo(0, 0)}>
        <PrimaryBtn className="bg-transparent border border-white rounded-lg">
          Shop Now
        </PrimaryBtn>
      </Link>
    </div>
  )
}

export default HandelHover