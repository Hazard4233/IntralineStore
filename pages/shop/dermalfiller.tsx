import React from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'


export default function DemeralFiller() {
    return(
        <div className="ttcommon_font text-c_00080D">
            <Navbar c_name="bg-black"></Navbar>
            <div className="relative bg-c_CCE7EF w-full px-15 pb-32 flex flex-col" style={{height: 900 + 'px'}}>
                <div className="flex my-auto w-full">
                    <div className="w-1/2">
                        <div className="s-p-title ttcommon_font_thin font-semibold">Dermal</div>
                        <div className="s-p-title ttcommon_font_bold" >Fillers</div>
                    </div>
                    <div className="w-1/2 text-4xl ttcommon_font_thin" style={{maxWidth: 427 + 'px'}}>
                        Carefully developed after years of research, Intraline's line up of six dermal fillers are CE marked and designed to treat all areas.
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full">
                    <img className="img_bg_transparent h-full" src="../../assets/img/BluePurpleSmoke.png" alt="" />
                </div>
            </div>
        </div>
    )
}

DemeralFiller.Layout = Layout