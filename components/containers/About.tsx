const About = () => {
  return (
    <section id="about" className="my-16 flex flex-col w-full mt-20">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-semibold font-sans bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
          Naše služby
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center mt-14 space-y-14 px-4">
        <div className="flex flex-row space-x-10 w-full justify-start">
          <div className="flex flex-col justify-center">
            <div className="w-[330px] h-[330px] rounded-full bg-gradient-to-br from-[#211747] to-[#100F25] font-bold">
              <div className="h-full flex items-center justify-center">
                <img src="/audit.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-center space-y-12">
            <h1 className="absolute top-8 uppercase text-5xl text-white opacity-[2%] font-sans font-semibold">
              Analýzy a audit
            </h1>
            <h1 className="text-xl text-white">Analýzy a audit</h1>
            <p className="text-[18px] font-poppins text-gray-400 text-start">
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description,
              <br /> profile & banner images, and set a secondary sales fee.
              Upload your work then Click My Collections
              <br /> and set up your collection. Add social links, a
              description, profile & banner images, and set
              <br /> a secondary sales fee.
            </p>

            <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
              <button className="px-8 py-2 rounded-full h-auto w-full">
                <p className=" text-white">Zobraziť viac</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-10 w-full justify-between">
          <div className="relative flex flex-col items-start justify-center space-y-12">
            <h1 className="absolute top-8 uppercase text-5xl text-white opacity-[2%] font-sans font-semibold">
              Design
            </h1>
            <h1 className="text-xl text-white">Design</h1>
            <p className="text-[18px] font-poppins text-gray-400 text-start">
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description,
              <br /> profile & banner images, and set a secondary sales fee.
              Upload your work then Click My Collections
              <br /> and set up your collection. Add social links, a
              description, profile & banner images, and set
              <br /> a secondary sales fee.
            </p>
            <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
              <button className="px-8 py-2 rounded-full h-auto w-full">
                <p className=" text-white">Zobraziť viac</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="w-[330px] h-[330px] rounded-full bg-gradient-to-br from-[#211747] to-[#100F25] font-bold">
              <div className="h-full flex items-center justify-center">
                <img src="/design.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-10 w-full justify-start">
          <div className="flex flex-col justify-center">
            <div className="w-[330px] h-[330px] rounded-full bg-gradient-to-br from-[#211747] to-[#100F25] font-bold">
              <div className="h-full flex items-center justify-center">
                <img src="/developing.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-center space-y-12">
            <h1 className="absolute top-8 uppercase text-5xl text-white opacity-[2%] font-sans font-semibold">
              Programovanie
            </h1>
            <h1 className="text-xl text-white">Programovanie</h1>
            <p className="text-[18px] font-poppins text-gray-400 text-start">
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description,
              <br /> profile & banner images, and set a secondary sales fee.
              Upload your work then Click My Collections
              <br /> and set up your collection. Add social links, a
              description, profile & banner images, and set
              <br /> a secondary sales fee.
            </p>
            <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
              <button className="px-8 py-2 rounded-full h-auto w-full">
                <p className=" text-white">Zobraziť viac</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
