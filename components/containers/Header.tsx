'use client'

import { motion, AnimatePresence } from 'framer-motion'

import { Menus } from '@/lib/helpers'

import LanguageSwitcher from '@/components/common/language-switcher'
import { MenuButton } from '@/components/menu/menu-mobile'

const Header = () => {
  return (
    <section id="home" className="w-full">
      <div className="flex justify-between">
        <div className="flex sm:items-center sm:justify-center">
          <img src="logo.svg" alt="" className="max-sm:w-60" />
        </div>
        <div className="flex gap-8 max-sm:hidden relative">
        <AnimatePresence>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            {Menus &&
              Menus.map((item, index) => (
                <a href={item.uri}>
                  <li
                    key={item.id}
                    className="text-white text-[17px] font-semibold hover:text-gray-300 cursor-pointer"
                  >
                    {item.name}
                  </li>
                </a>
              ))}
          </motion.ul>
        </AnimatePresence>

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
