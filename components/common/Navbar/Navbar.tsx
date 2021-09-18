import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import cn from 'classnames'
import throttle from 'lodash.throttle'
import SearchSvg from '@components/icons/SearchSvg'
import ProfileSvg from '@components/icons/ProfileSvg'
import CartSvg from '@components/icons/CartSvg'

interface NavbarProps {
  c_name: string
}
const Navbar: FC<{c_name: string}> = ({c_name}) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0
      const { scrollTop } = document.documentElement
      const scrolled = scrollTop > offset
      setHasScrolled(scrolled)
    }, 200)

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={cn(s.root, { 'shadow-magical': hasScrolled }) + ' ' + c_name}>
      <Container>
        <div className="">
          <div className="flex items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <div className="flex items-center mr-auto ttcommon_font font-normal">
              <Link href="/search">
                <a className={s.link}>SHOP</a>
              </Link>
              <Link href="/search?q=clothes">
                <a className={s.link}>ABOUT US</a>
              </Link>
              <Link href="/search?q=accessories">
                <a className={s.link}>INDUSTRY</a>
              </Link>
              <Link href="/search?q=accessories">
                <a className={s.link}>CONTACT</a>
              </Link>
            </div>
            <div className="flex items-center ml-auto">
              <SearchSvg className={s.svg} />
              <ProfileSvg className={s.svg} />
              <CartSvg className={s.svg} />
            </div>
          </div>

          {/* <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div> */}

          {/* <div className="flex justify-end flex-1 space-x-8">
            <UserNav />
          </div> */}
        </div>

        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
