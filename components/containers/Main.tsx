'use client'

import Blob from '../blob-animation'
import { motion } from 'framer-motion'

const Main = () => {
  return (
    <section id="main" className="mt-14 overflow-hidden">
      <div className="flex flex-row sm:-mt-36 sm:-mb-24">
        <div className="relative sm:grid sm:grid-cols-1 max-sm:flex max-sm:justify-between lg:grid-cols-2 sm:gap-4  max-sm:mb-20">
          {/* Title */}
          <div className="flex flex-col sm:items-center lg:items-start sm:justify-center z-10 relative">
            <h2 className="sm:text-[87px] text-5xl font-semibold text-white sm:leading-[92.5px] font-sans relative">
              Objavte neobmedzené
              <span className="block tracking-wider bg-gradient-to-br from-[#6E95FF] via-[#A96CFE] to-[#7141b4] bg-clip-text text-transparent">
                IT riesenia
              </span>
            </h2>

            <div className="my-10 max-sm:my-10 text-blue-200 text-base font-normal">
              <p className="text-xl max-sm:text-sm leading-7">
                Sme IT spoločnosť, ktorá využíva pokročilé technológie.
              </p>
              <p className="text-xl max-sm:text-sm leading-7">
                Našim poslaním je poskytnúť svojim klientom neobmedzené
                <br /> možnosti v rámci IT segmentu.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-4 max-sm:mt-8">
              <div className="bg-gradient-to-r from-[#5E16F9] to-[#1E1741]  p-[1px] rounded-full">
                <motion.button
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  className="sm:px-12 px-6 sm:py-3 py-2 bg-gradient-to-br from-[#1E1741] to-[#5E16F9] rounded-full h-auto w-full"
                >
                  <a href="#contact">
                    <p className="text-white font-medium sm:text-lg text-base">
                      Mám záujem
                    </p>
                  </a>
                </motion.button>
              </div>
              <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
                <motion.button
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  className="sm:px-12 px-6 sm:py-3 py-2  bg-gradient-to-br from-[#5E16F9] to-[#1E1741] rounded-full h-auto w-full"
                >
                  <a href="#about">
                    <p className="text-white font-medium sm:text-lg text-base">
                      Naše služby
                    </p>
                  </a>
                </motion.button>
              </div>
            </div>

            {/* Blob Animation */}
          </div>
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: 'linear',
            }}
            className="overflow-hidden opacity-60"
          >
            <Blob />
          </motion.div>
        </div>
      </div>

      {/* Numbers */}
      <div className="w-full flex flex-row space-x-12 px-4 my-4 text-white sm:mb-10 mb-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-3xl text-white text-center font-sans font-semibold leading-normal">
            97 +
          </h1>
          <p className="text-center max-sm:text-sm text-base font-medium">
            Spokojných
            <br /> klientov
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-3xl text-white text-center font-sans font-semibold leading-normal">
            5
          </h1>
          <p className="text-center max-sm:text-sm text-base font-medium">
            Vývojárkych
            <br /> tímov
          </p>
        </div>
      </div>
    </section>
  )
}

export default Main
