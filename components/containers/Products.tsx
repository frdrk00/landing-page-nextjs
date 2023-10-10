'use client'

import { motion } from 'framer-motion'

const Products = () => {
  return (
    <section id="products" className="sm:my-24 my-16">
      <div className="flex items-center justify-center mb-10">
        <h2 className="sm:text-[48px] text-[36px] font-semibold font-sans bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
          Produkty
        </h2>
      </div>
      <div className="sm:grid grid-cols-3 gap-4 max-sm:space-y-4">
        <div className="sm:rounded-[40px] rounded-[30px] border-y-[1.5px] border-r-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40">
          <div className="flex flex-col sm:items-center space-y-6 sm:pt-[22px] sm:px-[21px] sm:pb-[50px]">
            <img
              src="/img/products/product-2.png"
              alt=""
              className="w-full rounded-[30px] max-sm:py-[2px] ma-sm:px-[2px]"
            />
            <div className="flex sm:flex-col max-sm:justify-between sm:space-y-6 items-center max-sm:mx-4 max-sm:pb-8 ">
              <div>
                <h1 className="text-white text-center sm:text-[28px] text-[20px] font-semibold">
                  Online obchod
                </h1>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-8 py-2 border border-gray-600 border-y-2 rounded-full sm:w-full"
                >
                  <p className="text-white text-center sm:text-[20px] text-[14px] font-medium">
                    Zobraziť viac
                  </p>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:rounded-[40px] rounded-[30px] border-y-[1.5px] border-r-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40">
          <div className="flex flex-col sm:items-center space-y-6 sm:pt-[22px] sm:px-[21px] sm:pb-[50px]">
            <img
              src="/img/products/product-3.png"
              alt=""
              className="w-full rounded-[30px] max-sm:py-[2px] ma-sm:px-[2px]"
            />
            <div className="flex sm:flex-col max-sm:justify-between sm:space-y-6 items-center max-sm:mx-4 max-sm:pb-8 ">
              <div>
                <h1 className="text-white text-center sm:text-[28px] text-[20px] font-semibold">
                  Managment systém
                </h1>
              </div>
              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-8 py-2 border border-gray-600 border-y-2 rounded-full sm:w-full"
                >
                  <p className="text-white text-center sm:text-[20px] text-[14px] font-medium">
                    Zobraziť viac
                  </p>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden sm:rounded-[40px] rounded-[30px] border-y-[1.5px] border-r-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40">
          <div className="flex flex-col sm:items-center space-y-6 sm:pt-[22px] sm:px-[21px] sm:pb-[50px]">
            <img
              src="/img/products/product-4.png"
              alt=""
              className="w-full rounded-[30px] max-sm:py-[2px] ma-sm:px-[2px]"
            />
            <div className="flex sm:flex-col max-sm:justify-between sm:space-y-6 items-center max-sm:mx-4 max-sm:pb-8 ">
              <div>
                <h1 className="text-white text-center sm:text-[28px] text-[20px] font-semibold">
                  CRM systém
                </h1>
              </div>
              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-8 py-2 border border-gray-600 border-y-2 rounded-full sm:w-full"
                >
                  <p className="text-white text-center sm:text-[20px] text-[14px] font-medium">
                    Zobraziť viac
                  </p>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden rounded-[40px] border-y-[1.5px] border-r-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40">
          <div className="flex flex-col sm:items-center space-y-6 sm:pt-[22px] sm:px-[21px] sm:pb-[50px]">
            <img
              src="/img/products/product-5.png"
              alt=""
              className="w-full rounded-[30px] max-sm:py-[2px] ma-sm:px-[2px]"
            />
            <h1 className="text-white text-center sm:text-[28px] text-[20px] font-semibold">
              Inzerčný portál
            </h1>
            <div className="flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-2 border border-gray-600 border-y-2 rounded-full sm:w-full"
              >
                <p className="text-white text-center text-[20px] font-medium">
                  Zobraziť viac
                </p>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden rounded-[40px] border-y-[1.5px] border-r-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40">
          <div className="flex flex-col sm:items-center space-y-6 sm:pt-[22px] sm:px-[21px] sm:pb-[50px]">
            <img
              src="/img/products/product-6.png"
              alt=""
              className="w-full rounded-[30px] max-sm:py-[2px] ma-sm:px-[2px]"
            />
            <h1 className="text-white text-center sm:text-[28px] text-[20px] font-semibold">
              Sociálna sieť
            </h1>
            <div className="flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-2 border border-gray-600 border-y-2 rounded-full sm:w-full"
              >
                <p className="text-white text-center text-[20px] font-medium">
                  Zobraziť viac
                </p>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden rounded-[40px] border-y-[1.5px] border-r-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40">
          <div className="flex flex-col sm:items-center space-y-6 sm:pt-[22px] sm:px-[21px] sm:pb-[50px]">
            <img
              src="/img/products/product-1.png"
              alt=""
              className="w-full rounded-[30px] max-sm:py-[2px] ma-sm:px-[2px]"
            />
            <h1 className="text-white text-center sm:text-[28px] text-[20px] font-semibold">
              Firemný dashboard
            </h1>
            <div className="flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-2 border border-gray-600 border-y-2 rounded-full sm:w-full"
              >
                <p className="text-white text-center text-[20px] font-medium">
                  Zobraziť viac
                </p>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
