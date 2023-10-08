const Main = () => {
  return (
    <section id="main" className="my-14">
      <div className="flex flex-row">
        <div className="sm:grid sm:grid-cols-1 max-sm:flex max-sm:justify-between lg:grid-cols-2 sm:gap-4 relative max-sm:mb-20">

          {/* Title */}
          <div className="flex flex-col sm:items-center lg:items-start sm:justify-center max-sm:space-y-10 z-10">
            <h2 className="sm:text-[87px] max-sm:text-3xl font-semibold text-white leading-[92.5px] font-sans">
              Objavte neobmedzené
              <span className="block tracking-wider bg-gradient-to-r from-[#6E95FF] to-[#A96CFE] bg-clip-text text-transparent">
                IT riesenia
              </span>
            </h2>

            <div className="my-10 max-sm:my-4">
              <p className="text-gray-400 text-xl max-sm:text-sm leading-7">
                Sme IT spoločnosť, ktorá využíva pokročilé technológie.
              </p>
              <p className="text-gray-400 text-xl max-sm:text-sm leading-7">
                Našim poslaním je poskytnúť svojim klientom neobmedzené
                <br /> možnosti v rámci IT segmentu.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-4 w-full h-auto">
              <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
                <button className="px-8 py-3 rounded-full h-auto w-full">
                  <p className=" text-white">Mám záujem</p>
                </button>
              </div>
              <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
                <button className="px-8 py-3 bg-gradient-to-br from-[#5E16F9] to-[#1E1741] rounded-full h-auto w-full">
                  <p className="text-white">Naše služby</p>
                </button>
              </div>
            </div>
          </div>

          {/* Blob */}

          <div className="max-sm:absolute max-sm:right-[0%] max-sm:opacity-40 max-sm:h-full">
            <div className="sm:max-h-[636px] sm:max-w-[630px] max-sm:max-h-[336px] max-sm:max-w-[330px]  rounded-full border-t-1.5 border-r-1.5 border-b-1.5 bg-gradient-to-br from-opacity-21 via-opacity-21 to-opacity-0 drop-shadow-sm shadow-md">
              <img src="/blobanimation.svg" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Numbers */}
      <div className="w-full flex flex-row space-x-12 px-4 my-4 text-white mb-10">
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
