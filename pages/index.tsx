import { Shown } from '@/components/Shown';
import Head from 'next/head'
import React from 'react';
import { FilterBar } from '@/components/FilterBar';
import Video from '@/components/video';
export type ItemType = {
  type: "large" | "small" | "banner" | "key-link";
  img?: string;
  text?: string;
  href?: string;
  height?: string;
  clickeable?: boolean;
  showOnlyOnFilter?: boolean;
  title?: string;
  category?: string;
  titleColor?: string;
  textAlign?: string;
  description?: string;
  descriptionColor?: string;
  minHeight?: string;
  mobileHeight?: string;
  mobileMinHeight?: string;
  fontSize?: number,
  video?: string,
  bkg?: string,
  extraClass?: string,
  secondaryImgs?: string[],
  secondaryVideos?: string[],
  details: string
}


const config: ItemType[] = [

  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    clickeable: true,
    img: "/images/img3.jpg",
    minHeight: "400px",
    height: "40vh",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    category: "campañas",
    secondaryImgs: [
      "/images/img3.jpg",
      "/images/img2.jpg",
      "/images/img1.jpg",
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img4.jpg",
    minHeight: "400px",
    height: "40vh",
    category: "campañas",
    secondaryImgs: [
      "/images/img4.jpg",
      "/images/img2.jpg",
      "/images/img1.jpg",
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img5.jpg",
    minHeight: "400px",
    height: "40vh",
    category: "identidad",
    secondaryImgs: [
      "/images/img5.jpg",
      "/images/img2.jpg",
      "/images/img1.jpg",
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img13.jpg",
    minHeight: "400px",
    height: "40vh",
    category: "identidad",
    secondaryImgs: [
      "/images/img13.jpg",
      "/images/img2.jpg",
      "/images/img1.jpg",
    ],
    secondaryVideos: [
      "/videos/banner.mp4",
    ]
  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    minHeight: "400px",
    height: "40vh",
    mobileHeight: "320px",
    mobileMinHeight: "auto",
    clickeable: false,
    title: "hacemos comunicación visual ",
    titleColor: "white",
    descriptionColor: "#FF5500",
    description: "diseñamos y desarrollamos proyectos efectivos que potencian relatos y fortalecen marcas",
    textAlign: "left",
    category: "espacios",
    extraClass: "noHover",

  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    minHeight: "500px",
    img: "/images/img8.jpg",
    height: "50vh",
    mobileHeight: "420px",
    mobileMinHeight: "auto",
    category: "espacios",
    clickeable: false,
    secondaryImgs: [
      "/images/img8.jpg",
      "/images/img2.jpg",
      "/images/img1.jpg",
    ]

  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    clickeable: true,
    img: "/images/img14.jpg",
    category: "identidad",
    minHeight: "400px",
    height: "40vh",
    titleColor: "white",
    textAlign: "end",
    secondaryImgs: [
      "/images/img14.jpg",
      "/images/img2.jpg",
      "/images/img1.jpg",
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img11.jpg",
    minHeight: "400px",
    category: "identidad",
    height: "40vh",
    secondaryImgs: [
      "/images/img11.jpg",
      "/images/img2.jpg",
      "/images/img1.jpg",
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img6.jpg",
    minHeight: "400px",
    category: "nosotros",
    height: "40vh",
    secondaryImgs: [
      "/images/img6.jpg",
      "/images/img2.jpg",
      "/images/img1.jpg",
    ]

  },
  {
    category: "nosotros",
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img7.jpg",
    minHeight: "400px",
    height: "40vh",
    secondaryImgs: [
      "/images/img7.jpg",
      "/images/img2.jpg",
      "/images/img1.jpg",
    ]

  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    minHeight: "300px",
    height: "30vh",
    mobileHeight: "420px",
    mobileMinHeight: "auto",
    img: "/images/img10.jpg",
    clickeable: false,
    // title: "LARGE BUT SHORTER",
    category: "campañas",
    showOnlyOnFilter: true,
  },
  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    img: "/images/img9.jpg",
    titleColor: "white",
    textAlign: "end",
    minHeight: "500px",
    height: "50vw",
    clickeable: false,
    showOnlyOnFilter: true,
    category: "identidad",
    extraClass: "proyects"
  },

]

export default function HomePage() {

  const [modalInfo, setModalInfo] = React.useState<ItemType>();

  const [activeFilter, setActiveFilter] = React.useState();

  const BuildSectionComponent = (item: ItemType, index: Number, setModalInfo: Function) => {

    switch (item.type) {
      case "large":
        // IT's THE SAME
        // return <SectionLarge  height={height} type={type} img={img} text={text} key={`SectionLarge-${index}`} />
        return <SectionLarge {...item} setModalInfo={setModalInfo} key={`SectionLarge-${index}`} />
      case "small":
        return <SectionSmall {...item} setModalInfo={setModalInfo} key={`SectionSmall-${index}`} />
      case "banner":
        return <SectionBanner {...item} setModalInfo={setModalInfo} key={`SectionBanner-${index}`} />
      case "key-link":
        return <SectionKeyLink {...item} setModalInfo={setModalInfo} key={`SectionKeyLink-${index}`} />
      default:
        return <></>
    }
  }
  const checkFilter = (item: ItemType) => {
    if (activeFilter) {
      return (item.category === activeFilter)
    } else {
      return (item.showOnlyOnFilter != true)
    }
  }

  React.useEffect(() => {
    const ele = document.querySelector('html')
    if(ele) {
      if(modalInfo) ele.style.overflow = 'hidden'
      else ele.style.overflow = 'auto'
    }
  },[modalInfo])
  return (
    <>
      <Head>
        <title>Javo Web App</title>
        <meta name="description" content="Generated by Javo Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`stretch`}>
        <Home />
        <Video />
        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <div className='container-fluid'>
          <div className='row'>
            {config.filter(checkFilter).map((item, index) => (BuildSectionComponent(item, index, setModalInfo)))}
          </div>
        </div>


        {modalInfo && (<Modal modalInfo={modalInfo} setModalInfo={setModalInfo} />)}
        <Footer />
      </main>
    </>
  )
}
export const Home = () => {
  return (
    <div className='Home stretch'>
      <div className='container'>
        <div className='row justify-content-between align-items-center'>
          <div className='w-fit-content d-flex'>
            <h1 className='f-150 f-helvetica f-heavy mb-0'>
              <span className='ls-n-7'>ai</span>
              <span className="ls-n-2">re</span>
            </h1>
          </div>
          <div className='w-fit-content d-flex flex-column'>
            <p className='f-40 f-helvetica f-heavy lh-30 ls-n-2 mb-0 c-black'><b>diseño</b></p>
            <p className='f-40 f-helvetica f-heavy lh-30 ls-n-2 mb-0 c-black'><b>audiovisual</b></p>
            <p className='f-40 f-helvetica f-heavy lh-30 ls-n-2 mb-0 c-black'><b>comunicacion</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}



export const SectionLarge = (props: ItemType & { setModalInfo: Function }) => {
  const {
    text,
    type,
    img,
    height,
    clickeable,
    title,
    titleColor,
    textAlign,
    description,
    descriptionColor,
    minHeight,
    mobileHeight,
    mobileMinHeight,
    setModalInfo,
    fontSize,
    extraClass,
    video
  } = props;

  const style = {
    backgroundImage: `url(${img})`,
    height: height ? height : "50vw",
    minHeight: minHeight ? minHeight : "auto",
    display: "flex",

  }

  const styleMobile = {
    backgroundImage: `url(${img})`,
    height: mobileHeight ? mobileHeight : height ? height : "50vw",
    minHeight: mobileMinHeight ? mobileMinHeight : minHeight ? minHeight : "50vw",
    display: "flex"
  }

  const titleStyle = {
    color: titleColor ? titleColor : "black",
    fontSize: fontSize
  }

  const descriptionStyle = {
    color: descriptionColor ? descriptionColor : "black"
  }

  const textStyle = {
    justifyContent: textAlign ? textAlign : "start",
    display: "flex",
    flexDirection: "column" as "column",
    textShadow: "0px 0px 7px black",

  }
  if (video) {
    return (
      <div className={`Section SectionLarge col-12 p-0 ${extraClass}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
        <Shown partiallyVisible={true} >
          <video src="/videos/banner.mp4" autoPlay={true} loop={true} muted={true} className='bannerVideo' id="myVideo">
          </video>
          {title || description ? (
            <div className='SectionText'>
              <div className='SectionTextHolder' style={textStyle}>
                {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
                {description && <p className='f-50 lh-48 description' style={descriptionStyle}><b>{description}</b></p>}
              </div>
            </div>
          ) : <></>}
        </Shown>
      </div>
    )
  } else {
    return (
      <div className={`Section SectionLarge col-12 p-0 ${extraClass}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
        <Shown partiallyVisible={true} >
          <div className='SectionImage d-none d-md-flex' style={style} />
          <div className='SectionImage d-flex d-md-none' style={styleMobile} />
          {title || description ? (
            <div className='SectionText'>
              <div className='SectionTextHolder' style={textStyle}>
                {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
                {description && <p className='f-50 lh-48 description' style={descriptionStyle}><b>{description}</b></p>}
              </div>
            </div>
          ) : <></>}
        </Shown>
      </div>
    )
  }
}

export const SectionSmall = (props: ItemType & { setModalInfo: Function }) => {
  const {
    text,
    type,
    img,
    height,
    clickeable,
    title,
    titleColor,
    textAlign,
    description,
    descriptionColor,
    minHeight,
    mobileHeight,
    mobileMinHeight,
    setModalInfo,

  } = props;

  const style = {
    backgroundImage: `url(${img})`,
    height: height ? height : "50vw",
    minHeight: minHeight ? minHeight : "auto",
    display: "flex"
  }

  const styleMobile = {
    backgroundImage: `url(${img})`,
    height: mobileHeight ? mobileHeight : height ? height : "50vw",
    minHeight: mobileMinHeight ? mobileMinHeight : minHeight ? minHeight : "50vw",
    display: "flex"
  }


  const titleStyle = {
    color: titleColor ? titleColor : "black"
  }

  const descriptionStyle = {
    color: descriptionColor ? descriptionColor : "black"
  }

  const textStyle = {
    justifyContent: textAlign ? textAlign : "start",
    display: "flex",
    flexDirection: "column" as "column",
    textShadow: "0px 0px 7px black",
  }

  return (
    <div className={`Section SectionSmall col-12 col-md-6 p-0 ${clickeable ? "clickeable" : ""}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
      <Shown partiallyVisible={true} >
        <div className='SectionImage d-none d-md-flex' style={style} />
        <div className='SectionImage d-flex d-md-none' style={styleMobile} />
        {title || description ? (
          <div className='SectionText'>
            <div className='SectionTextHolder' style={textStyle}>
              {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
              {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
            </div>
          </div>
        ) : <></>}
      </Shown>
    </div>
  )
}

export const SectionBanner = (props: ItemType & { setModalInfo: Function }) => {
  const {
    text,
    type,
    img,
    height,
    title,
    clickeable,
    titleColor,
    textAlign,
    description,
    descriptionColor,
    minHeight,
    mobileHeight,
    mobileMinHeight,
    setModalInfo
  } = props;

  const style = {
    backgroundImage: `url(${img})`,
    height: height ? height : "50vh"
  }

  const titleStyle = {
    color: titleColor ? titleColor : "white"
  }

  const descriptionStyle = {
    color: descriptionColor ? descriptionColor : "white"
  }

  const textStyle = {
    justifyContent: textAlign ? textAlign : "start",
    display: "flex",
    flexDirection: "column" as "column",
    textShadow: "0px 0px 7px black",
  }

  return (
    <div className='Section SectionBanner col-12' style={style} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
      <Shown partiallyVisible={true} >
        {title || description ? (
          <div className='SectionText'>
            <div className='SectionTextHolder' style={textStyle}>
              {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
              {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
            </div>
          </div>
        ) : <></>}
      </Shown>
    </div>
  )
}

export const SectionKeyLink = ({
  type, href, setModalInfo
}: ItemType & { setModalInfo: Function }) => {
  return (
    <div className='SectionKeyLink' id={href} />
  )
}

export const Footer = () => {
  const content = [
    {
      title: "campañas",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    },
    {
      title: "ciudades",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    }, {
      title: "espacios",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    }, {
      title: "consultorias",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    },
  ]
  const biographies = [
    {
      name: "Javier Cerruti",
      src: "/images/img1.jpg",
    },
    {
      name: "Gustavo Wald",
      src: "/images/img12.jpeg",
    }
  ]
  return (
    <div className='footer col-12 p-0'>
      <div className="footerTextHolder">
        <div className="footerTitle">
          buscamos
        </div>
        <div className="footerText">
          <p>
            resolver cada nueva situación
          </p>
          <p>
            con potencia, buen diseño
          </p>
          <p>
            y eficacia.
          </p>
        </div>
      </div>
      <div className="blockContainer">
        {content.map((c, i) => {
          return (
            <div key={i} className='block'>
              <div className="blockTitle">
                <p>{c.title}</p>
              </div>
              <div className="blockText">
                <p>{c.text}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="biographies">
        {biographies.map((b, i) => {
          return (
            <div key={i} className="biographie">
              <div className="image" style={{ backgroundImage: `url(${b.src})` }}>
              </div>
              <div className="name">
                <p>{b.name}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="finalContent">
        <div className="sectionLeft">
          <div className="brand">
            <p>aire</p>

          </div>
          <div className="texts">

            <div className='phrase w-fit-content mb-0 phrase d-flex flex-column'>
              <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 mb-0 c-gray'><b>diseño</b></p>
              <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 mb-0 c-gray'><b>audiovisual</b></p>
              <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 mb-0 c-gray'><b>comunicacion</b></p>
            </div>
            <div className='city' >
              <p>
                Buenos Aires
              </p>
            </div>
          </div>
        </div>
        <div className="sectionRight">
          <div className="mail">
            <p>
              xxxxxxxxx@gamil.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export const Modal = ({ setModalInfo, modalInfo }: { setModalInfo: Function, modalInfo: ItemType }) => {
  const [active, setActive] = React.useState<Boolean>(false)
  const checkItems = modalInfo.secondaryImgs ? "Graphic" : "Video"
  const [selection, setSelection] = React.useState<"Video" | "Graphic">(checkItems)

  return (
    <div className='Modal-Wrapper'>
      <div className="modalBody">
        <div className="closer">
          <div className="imgBg" onClick={() => { setModalInfo(undefined) }}>
            <img src="/icons/cruz.png" alt="" />
          </div>
          {modalInfo.secondaryVideos && (
            <div className={`imgBg tabSelector ${selection == "Video" ? "active" : ""}`} onClick={() => setSelection("Video")}>
              <p className='mb-0 px-2 py-1 f-24 lh-32'>AudioVisual</p>
            </div>
          )}
          {modalInfo.secondaryImgs && (
            <div className={`imgBg tabSelector ${selection == "Graphic" ? "active" : ""}`} onClick={() => setSelection("Graphic")}>
              <p className='mb-0 px-2 py-1 f-24 lh-32'>Grafica</p>
            </div>
          )}
        </div>
        {selection === "Graphic" && modalInfo.secondaryImgs && (
          <div className='Graphic'>
            <div className="modalImages">
              {modalInfo.secondaryImgs.map((src, index) => {
                return (
                  <img src={src} key={index} alt="" />
                )
              })}
            </div>
            <div className={`${active ? "d-none" : "modalButton"}`} onClick={() => { setActive(true) }}>
              <img src="/icons/chevronup.png" />
            </div>
            <div className={`${active ? "modaltextContainer" : "d-none"}`}>
              <img src="/icons/cruz.png" onClick={() => { setActive(false) }} alt="" />
              <div className="modalTitle">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
              </div>
            </div>
          </div>
        )}
        {selection === "Video" && modalInfo.secondaryVideos && (
          <div className='Video'>
            <div className="modalImages">
              {modalInfo.secondaryVideos.map((src, index) => {
                return (
                  <video key={index} className="bannerVideo" autoPlay={true} muted loop src={src} typeof="video/mp4"></video>
                )
              })}
            </div>
            {modalInfo.secondaryVideos.length > 2 && (
              <div className={`${active ? "d-none" : "modalButton"}`} onClick={() => { setActive(true) }}>
                <img src="/icons/chevronup.png" />
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )

}


{/* <div className="modalTitle">
<p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eaque.
</p>
</div>
<div className="modalText">
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Porro, necessitatibus voluptates! Atque, dolorem a similique alias
  quisquam consequatur ut dignissimos enim deserunt corrupti suscipit
  placeat eveniet reiciendis inventore natus aliquam, temporibus ratione
  dolor. Iste iusto quisquam ea consectetur similique ipsa laborum obcaecati
  commodi. Atque earum cupiditate tenetur, quibusdam rerum qui?
</p>
</div> */}


// <div className={`${active ? "d-none" : "modalButton"}`} onClick={() => { setActive(!active) }}>
// <img src="/icons/chevronup.png" alt="" />
// </div>
// <div className="modalTextContainer">

// <div className="title">
//   Lorem ipsum dolor sit amet.
// </div>

// <div className="text">
//   HOLA MUNDO
// </div>
// </div>