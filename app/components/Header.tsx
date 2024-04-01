import MobileNav from "./MobileNav"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className='w-full flex justify-center bg-white z-40
    items-center text-gray-800 sticky top-0'>
      <Nav />
      <MobileNav />
    </header>
  )
}

export default Header
