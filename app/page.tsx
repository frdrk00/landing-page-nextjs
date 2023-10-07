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
    <div className='flex flex-col bg-gradient-to-br from-[#211747] to-[#100F25]'>
      <div className="sm:px-[160px]">
        <Header />
        <Main />
        <References />
        <About />
        <Products />
        <Contact />
        <Blog />
      </div>
      <Footer />
    </div>
  )
}
