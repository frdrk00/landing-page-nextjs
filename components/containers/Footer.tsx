import { Dribbble, Facebook, Github, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex items-center justify-center overflow-hidden"
    >
      <div className="h-[792px]">
        <div className="border-[3276px] border-[#100F25] rounded-[3276px] "></div>
      </div>

      <div className="absolute items-center justify-center w-full sm:px-[160px] space-y-10">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-row">
            <div className="space-y-10">
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
          <div className="grid grid-cols-3 gap-4">
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

        <div className="bg-gradient-to-r from-opacity-0 to-[rgba(209, 127, 251, 0.00)] via-[#6F95FE] to-[#D17FFB] h-[1px]  " />

        <div className="flex justify-between">
          <div>
            <p className="text-gray-400">
              &copy; 2023 <span className="text-[#6F95FE]">SpaceSolutions</span>
            </p>
          </div>
          <div className="flex flex-row space-x-[24px] text-gray-400">
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
