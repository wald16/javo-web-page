import React from "react",
import { Shown } from "./Shown"

const textModule = (title: string, text: string, extraClass: string) => {
    <div className={`Section SectionLarge col-12 p-0 ${extraClass}`}>
        <Shown partiallyVisible={true} >
            <div className='SectionImage d-none d-md-flex' />
            <div className='SectionImage d-flex d-md-none' />
            {title || text ? (
                <div className='SectionText'>
                    <div className='SectionTextHolder'>
                        {title && <p className='f-50 lh-48 title'><b>{title}</b></p>}
                        {text && <p className='f-50 lh-48 text' ><b>{text}</b></p>}
                    </div>
                </div>
            ) : <></>}
        </Shown>
    </div>
}
