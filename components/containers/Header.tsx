'use client'

import { motion } from 'framer-motion'

import { Menus } from '@/lib/helpers'

import LanguageSwitcher from '@/components/language-switcher'



const Header = () => {
  return (
    <section id="home" className='w-full'>
      <div className="flex justify-between py-8">
        <div className="flex items-center justify-center">
          <img src="logo.svg" alt="" />
        </div>
        <div className='flex gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            {Menus &&
              Menus.map((item, index) => (
                <li
                  key={item.id}
                  className="text-white text-base text-textColor hover:text-gray-300 duration-100 transition-all ease-in-out cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
          </motion.ul>

          <LanguageSwitcher />
        </div>
      </div>
    </section>
  )
}

export default Header
