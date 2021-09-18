import { Layout, DynamicComponent } from '@components/common'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { SbEditableContent } from "storyblok-react"
import Storyblok, { useStoryblok } from '@lib/storyblok'
import getDetailsFromStory from '@lib/storyblokBigCommerce'


import { getConfig } from '@framework/api'
import { useRef, useState } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, A11y} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination])

import { RatingView } from 'react-simple-star-rating'

// export async function getStaticProps({
//   preview,
//   locale,
// }: GetStaticPropsContext) {
//   const config = getConfig({ locale })

//   const sbParams = {
//     version: preview ? "draft" : "published"
//   }
 
//   const { data: { story }} = await Storyblok.get('cdn/stories/home', sbParams)
//   const copyOfStory = Object.assign({}, story)
//   const fullProducts = await getDetailsFromStory({ story, config, preview })
//   copyOfStory.content = fullProducts

//   return {
//     props: {
//       story: copyOfStory,
//     },
//     revalidate: 14400,
//   }
// }

const nonNullable = (v: any) => v


const renderCarouselItems = () => {
  return [0,1,2,3,4,5,6].map(item => {
    return <SwiperSlide>
            <div className="bg-white flex flex-col pt-4 pb-10" style={{width: 352 + 'px', height: 472 + 'px'}}>
                <div className="flex">
                  <img className="mx-auto" src="../assets/img/product1.png" alt="" />
                </div>
                <div className="uppercase text-center text-color_1 font-bold text-2xl" style={{letterSpacing: 0.1 + 'em'}}>DERMAL FILLERS</div>
            </div>
          </SwiperSlide>
  })
}

const renderProfileImgCarouselItems = () => {
  return ["http://demos.thementic.com/wordpress/WC01/WC010007/wp-content/uploads/2019/02/t3.jpg",
          "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/3.JPG",
          "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG",
          "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
          "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/34268-MLS-Serene-Zhuang-007flin.jpg"].map(item => {
    return <SwiperSlide>
            <div className="">
                <div className="flex">
                  <img className="mx-auto rounded-full opacity-75" src={item} width={90} height={90} alt="" />
                </div>
            </div>
          </SwiperSlide>
  })
}

