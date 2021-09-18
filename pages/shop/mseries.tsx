import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import QuoteSvg from '@components/icons/QuoteSvg'
SwiperCore.use([Navigation, Pagination])

const renderMSeriesSwiper = () => {
    return [0, 1, 2, 3, 4].map((item, index) => {
        return <SwiperSlide key={'pdo_thread_' + index}>
                    <div className="">
                        <img className="mx-auto" src={"../../assets/img/mseries_" + String(item + 1) + ".png"} alt="" />
                        <div className="custom_letter_space uppercase text-2xl text-center font-semibold">M2 Plus | $100.00</div>
                    </div>
                </SwiperSlide>
    })
}

const renderTestimonialSwiper = () => {
    return [0, 1, 2, 3, 4].map((item, index) => {
      return <SwiperSlide key={'testinominal_' + index}>
              <div className="">
                <p className="ttcommon_font_thin text-sm text-center mx-auto" style={{maxWidth: 426 + 'px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                <div className="text-sm text-center mt-7" style={{lineHeight: 17 + 'px'}}>DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS</div>
              </div>
            </SwiperSlide>
    })
  }


export default function MSeries() {
    return(
        <div className="ttcommon_font text-c_00080D">
            <div className="relative bg-white w-full flex flex-col" style={{height: 900 + 'px'}}>
                <div className="absolute w-full h-full flex">
                    <div className="w-5/12 h-full"></div>
                    <div className="w-7/12 h-full bg-c_CCE7EF" style={{borderTopLeftRadius: 70 + '%', borderBottomLeftRadius: 40 + '%'}}></div>
                </div>
                <div className="flex my-auto w-full h-full px-15 z-10">
                    <div className="w-7/12 flex flex-col">
                        <div className="my-auto">
                            <div className="s-p-title ttcommon_font_thin font-semibold">The</div>
                            <div className="s-p-title ttcommon_font_bold" >M Series</div>
                            <div className="line_hei_px_48 ttcommon_font_thin w-7/12 font-semibold mt-8 mx-auto text-4xl text-c_00080D">The M Series from Intraline is the next generation of monophasic dermal fillers with lidocaine. </div>
                        </div>
                    </div>
                    <div className="w-5/12 flex flex-col">
                        <div className="my-auto">
                            <Swiper 
                                className="testimonial-carousel" 
                                slidesPerView={1}
                                loop={true}
                                modules={[Navigation, Pagination, A11y, Autoplay]}
                                pagination={{
                                    el: '.pdo-thread-pagination-div',
                                    clickable: true,
                                }}
                                navigation= {true}
                                autoplay={{
                                    delay: 2000
                                }}>
                                {renderMSeriesSwiper()}
                            </Swiper>
                            <div className="mt-10 flex items-center relative mx-44">
                                <div className="pdo-thread-pagination-div flex justify-center"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold line_hei_px_26 text-4xl text-center">Polydioxanone Threads.</div>
                    <p className="line_hei_px_48 mt-6 text-4xl ttcommon_font_thin text-center">Intraline’s PDO threads are CE marked with an excellent safety profile and virtually non-allergenic. PDO suture use has nearly 40 years of medical history supporting its use.</p>
                    <div className="mt-8">
                        <button className="custom_letter_space mx-auto ttcommon_font_thin uppercase bg-c_00090D text-white h-11 w-64 flex items-center justify-center text-sm">Browse catalog</button>
                    </div>
                </div>
            </div>
            
            {/* what is pdo? */}
            <div className="bg-c_CCE7EF flex items-center py-32 relative overflow-hidden">
                <div className="ttcommon_font_bold absolute bottom-0 transform -rotate-90 text-c_99CEE0" style={{fontSize: 200,lineHeight: 160 + 'px',transformOrigin: 'bottom left', left:160}}>PDO Threads</div>
                <div className="w-1/2 pr-32 pl-44">
                    <div className="bg-white p-7 flex flex-col divide-y">
                        <div className="pb-8">
                            <div className="text-6xl ttcommon_font_bold" style={{lineHeight: 76 + "px"}}>PDO Threads.</div>
                            <div className="custom_letter_space uppercase mt-3">Select a question to learn more.</div>
                        </div>
                        <div className="pt-8 text-4xl">
                            <div className="ttcommon_font_bold line_hei_px_48">What is PDO?</div>
                            <div className="mt-7 ttcommon_font_thin">What are PDO Threads?</div>
                            <div className="mt-7 ttcommon_font_thin">What is a PDO Treatment?</div>
                            <div className="mt-7 ttcommon_font_thin">Types of PDO Threads.</div>
                            <div className="mt-7 ttcommon_font_thin">PDO FAQ's.</div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 pr-44">
                    <div className="ttcommon_font_bold text-4xl line_hei_px_48">What is PDO?</div>
                    <p className="ttcommon_font_thin text-sm mt-5">Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.</p>
                </div>
            </div>

            <div className="bg-white py-24">
                <div className="ttcommon_font_bold line_hei_px_26 text-4xl text-center">Testimonials.</div>
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
                        {renderTestimonialSwiper()}
                    </Swiper>
                </div>
                <div className="mt-10 flex items-center relative mx-44">
                    <div className="testimonial-pagination-div flex justify-center"></div>
                    <div className="absolute left-3/5" style={{top: -120 + 'px'}}>
                        <QuoteSvg fill="#C6CBDD"/>
                    </div>
                </div>
            </div>

            
            
            {/* Question part */}
            <div className=" bg-c_C6CBDD">
                <div className="mx-60 py-28">
                    <div className="flex flex-col max-w-lg mx-auto">
                        <div className="ttcommon_font_bold line_hei_px_26 text-4xl">Any more questions?</div>
                        <p className="mt-5 text-sm">We are here to help --- reach out with any questions.</p>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="First name"/>
                        </div>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Company Name"/>
                        </div>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Email"/>
                        </div>
                        <div className="mt-10">
                            <select className="h-11 border-none bg-white w-full pl-5 pr-3 py-2 text-c_8D97BC" name="" id="">
                                <option value="Choose Country or Region">Choose Country or Region</option>
                            </select>
                        </div>
                        <div className="mt-10">
                            <textarea className="h-24 border-none bg-white w-full pl-5 py-2" placeholder="Write Your Comment!"></textarea>
                        </div>
                        <div className="mt-5">
                            <div className="text-xs"><strong className="underline">Intraline’s Privacy Policy.</strong> If you consent to us contacting you for this purpose, please tick below:</div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div>
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div className="ml-2">I agree to receive other communications from Intraline.</div>
                        </div>
                        <div className="text-xs text-c_00080D mt-5">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-10">
                            <button className="custom_letter_space ttcommon_font_thin uppercase bg-c_00090D text-white h-11 w-full flex items-center justify-center text-sm">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

MSeries.Layout = Layout