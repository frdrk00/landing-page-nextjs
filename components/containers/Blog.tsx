const Blog = () => {
  return (
    <section id="blog" className="my-10 ">
      <div className="flex items-center justify-center mb-10">
        <h2 className="text-4xl font-semibold font-sans bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
          Blog
        </h2>
      </div>

      <div className="flex flex-row w-full items-center justify-center mb-10 space-x-6">
        <div className="rounded-[40px] border-y-[1px] border-[#d17ffb] bg-gray-100 bg-opacity-5 drop-shadow-2xl shadow-md">
          <div className="space-y-4 mb-4">
            <img src="/img/blog/blog-2.png" alt="" />
            <div className="flex flex-start pl-4">
              <h1 className="text-[24px] font-sans font-semibold bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
                7.10.2023
              </h1>
            </div>
            <div className="w-full pl-4">
              <p className="text-xl text-white">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[40px] border-y-[1px] border-[#d17ffb] bg-gray-100 bg-opacity-5 drop-shadow-2xl shadow-md">
          <div className="space-y-4 mb-4">
            <img src="/img/blog/blog-1.png" alt="" />
            <div className="flex flex-start pl-4">
              <h1 className="text-[28px] font-sans font-semibold bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
                7.10.2023
              </h1>
            </div>
            <div className="w-full pl-4">
              <p className="text-xl text-white">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[40px] border-y-[1px] border-[#d17ffb] bg-gray-100 bg-opacity-5 drop-shadow-2xl shadow-md">
          <div className="space-y-4 mb-4">
            <img src="/img/blog/blog-3.png" alt="" />
            <div className="flex flex-start pl-4">
              <h1 className="text-[24px] font-sans font-semibold bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
                7.10.2023
              </h1>
            </div>
            <div className="w-full pl-4">
              <p className="text-xl text-white">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
          <button className="px-8 py-2 rounded-full h-auto w-full">
            <p className="text-white">Zobraziť viac</p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog
