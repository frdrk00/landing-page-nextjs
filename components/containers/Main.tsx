const Main = () => {
  return (
    <section
      id="main"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="flex flex-row mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {/* Title */}
          <div className="w-full h-full flex flex-col items-center lg:items-start justify-center z-10">
            <h2 className="text-[87px] text-texlight font-semibold text-white leading-[92.5px] font-sans">
              Objavte neobmedzené{' '}
              <span className="block tracking-wider bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
                IT riesenia
              </span>
            </h2>

            <div className="my-10">
              <p className="text-gray-400 text-xl not-italic font-normal leading-7">
                Sme IT spoločnosť, ktorá využíva pokročilé technológie.
              </p>
              <p className="text-gray-400 text-xl not-italic font-normal leading-7">
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
          <div className="max-h-[636px] max-w-[630px] rounded-full border-t-1.5 border-r-1.5 border-b-1.5 bg-gradient-to-br from-opacity-21 via-opacity-21 to-opacity-0 shadow-md">
            <img src="/blobanimation.svg" className="w-full h-full" />
          </div>

        </div>
      </div>

      {/* Numbers */}
      <div className="w-full flex flex-row space-x-12 px-4 my-4 text-white">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white text-center font-sans font-semibold leading-normal">
            97 +
          </h1>
          <p className="text-center text-base font-medium">
            Spokojných
            <br /> klientov
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-5xl text-white text-center font-sans font-semibold leading-normal">
            5
          </h1>
          <p className="text-center text-base font-medium">
            Vývojárkych
            <br /> tímov
          </p>
        </div>
      </div>
    </section>
  )
}

export default Main
