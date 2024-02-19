import { useRouter } from 'next/router';
import React from 'react';

export const FilterBar = ({ activeFilter, setActiveFilter }: { activeFilter?: string, setActiveFilter: Function }) => {
    const router = useRouter();

    const items = [
        {
            key: "campañas",
            name: "Campañas",
            text: "hacemos campañas que son re buenas porque somos re buenos"
        },
        {
            key: "identidad",
            name: "Identidad",
            text: "hacemos identidades que son re buenas porque somos re buenos"
        },
        {
            key: "espacios",
            name: "Espacios",
            text: "hacemos espacios que son re buenas porque somos re buenos"
        },
        {
            key: "nosotros",
            name: "Nosotros",
            text: "somos re buenos"
        },
    ]

    const [active, setActive] = React.useState(false);

    const doFiltering = (key: string) => {
        console.log("BARTO", key)
        if (key == activeFilter) {
            setActiveFilter(undefined)
            setActive(false)
        }
        else setActiveFilter(key)
    }
    const handleClick = (key: string) => {
        doFiltering(key)
        setActive(true)
    }
    return (
        <>
            <div id="filter" className={`container Header ${active ? "active" : ""}`}>
                <div className='row'>
                    <div className="col-12 items">
                        {items.map((i, index) => {
                            return <div className={`item col-md-3 col-12 ${i.key == activeFilter ? "active" : ""}`} onClick={() => handleClick(i.key) /*router.push("#" + item.key)*/} key={i.key} ><p>{i.name}</p></div>
                        })}
                    </div>
                </div>
            </div>
            <a href="#filter">
                <div onClick={() => setActiveFilter(undefined)} className="resetButton">
                    <img src="/icons/reset.png" alt="" />
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