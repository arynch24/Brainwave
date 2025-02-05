import React from 'react'
import { brainwave } from "../assets"
import { navigation } from "../constants/index"
import Button from "./Button";

const Header = () => {
  return (
    <div className='fixed top-0 z-50 backdrop-blur-sm border-b border-neutral-600 lg:bg-neutral-800/90  lg:backdrop-blur-sm'>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a className='block w-[12rem] xl:mr-8' href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
      </div>
      <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-neutral-800 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
        <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
          {
            navigation.map((item) => (
              <a key={item.id} href={item.url} className={`block relative font-code text-2xl uppercase text-neutral-100 transition-colors hover:text-purple-500 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold`} >
                {item.title}
              </a>
            ))
          }
        </div>
      </nav>
      <a href="#signup"
        className='button hidden mr-8 text-neutral-100/50 transition-colors hover:text-neutral-100 lg:block'
      >
        New Account
      </a>
      <Button className="hidden lg:flex" href="#login"> Sign In</Button>
    </div>
  )
}

export default Header
