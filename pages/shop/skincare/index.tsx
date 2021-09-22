import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, A11y} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import QuoteSvg from '@components/icons/QuoteSvg'
import ChevronRight from '@components/icons/ChevronRight'
import { ChevronUp } from '@components/icons'
import ChevronDown from '@components/icons/ChevronDown'
SwiperCore.use([Navigation, Pagination])


const renderTestimonialSwiper = () => {
    return [0, 1, 2, 3, 4].map((item, index) => {
      return <SwiperSlide key={'testimonial_' + index}>
              <div className="">
                <p className="ttcommon_font_thin text-sm text-center mx-auto max-w-md">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                <div className="text-sm text-center mt-7" style={{lineHeight: 17 + 'px'}}>DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS</div>
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
    const [enable_faq, setFaq] = useState(new Array(items.length).fill(false));
    // setMyArray(new Array(items.length).fill(false))
  
    function renderChevronUpDown(index: any) {
      if (enable_faq[index]) return <ChevronUp className="h-4 w-4" />;
      else return <ChevronDown className="h-4 w-4" />
    }
    
    function clickChevron(index: any) {
      const new_enable_faq = [...enable_faq]
      new_enable_faq[index] = !new_enable_faq[index]
      setFaq(new_enable_faq)
    }
  
    return items.map((item, index) => {
      return <div className="divide-y divide-c_00080D" key={'faq_' + index}>
        <div className="flex items-center w-full mt-10 pb-5 cursor-pointer" onClick={() => clickChevron(index)}>
          <div className="text-base">{item.title}</div>
          <div className="ml-auto">
            {renderChevronUpDown(index)}
          </div>
        </div>
        <div>
          {enable_faq[index] && <div className="text-sm pt-5">{item.detail}</div>}
        </div>
      </div>
    })
}



export default function SkinCare() {
    return(
        <div className="ttcommon_font text-c_00080D flex flex-col">
            <div className="bg-c_C6CBDD w-full px-15 pb-32 flex flex-col" style={{height: 900 + 'px'}}>
                <div className="flex items-end my-auto w-full">
                    <div className="w-1/2">
                        <div className="ttcommon_font_thin font-semibold text-12_5 leading-200_160">Skin</div>
                        <div className="ttcommon_font_bold text-12_5 leading-200_160" >Care</div>
                    </div>
                    <div className="w-1/2 text-4xl ttcommon_font_thin max-w-md" style={{maxWidth: 427 + 'px'}}>
                        Immerse your skin in intense moisture while smoothing, tightening & rejuvenating.
                    </div>
                </div>
            </div>

            <div className="bg-white w-full relative" style={{height: 488 + "px"}}>
                <div className="w-full px-15 flex absolute z-10" style={{top: -224 + 'px'}}>
                    <div className="w-1/2 mr-3">
                        <div className="leading-36_48 text-4xl ttcommon_font_bold text-c_00080D">Restorative Moisturizer.</div>
                        <div className="mt-10 pt-5 bg-c_F5DBDD w-full border-none flex flex-col" style={{height: 400 + 'px'}}>
                            <div className="flex h-full px-15 justify-center">
                                <img src="/assets/img/skincare1.png" alt="" />
                            </div>
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-8 text-4xl text-c_00080D">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</div>
                    </div>
                    <div className="w-1/2 ml-3">
                        <div className="leading-36_48 text-4xl ttcommon_font_bold text-c_00080D">Biocellulose Masque.</div>
                        <div className="mt-10 pt-5 bg-c_F5DBDD w-full border-none" style={{height: 400 + 'px'}}>
                            <div className="flex h-full px-15 justify-center">
                                <img src="/assets/img/skincare2.png" alt="" />
                            </div>
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-8 text-4xl text-c_00080D">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</div>
                    </div>
                </div>
            </div>

            {/* cart part */}
            <div className="bg-c_CCE7EF w-full relative">
                <div className="absolute h-full flex flex-col transform -translate-x-2/5">
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_99CEE0 text-12_5 leading-200_160" style={{transformOrigin: 'center'}}>Skincare</div>
                </div>
                <div className="ml-172 mr-15 my-32">
                    <div className="w-full flex items-center">
                        <div className="w-5/12 pr-32">
                            <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">Ingredients.</div>
                                    <div className="text-sm leading-14_17 tracking-widest mt-2">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        <div className="flex items-start w-full">
                                            <div className="ttcommon_font_bold text-4xl leading-36_48">Sea Buckthorn</div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="ttcommon_font_thin text-4xl leading-36_48">Hyaluronic Acid.</div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="ttcommon_font_thin text-4xl leading-36_48">Vitamin A, B & C.</div>
                                        </div>
                                        
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="ttcommon_font_thin text-4xl leading-36_48">Vitamin B3.</div>
                                        </div>

                                        <div className="mt-7 w-full">
                                            <div className="ttcommon_font_thin text-4xl leading-36_48">Skincare FAQ’s.</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="w-1/2">
                            <div className="ttcommon_font_bold mt-12 text-4xl leading-36_48">What is Sea Bucktorn?</div>
                            <div className="ttcommon_font_thin mt-5 text-sm leading-14_26">Sea Buckthorn is known to aid in alleviating sunburns, healing wounds, including burns & cuts, treating acne, dermatitis, dry skin, eczema, and changes in skin colour;,and for protecting mucus membranes. Sea Buckthorn contains vitamins A, B1, B2, B6, and C, as well as Hyaluronic Acid and several other active ingredients.</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* testimonial part */}
            <div className="bg-white py-24">
                <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Testimonials.</div>
                <div className="mx-60 mt-12">
                    <Swiper 
                        className="testimonial-carousel" 
                        slidesPerView={1}
                        loop={true}
                        modules={[Navigation, Pagination, A11y]}
                        pagination={{
                            el: '.testimonial-pagination-div',
                            clickable: true,
                        }}
                        navigation= {true}>
                        {renderTestimonialSwiper()}
                    </Swiper>
                </div>
                <div className="mt-10 flex items-center relative mx-44">
                    <div className="testimonial-pagination-div flex justify-center"></div>
                    <div className="absolute left-3/5" style={{top: -120 + 'px'}}>
                        <QuoteSvg fill="#F5DBDD"/>
                    </div>
                </div>
            </div>

            {/* FAQ part */}
            <div className="bg-c_C3E0DC">
                <div className="mx-60 py-24">
                    <div className="flex text-c_00080D mb-2">
                        <div className="leading-36_26 font-bold text-4xl">Frequently Asked Questions.</div>
                        <div className="flex items-center ml-auto">
                            <div className="font-bold text-lg">Read More</div>
                            <div className="ml-2">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    {renderFAQCollapse()}
                </div>
            </div>
        </div>
    )
}

SkinCare.Layout = Layout