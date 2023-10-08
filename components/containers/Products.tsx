const Products = () => {
  return (
    <section id="products" className="sm:my-24 my-16">
      <div className="flex items-center justify-center mb-10">
        <h2 className="text-4xl font-semibold font-sans bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
          Produkty
        </h2>
      </div>
      <div className="sm:grid grid-cols-3 gap-4 max-sm:space-y-4">
        <div className="rounded-[40px] border-y-[1px] border-[#d17ffb] bg-gray-100 bg-opacity-5 shadow-md">
          <div className="flex flex-col sm:items-center space-y-6 sm:py-10 sm:px-4">
            <img
              src="/img/products/product-2.png"
              alt=""
              className="w-full py-[2px] px-[2px]"
            />
            <div className="flex sm:flex-col max-sm:justify-between sm:space-y-6 items-center max-sm:mx-4 max-sm:pb-8 ">
              <div>
                <h1 className="text-xl text-white">Online Obchod</h1>
              </div>
              <div>
                <button className="px-8 py-2 border rounded-full sm:w-full">
                  <p className="text-white">Zobraziť viac</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[40px] border-y-[1px] border-[#d17ffb] bg-gray-100 bg-opacity-5 shadow-md">
          <div className="flex flex-col sm:items-center space-y-6 sm:py-10 sm:px-4">
            <img
              src="/img/products/product-3.png"
              alt=""
              className="w-full max-sm:py-[2px] max-sm:px-[2px]"
            />
            <div className="flex sm:flex-col max-sm:justify-between sm:space-y-6 items-center max-sm:mx-4 max-sm:pb-8 ">
              <div>
                <h1 className="text-xl text-white">Managment systém</h1>
              </div>
              <div className="flex items-center justify-center">
                <button className="px-8 py-2 border rounded-full w-full">
                  <p className="text-white">Zobraziť viac</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[40px] border-y-[1px] border-[#d17ffb] bg-gray-100 bg-opacity-5 shadow-md">
          <div className="flex flex-col sm:items-center space-y-6 sm:py-10 sm:px-4">
            <img
              src="/img/products/product-4.png"
              alt=""
              className="w-full max-sm:py-[2px] max-sm:px-[2px]"
            />
            <div className="flex sm:flex-col max-sm:justify-between sm:space-y-6 items-center max-sm:mx-4 max-sm:pb-8 ">
              <div>
                <h1 className="text-xl text-white">CRM systém</h1>
              </div>
              <div className="flex items-center justify-center">
                <button className="px-8 py-2 border rounded-full w-full">
                  <p className="text-white">Zobraziť viac</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden rounded-[40px] border-y-[1px] border-[#d17ffb] bg-gray-100 bg-opacity-5 shadow-md">
          <div className="flex flex-col items-center space-y-6 py-10 px-4">
            <img
              src="/img/products/product-5.png"
              alt=""
              className="w-full max-sm:py-[2px] max-sm:px-[1px]"
            />
            <h1 className="text-xl text-white">Inzerčný portál</h1>
            <div className="flex items-center justify-center">
              <button className="px-8 py-2 border rounded-full w-full">
                <p className="text-white">Zobraziť viac</p>
              </button>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden rounded-[40px] border-y-[1px] border-[#d17ffb] bg-gray-100 bg-opacity-5 shadow-md">
          <div className="flex flex-col items-center space-y-6 py-10 px-4">
            <img src="/img/products/product-6.png" alt="" />
            <h1 className="text-xl text-white">Sociálna sieť</h1>
            <div className="flex items-center justify-center">
              <button className="px-8 py-2 border rounded-full w-full">
                <p className="text-white">Zobraziť viac</p>
              </button>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden rounded-[40px] border-y-[1px] border-[#d17ffb] bg-gray-100 bg-opacity-5 shadow-md">
          <div className="flex flex-col items-center space-y-6 py-10 px-4">
            <img src="/img/products/product-1.png" alt="" />
            <h1 className="text-xl text-white">Firemný dashboard</h1>
            <div className="flex items-center justify-center">
              <button className="px-8 py-2 border rounded-full w-full">
                <p className="text-white">Zobraziť viac</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
