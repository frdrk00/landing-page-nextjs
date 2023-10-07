const Main = () => {
  return (
    <section
      id="main"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="flex flex-row mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="w-full h-full flex flex-col items-center lg:items-start justify-center">
            <h2 className="text-[87px] text-texlight font-semibold text-white leading-[92.5px] font-sans">
              Objavte neobmedzené{' '}
              <span className="block tracking-wider bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
                IT riesenia
              </span>
            </h2>

            <div className="text-[#C9D4F0] my-10">
              <p>Sme IT spoločnosť, ktorá využíva pokročilé technológie.</p>
              <p>
                Našim poslaním je poskytnúť svojim klientom neobmedzené
                <br /> možnosti v rámci IT segmentu.
              </p>
            </div>

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
          <div className="w-full ">
            <div>
              <img
                src="/rec.svg"
                className="opacity-[40%] p-2 absolute z-10 object-contain"
              />
            </div>
            <img
              src="/blobanimation.svg"
              className="absolute z-20"
            />
          </div>
        </div>
      </div>

        <div className="w-full flex flex-row space-x-10 px-4 my-10 text-white font-sans">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-semibold">97 +</h1>
            <p className="text-xs text-center">
              Spokojných
              <br /> klientov
            </p>
        </div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-semibold">5</h1>
            <p className="text-xs text-center">
              Vývojárksych
              <br /> tímov
            </p>
        </div>
      </div>
    </section>
  )
}

export default Main
