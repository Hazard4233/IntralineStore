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

const renderShopMenu = () => {
  const category_li = [
    { name: 'All products', link: '/shop/allproducts', subItem_li: []},
    { name: 'Dermal Fillers', link: '/shop/dermalfillers', 
      subItem_li: [
        { name: 'M Series', link: '/shop/dermalfiller/mseries'},
        { name: 'Rejuvenation', link: '/shop/dermalfiller/mseries'}
      ]
    },
    { name: 'PDO Threads', link: '/shop/pdothread', 
      subItem_li: [
        { name: 'The Essentials', link: '/shop/pdothread'},
        { name: 'Lifting Threads', link: '/shop/pdothread/liftingthread'}
      ]
    },
    { name: 'Skincare', link: '/shop/skincare', 
      subItem_li: []
    },
    { name: 'Scar Kit', link: '/shop/scarkit'}
  ]
  return category_li.map((item, index) => {
    return <div key={`shop_menu_${index}`}>
      <div>
        <div className="uppercase text-sm tracking-widest leading-14_17 cursor-pointer hover:underline">{item.name}</div>
        {(item.subItem_li || []).map((item1, index1) => {
          return <div className="text-center text-sm leading-14_17 mt-5 cursor-pointer hover:underline" key={`shop_menu-${index}-${index1}`}>{item1.name}</div>
        })}
      </div>
    </div>
  })
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
          <div className="flex">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <div className="flex items-center mr-auto ttcommon_font font-normal">
              <div className={s.nav_item}>
                <div className={s.link}>Shop</div>
                {/* shop menu */}
                <div className={s.submenu}>
                  <div className="flex justify-between mx-auto max-w-7xl flex-wrap">
                    {renderShopMenu()}
                  </div>
                </div>
              </div>
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
