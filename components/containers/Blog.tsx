const Blog = () => {
  return (
    <section id="blog" className="my-10">
      <div className="flex items-center justify-center mb-10">
        <h2 className="sm:text-[48px] text-[36px] font-semibold font-sans bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
          Blog
        </h2>
      </div>

      <div className="flex sm:flex-row flex-col w-full items-center justify-center mb-10 space-x-6">
        <div className="rounded-[40px] border-y-[1.5px] border-r-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40">
          <div className="space-y-4 mb-4">
            <img src="/img/blog/blog-2.png" alt="" />
            <div className="pl-[38px]">
              <div className="flex flex-start ">
                <h1 className="sm:text-[14px] font-sans font-semibold bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
                  7.10.2023
                </h1>
              </div>
              <div className="w-full">
                <p className="md:hidden text-sm text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  <br /> elit ipsum dolor sit amet, sit amet, consectetur.
                </p>
                <p className="max-sm:hidden sm:text-xl text-white">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden       rounded-[40px] border-y-[1.5px] border-r-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40">
          <div className="space-y-4 mb-4">
            <img src="/img/blog/blog-1.png" alt="" />
            <div className="pl-[38px]">
              <div className="flex flex-start">
                <h1 className="text-[18px] font-sans font-semibold bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
                  7.10.2023
                </h1>
              </div>
              <div className="w-full">
                <p className="text-xl text-white">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden       rounded-[40px] border-y-[1.5px] border-r-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40">
          <div className="space-y-4 mb-4">
            <img src="/img/blog/blog-3.png" alt="" />
            <div className="pl-[38px]">
              <div className="flex flex-start">
                <h1 className="text-[14px] font-sans font-semibold bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
                  7.10.2023
                </h1>
              </div>
              <div className="w-full">
                <p className="text-xl text-white">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
          <button className="px-8 py-2 bg-gradient-to-br from-[#5E16F9] to-[#1E1741] rounded-full h-auto w-full">
            <p className="text-white font-medium">Zobraziť viac</p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog
