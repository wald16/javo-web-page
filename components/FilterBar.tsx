import { useRouter } from 'next/router';
import React from 'react';

export const FilterBar = ({ activeFilter, setActiveFilter }: { activeFilter?: string, setActiveFilter: Function }) => {
    const router = useRouter();

    const items = [
        {
            key: "identidad",
            name: "Identidad",
            text: "hacemos identidades que son re buenas porque somos re buenos"
        },
        {
            key: "campañas",
            name: "Campañas",
            text: "Lorem ipsum amb al rabia magnis dis parturient montes nascetur ridiculus mus"

        },
        {
            key: "ciudades",
            name: "ciudades",
            text: "hacemos ciudades que son re buenas porque somos re buenos"
        },
        {
            key: "espacios",
            name: "Espacios",
            text: "hacemos espacios que son re buenas porque somos re buenos"
        },
        {
            key: "poupurri",
            name: "poupurri",
            text: "hacemos poupurris que son re buenas porque somos re buenos"
        },
        {
            key: "nosotros",
            name: "Nosotros",
            text: "somos re buenos"
        },
    ]

    const [active, setActive] = React.useState(false);
    const [text, setText] = React.useState("")

    const doFiltering = (key: string) => {
        console.log("BARTO", key)
        if (key == activeFilter) {
            setActiveFilter(undefined)
            setActive(false)

        }
        else {
            setActiveFilter(key)
            setActive(true)
        }
    }
    const handleClick = (key: string, _text: string) => {
        doFiltering(key)
        if (_text === text) {
            setText("")
        } else setText(_text)
    }
    const reset = () => { 
         setActiveFilter("")
         setText("")
         setActive(false)
    }
    return (
        <>
            <div id="filter" className={`Header ${active ? "active" : ""}`}>
                <div className='row'>
                    <div className=" items">
                        {items.map((i, index) => {
                            if (i.text === text) {
                                return (
                                    <div className="itemContainer">
                                        <div className={`item  ${i.key == activeFilter ? "active" : ""}`} onClick={() => handleClick(i.key, i.text) /*router.push("#" + item.key)*/} key={i.key} ><p>{i.name}</p></div>

                                        <div className={`text ${i.key == activeFilter ? "active" : ""}`}>

                                            {text}

                                        </div>
                                    </div>
                                )
                            } else return (
                                <div className="itemContainer">
                                    <div className={`item col-2 col-md-12  ${i.key == activeFilter ? "active" : ""}`} onClick={() => handleClick(i.key, i.text) /*router.push("#" + item.key)*/} key={i.key} ><p>{i.name}</p></div>
                                </div>
                            )
                        })}
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