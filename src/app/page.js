"use client"
import React from 'react'
import MenuComponent from './component/MenuComponent'
import HeroText from '@app/HeroText'
import MainVideo from './component/MainVideo'
import FeaturedWorks from './component/FeaturedWorks'
import Cards from './component/Cards'
import AfterCard from './component/AfterCard'
import HoverText from './component/HoverText'

export default function Page() {
  return (
    <div className="hero w-auto bg-black text-white h-dvh">
      <MenuComponent/>
      <HeroText/>
      <MainVideo/>
      <FeaturedWorks/>
      <Cards/>
      <AfterCard/>
      <HoverText/>
    </div>
  )
}