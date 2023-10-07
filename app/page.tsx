import {
  About,
  Blog,
  Contact,
  Feedback,
  Footer,
  Header,
  Main,
  Products,
} from '@/components/containers'

export default function Home() {
  return (
    <div className="h-full bg-gradient-to-br from-[#211747] to-[#100F25] px-[70px] flex flex-col items-center">
      <Header  />
      <Main />
      <Feedback />
      <About />
      <Products />
      <Contact />
      <Blog />
      <Footer />
    </div>
  )
}
