'use client'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="flex flex-col my-16">
      <div className="flex items-center justify-center sm:my-10">
        <h2 className="sm:text-[48px] text-[36px] font-semibold font-sans bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent mb-6">
          Nase sluzby
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center sm:space-y-20 space-y-8">
        <div className="flex flex-row w-full justify-start sm:space-x-12">
          <div className="max-sm:hidden flex flex-col justify-center">
            <div className=" w-[330px] h-[330px] rounded-full bg-gradient-to-br from-[#211747] to-[#100F25] font-bold">
              <div className="h-full flex items-center justify-center">
                <img src="/audit.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-center sm:space-y-8 space-y-4">
            <h1 className="absolute sm:block md:hidden lg:block sm:top-14 top-4 uppercase sm:text-[78px] text-4xl text-white opacity-[2%] font-sans font-semibold">
              Analýzy a audit
            </h1>
            <h1 className="sm:text-[36px] text-[28px] text-white font-medium">
              Analýzy a audit
            </h1>
            <p className="sm:text-[18px] text-xs font-poppins sm:text-base font-normal leading-normal text-blue-200 text-start">
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description, profile & banner
              images, and set a secondary sales fee. Upload your work then Click
              My Collections and set up your collection. Add social links, a
              description, profile & banner images, and set a secondary sales
              fee.
            </p>

            <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-2 bg-gradient-to-br from-[#5E16F9] to-[#1E1741] rounded-full h-auto w-full"
              >
                <p className="text-white font-medium sm:text-[20px] text-[14px]">
                  Zobraziť viac
                </p>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse w-full justify-start">
          <div className="flex flex-col justify-center">
            <div className="max-sm:hidden w-[330px] h-[330px] rounded-full bg-gradient-to-br from-[#211747] to-[#100F25] font-bold">
              <div className="h-full flex items-center justify-center">
                <img src="/design.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-center sm:space-y-8 space-y-4">
            <h1 className="absolute sm:block md:hidden lg:block sm:top-14 top-4 uppercase sm:text-[78px] text-4xl text-white opacity-[2%] font-sans font-semibold">
              Design
            </h1>
            <h1 className="sm:text-[36px] text-[28px] text-white font-medium">
              Design
            </h1>
            <p className="sm:text-[18px] text-xs font-poppins sm:text-base font-normal leading-normal text-blue-200 text-start">
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description, profile & banner
              images, and set a secondary sales fee. Upload your work then Click
              My Collections and set up your collection. Add social links, a
              description, profile & banner images, and set a secondary sales
              fee.
            </p>
            <div className="bg-gradient-to-r to-[#1E1741] from-[#5E16F9] p-[1px] rounded-full">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-2 bg-gradient-to-br from-[#5E16F9] to-[#1E1741] rounded-full h-auto w-full"
              >
                <p className="text-white font-medium sm:text-[20px] text-[14px]">
                  Zobraziť viac
                </p>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full justify-start sm:space-x-12">
          <div className="max-sm:hidden flex flex-col justify-center">
            <div className="w-[330px] h-[330px] rounded-full bg-gradient-to-br from-[#211747] to-[#100F25] font-bold">
              <div className="h-full flex items-center justify-center">
                <img src="/developing.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-center sm:space-y-8 space-y-4">
            <h1 className="absolute sm:block md:hidden lg:block sm:top-14 top-4 uppercase sm:text-[78px] text-4xl text-white opacity-[2%] font-sans font-semibold">
              Programovanie
            </h1>
            <h1 className="sm:text-[36px] text-[28px] text-white font-medium">
              Programovanie
            </h1>
            <p className="sm:text-[18px] text-xs font-poppins sm:text-base font-normal leading-normal text-blue-200 text-start">
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description, profile & banner
              images, and set a secondary sales fee. Upload your work then Click
              My Collections and set up your collection. Add social links, a
              description, profile & banner images, and set a secondary sales
              fee.
            </p>
            <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-2 bg-gradient-to-br from-[#5E16F9] to-[#1E1741] rounded-full h-auto w-full"
              >
                <p className="text-white font-medium sm:text-[20px] text-[14px]">
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

export default About
