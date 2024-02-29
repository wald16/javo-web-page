import { useRouter } from 'next/router';
import React from 'react';

export const FilterBar = ({ activeFilter, setActiveFilter }: { activeFilter?: string, setActiveFilter: Function }) => {
    const router = useRouter();

    const items = [
        {
            key: "identidad",
            name: "identidad",
            text: "Lorem ipsum amb al rabia magnis dis parturient montes nascetur ridiculus mus"
        },
        {
            key: "campañas",
            name: "campañas",
            text: "Lorem ipsum amb al rabia magnis dis parturient montes nascetur ridiculus mus"

        },
        {
            key: "ciudades",
            name: "ciudades",
            text: "Lorem ipsum amb al rabia magnis dis parturient montes nascetur ridiculus mus"
        },
        {
            key: "espacios",
            name: "espacios",
            text: "Lorem ipsum amb al rabia magnis dis parturient montes nascetur ridiculus mus"
        },
        {
            key: "poupurri",
            name: "poupurri",
            text: "Lorem ipsum amb al rabia magnis dis parturient montes nascetur ridiculus mus"
        },
        {
            key: "nosotros",
            name: "nosotros",
            text: ""
        },
    ]

    const [active, setActive] = React.useState(false);
    const [text, setText] = React.useState("")

    const handleClick = (key: string, _text: string) => {
        if (key == activeFilter) {
            setActiveFilter(undefined)
            setActive(false)
            setText("")

        }
        else {
            setActiveFilter(key)
            setActive(true)
            setText(_text)
        }
    }

    const reset = () => {
        setActiveFilter("")
        setText("")
        setActive(false)
    }

    const getLastPositionActive = () => {
        let index = 0;
        items.map((i, _index) => {
            if (i.key == activeFilter) {
                index = _index
            }
        })
        return index
    }

    return (
        <>
            <div id="filter" className={`Filter ${active ? "active" : ""}`}>
                <div className='row'>
                    <div className='col-12 pushedCol'>
                        <div className=" items">
                            {items.map((i, index) => {
                                if (i.key !== "nosotros") {
                                    return (
                                        <div className="itemContainer" key={index}>
                                            <div className={`item col-2 col-md-12  ${i.key == activeFilter ? "active" : ""}`} onClick={() => handleClick(i.key, i.text)} key={i.key} ><p>{i.name}</p></div>
                                            {i.key == activeFilter && (
                                                <div className={`text d-flex d-xl-none ${i.key == activeFilter ? "active" : ""}`}>
                                                    {text}
                                                </div>
                                            )}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <a href="#nosotros">
                                            <div className="itemContainer" key={index}>
                                                <div className={`item col-2 col-md-12  ${i.key == activeFilter ? "active" : ""}`} key={i.key} ><p>{i.name}</p></div>
                                                {i.key == activeFilter && (
                                                    <div className={`text d-flex d-xl-none ${i.key == activeFilter ? "active" : ""}`}>
                                                        {text}
                                                    </div>
                                                )}
                                            </div>
                                        </a>
                                    )
                                }
                            })}
                        </div>
                        <div className=" items">

                            {[...items].filter((i: any, _index: number) => (_index <= getLastPositionActive())).map((i, index) => {
                                return (
                                    <div className="itemContainer" key={index}>
                                        <div className={`item col-2 col-md-12 opacity-0 h-0 d-none d-lg-flex ${i.key == activeFilter ? "active" : ""}`} onClick={() => handleClick(i.key, i.text)} key={i.key} ><p>{i.name}</p></div>
                                        {i.key == activeFilter && (
                                            <div className={`text d-none d-xl-flex ${i.key == activeFilter ? "active" : ""}`}>
                                                {text}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <a href="#filter">
                <div onClick={() => reset()} className={`resetButton ${active ? "active" : ""}`}>
                    <img src={` ${active ? "icons/reset.png" : "icons/flecha.png"}`} alt="" />
                </div>
            </a>
        </>
    )
}


{/* <div className='items'> */ }
{/* {items.map((item, index) => ( */ }

// <div className={`item ${item.key == activeFilter ? "active" : ""}`} key={item.key} onClick={() => /*router.push("#" + item.key)*/ doFiltering(item.key)}>
{/* <h3>{item.name}</h3> */ }
{/* </div> */ }
// ))}
{/* </div>  */ }