import {
  About,
  Blog,
  Contact,
  References,
  Footer,
  Header,
  Main,
  Products,
} from '@/components/containers'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#211747] to-[#100F25] px-[70px] flex flex-col items-center">
      <Header  />
      <Main />
      <References />
      <About />
      <Products />
      <Contact />
      <Blog />
      <Footer />
    </div>
  )
}
