import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, A11y} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination])


const renderTestimonial = () => {
    return [0, 1, 2, 3, 4].map(item => {
      return <SwiperSlide>
              <div className="">
                <p className="ttcommon_font_thin text-sm text-center mx-auto" style={{maxWidth: 426 + 'px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
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
    // setMyArray(new Array(items.length).fill(false))
    
    function clickCollapse(index:any) {
      console.log('Congratulation Eden Hazard!!!' + index)
      // const temp_var = myArray || [];
      // temp_var[index] = true;
      // setMyArray(temp_var);
    }
    return items.map((item, index) => {
      return <div className="ttcommon_font divide-y divide-c_00080D">
                <div className="flex items-center w-full mt-10 pb-5 cursor-pointer" onClick={() => clickCollapse(index)}>
                  <div className="ttcommon_font text-base" style={{letterSpacing: 0.1 + 'em'}}>{item.title}</div>
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


export default function DemeralFiller() {
    return(
        <div className="ttcommon_font text-c_00080D">
            <Navbar c_name="bg-black"></Navbar>
            <div className="relative bg-c_CCE7EF w-full px-15 pb-32 flex flex-col" style={{height: 900 + 'px'}}>
                <div className="flex my-auto w-full">
                    <div className="w-1/2">
                        <div className="s-p-title ttcommon_font_thin font-semibold">PDO</div>
                        <div className="s-p-title ttcommon_font_bold" >Threads</div>
                    </div>
                    <div className="w-1/2 text-4xl ttcommon_font_thin" style={{maxWidth: 427 + 'px'}}>
                        Carefully developed after years of research, Intraline's line up of six dermal fillers are CE marked and designed to treat all areas.
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full">
                    <img className="img_bg_transparent h-full" src="../../assets/img/BluePurpleSmoke.png" alt="" />
                </div>
            </div>

            <div className="bg-white">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold text-4xl text-center" style={{lineHeight: 26 + 'px'}}>Polydioxanone Threads.</div>
                    <p className="mt-6 text-4xl ttcommon_font_thin text-center" style={{lineHeight: 48 + 'px'}}>Intraline’s PDO threads are CE marked with an excellent safety profile and virtually non-allergenic. PDO suture use has nearly 40 years of medical history supporting its use.</p>
                    <div className="mt-8">
                        <button className="mx-auto ttcommon_font_thin uppercase bg-c_00090D text-white h-11 w-64 flex items-center justify-center text-sm" style={{letterSpacing: 0.1 + 'em'}}>Browse catalog</button>
                    </div>
                </div>
            </div>
            
            {/* what is pdo? */}
            <div className=" bg-c_CCE7EF flex items-center py-32">
                <div className="w-1/2 pr-32 pl-44">
                    <div className="bg-white p-7 flex flex-col divide-y">
                        <div className="pb-8">
                            <div className="text-6xl ttcommon_font_bold" style={{lineHeight: 76 + "px"}}>PDO Threads.</div>
                            <div className="uppercase mt-3">Select a question to learn more.</div>
                        </div>
                        <div className="pt-8 text-4xl">
                            <div className="ttcommon_font_bold" style={{lineHeight: 48 + 'px'}}>What is PDO?</div>
                            <div className="mt-7 ttcommon_font_thin">What are PDO Threads?</div>
                            <div className="mt-7 ttcommon_font_thin">What is a PDO Treatment?</div>
                            <div className="mt-7 ttcommon_font_thin">Types of PDO Threads.</div>
                            <div className="mt-7 ttcommon_font_thin">PDO FAQ's.</div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 pr-44">
                    <div className="ttcommon_font_bold text-4xl" style={{lineHeight: 48 + 'px'}}>What is PDO?</div>
                    <p className="ttcommon_font_thin text-sm mt-5">Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.</p>
                </div>
            </div>

            <div className="bg-white py-24">
                <div className="ttcommon_font_bold text-4xl text-center" style={{lineHeight: 26 + 'px'}}>Testimonials.</div>
                <div className="mx-60 mt-12">
                    <Swiper 
                        className="testimonial-carousel" 
                        slidesPerView={1} 
                        modules={[Navigation, Pagination, A11y]}
                        pagination={{
                            el: '.testimonial-pagination-div',
                            clickable: true,
                        }}
                        navigation= {true}>
                        {renderTestimonial()}
                    </Swiper>
                </div>
                <div className="mt-10 flex items-center relative mx-44">
                    <div className="testimonial-pagination-div flex justify-center"></div>
                    <div className="absolute left-3/5" style={{top: -120 + 'px'}}>
                        <svg width="100" height="76" viewBox="0 0 100 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M14.9254 76C14.9254 76 44.7761 61.098 44.7761 23.8431C44.7761 10.4314 34.3284 0 22.3881 0C10.4478 0 0 10.4314 0 22.3529C0 34.2745 10.4478 44.7059 22.3881 44.7059C19.403 58.1176 7.46269 65.5686 7.46269 65.5686L14.9254 76ZM70.1493 76C70.1493 76 100 61.098 100 23.8431C100 10.4314 89.5522 0 77.6119 0C65.6716 0 55.2239 10.4314 55.2239 22.3529C55.2239 34.2745 65.6716 44.7059 77.6119 44.7059C74.6269 58.1176 62.6866 65.5686 62.6866 65.5686L70.1493 76Z" fill="#87C1B9"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* FAQ part */}
            <div className="bg-white">
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
            
            {/* Download Catalog */}
            <div className="bg-c_F5DBDD">
                <div className="mx-60 py-28">
                    <div className="flex flex-col max-w-md mx-auto">
                        <div className="ttcommon_font_bold text-4xl" style={{lineHeight: 26 + 'px'}}>Download Our Catalog.</div>
                        <p className="mt-5">Discover Intraline’s Dermal Fillers and PDO Threads. Enter your email to receive our complete product catalog.</p>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Your Email Address"/>
                        </div>
                        <div className="mt-10">
                            <button className="ttcommon_font_thin uppercase bg-c_00090D text-white h-11 w-full flex items-center justify-center text-sm" style={{letterSpacing: 0.1 + 'em'}}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

DemeralFiller.Layout = Layout