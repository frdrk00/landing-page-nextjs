const Contact = () => {
  return (
    <section id="contact" className="my-10 ">
      <div className="flex items-center justify-center mb-10">
        <h2 className="text-4xl font-semibold font-sans bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
          Napíšte nám
        </h2>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Meno"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary text-texlight"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Priezvisko"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary text-texlight"
            />
          </div>

          {/* Email field */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary text-texlight"
          />
          <textarea
            name="message"
            id=""
            cols={0}
            rows={10}
            placeholder="Napíšte nám správu"
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary text-texlight"
          ></textarea>
          <div className="w-full flex items-center justify-center lg:justify-end">
            <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
              <button className="px-8 py-3 bg-gradient-to-br from-[#5E16F9] to-[#1E1741] rounded-full h-auto w-full">
                <p className="text-white">Odoslať</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
