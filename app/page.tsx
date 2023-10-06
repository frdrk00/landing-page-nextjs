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
    <div className='h-full bg-gradient-to-br from-[#394F68] to-[#183B7E] px-32 flex flex-col items-center'>
      <Header />
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
