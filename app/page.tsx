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
    <div className="flex flex-col">
      <Header />
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
