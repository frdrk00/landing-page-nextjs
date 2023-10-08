import { Dribbble, Facebook, Github, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <section id="footer" className="flex items-center justify-center sm:my-20 my-10">
      <div className="items-center justify-center space-y-10">
        <div className="sm:grid grid-cols-2 gap-20">
          <div className="flex flex-row">
            <div className="sm:space-y-10 space-y-4">
              <img src="logo.svg" alt="" />
              <p className="text-[16px] font-poppins text-gray-400 text-start">
                Upload your work then Click My Collections and set up your
                collection. Add social links, a description, profile & banner
                images, and set a secondary sales fee. Upload your work then
                Click My Collections and set up your collection. Add social
                links, a description, profile & banner images, and set a
                secondary sales fee.
              </p>
            </div>
          </div>
          <div className="sm:grid grid-cols-3 gap-4 max-sm:flex items-center justify-between max-sm:mt-10">
            <div className="grid grid-rows-4 gap-4">
              <h1 className="text-gray-400 text-base font-semibold leading-5 uppercase">
                služby
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Marketing
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Analytics
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Commerce
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Insights
              </h1>
            </div>

            <div className="grid grid-rows-4 gap-4">
              <h1 className="text-gray-400 text-base font-semibold leading-5 uppercase">
                produkty
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Marketing
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Analytics
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Commerce
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Insights
              </h1>
            </div>

            <div className="grid grid-rows-4 gap-4">
              <h1 className="text-gray-400 text-base font-semibold leading-5 uppercase">
                o nás
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Marketing
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Analytics
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Commerce
              </h1>
              <h1 className="text-gray-400 text-base not-italic font-normal leading-6">
                Insights
              </h1>
            </div>
          </div>
        </div>

        <div className="max-sm:mx-10">
          <div className="bg-gradient-to-r from-opacity-0 to-opacity via-[#6F95FE] to-[#D17FFB] h-[1px] " />
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-gray-400">
              &copy; 2023 <span className="text-[#6F95FE]">SpaceSolutions</span>
            </p>
          </div>
          <div className="flex flex-row space-x-[24px] text-gray-400 max-sm:pr-4">
            <Facebook size={24} />
            <Instagram size={24} />
            <Twitter size={24} />
            <Github size={24} />
            <Dribbble size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
