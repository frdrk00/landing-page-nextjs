'use client'

import { motion } from 'framer-motion'

import { Menus } from '@/lib/helpers'

import LanguageSwitcher from '@/components/language-switcher'
import { MenuButton } from '@/components/menu-mobile'

const Header = () => {
  return (
    <section id="home" className="w-full">
      <div className="flex justify-between">
        <div className="flex sm:items-center sm:justify-center">
          <img src="logo.svg" alt="" className="max-sm:w-60" />
        </div>
        <div className="flex gap-8 max-sm:hidden">
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

        <div className="sm:hidden flex item-center justify-center">
          <MenuButton />
        </div>
      </div>
    </section>
  )
}

export default Header