const renderProfileDetailCarouselItems = () => {
  return [0, 1, 2, 3, 4].map(item => {
    return <SwiperSlide>
            <div className="">
                <div className="text-sm text-center" style={{lineHeight: 17 + 'px'}}>DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS</div>
                <div className="flex justify-center mt-7">
                  <RatingView ratingValue={3} size={30} className="foo" fillColor="#87C1B9" emptyColor="rgba(135, 193, 185, 0.3)"/>
                </div>
                <p className="text-sm text-center mt-7 mx-auto" style={{maxWidth: 426 + 'px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
            </div>
          </SwiperSlide>
  })
}

const renderFAQCollapse = () => {
  const [myArray, setMyArray] = useState<Boolean[]>([]);
  var items = [
    {
      'title': 'How does it work?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'How long do the results last?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'What is the expected recovery time for my patients?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'What are some important safety tips to follow when using this product?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'What are the most common side effects?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    }
  ]
  // setMyArray(new Array(items.length).fill(false))
  
  function clickCollapse(index:any) {
    console.log('Congratulation Eden Hazard!!!' + index)
    // const temp_var = myArray || [];
    // temp_var[index] = true;
    // setMyArray(temp_var);
  }
  return items.map((item, index) => {
    return <div className="divide-y divide-c_00080D">
              <div className="flex items-center w-full mt-10 pb-5 cursor-pointer" onClick={() => clickCollapse(index)}>
                <div className="text-base">{item.title}</div>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                  </svg>
                </div>
              </div>
              <div className="text-sm pt-5">{item.detail}</div>
              {/* {myArray[index] && } */}
            </div>
  })

}

export default function Home(
  // {
  // story,
// }: InferGetStaticPropsType<typeof getStaticProps>
  ) {
  // const liveStory = useStoryblok(story);

  // const components = liveStory.content.body.map((blok: SbEditableContent) => { 
  //   return (<DynamicComponent blok={blok} key={blok._uid} />)
  // })

  return (
    <div className="bg-c_CCE7EF ttcommon_font">
      <img className="w-full" src="../assets/img/home-part1-bg.png"></img>
      <div className="z-50 text-white font-bold -mt-32 mx-60 flex">
        <div className="text-4xl">Our Categories.</div>
        <div className="flex items-center ml-auto">
          <div className="">Explore All</div>
          <div className="ml-2"> 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* our category part */}
      <div className="mt-10 ml-60">
        <Swiper
          className="category_carousel"
          spaceBetween={20} 
          slidesPerView={4} 
          modules={[Navigation, Pagination, A11y]}
          pagination={{
            el: '.category-pagination-div',
            clickable: true,
          }}
          navigation= {{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {renderCarouselItems()}
        </Swiper>
        
      </div>
      <div className="mt-10 flex items-center relative mx-60">
        <div className="swiper-button-prev absolute"></div>
        <div className="swiper-button-next absolute"></div>
        <div className="category-pagination-div flex justify-center"></div>
      </div>
      

      {/* learn more part */}
      <div className="mt-20 bg-white text-center py-24 relative" style={{height: 469 + 'px'}}>
        <div className="flex flex-col h-full">
          <div className="text-4xl font-bold my-auto" style={{lineHeight: 26 + 'px'}}>Intraline is Confidence.</div>
          <p className="my-auto text-c_00080D text-4xl mx-auto max-w-lg">Our mission is to inspire confidence through safe and effective medical aesthetic products.</p>
          <button className="w-52 h-11 uppercase bg-c_00090D flex justify-center items-center text-white text-sm mx-auto my-auto">learn more</button>
        </div>
        <div className="absolute top-0 left-0">
          <img src="../assets/img/triple_red.png" alt="" />
        </div>
        <div className="absolute bottom-0 right-0">
          <img src="../assets/img/triple_blue.png" alt="" />
        </div>
      </div>

      {/* Feature products part */}
      <div className="bg-c_C6CBDD py-24">
        <div className="mx-60 flex">
          <div className=" font-bold text-4xl" style={{lineHeight: 26 + 'px'}}>Featured Products.</div>
          <div className="flex items-center ml-auto">
            <div className="font-bold text-lg" style={{lineHeight: 24 + 'px'}}>See All</div>
            <div className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Swiper 
            className="feature_carousel"
            // spaceBetween={20} 
            slidesPerView={5} 
            modules={[Navigation, Pagination, A11y]}
            pagination={{
              el: '.feature-custom-pagination-div',
              clickable: true,
            }}
            navigation= {{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}>
            {renderCarouselItems()}
          </Swiper>
        </div>
        <div className="mt-10 flex items-center relative mx-44">
          <div className="swiper-button-prev absolute"></div>
          <div className="swiper-button-next absolute"></div>
          <div className="feature-custom-pagination-div flex justify-center"></div>
        </div>
      </div>

      {/* Reviews part */}
      <div className="py-24 bg-white">
        <div className=" text-c_00080D font-bold text-4xl text-center" style={{lineHeight: 26 + 'px'}}>Intraline Reviews.</div>
        <div className="mx-auto mt-10 w-96">
          <Swiper 
            className="profile-img-carousel"
            spaceBetween={0} 
            slidesPerView={3} 
            modules={[Navigation, Pagination, A11y]}>
            {renderProfileImgCarouselItems()}
          </Swiper>
        </div>
        <div className="mx-auto mt-10" style={{maxWidth: 1094 + 'px'}}>
          <Swiper 
            className="profile-img-carousel" 
            slidesPerView={1} 
            modules={[Navigation, Pagination, A11y]}
            pagination={{
              el: '.profile-custom-pagination-div',
              clickable: true,
            }}
            navigation= {true}>
            {renderProfileDetailCarouselItems()}
          </Swiper>
        </div>
        <div className="mt-10 flex items-center relative mx-44">
          <div className="profile-custom-pagination-div flex justify-center"></div>
        </div>
      </div>

      {/* FAQ part */}
      <div className="bg-c_C3E0DC">
        <div className="mx-60 py-24">
          <div className="flex text-c_00080D mb-2">
              <div className="font-bold text-4xl" style={{lineHeight: 26 + 'px'}}>Frequently Asked Questions.</div>
              <div className="flex items-center ml-auto">
                <div className="font-bold text-lg">Read More</div>
                <div className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
          </div>
          
          {renderFAQCollapse()}
        </div>
      </div>
      
      {/* { components } */}
    </div>
  )
}

Home.Layout = Layout
