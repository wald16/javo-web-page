import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react';


export type ItemType = {
  type: "large" | "small" | "banner" | "key-link";
  img?: string;
  text?: string;
  href?: string;
  height?: string;
  clickeable?: boolean;
  title?: string;
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
  extraClass?: string
}

// const config: ItemType[] = [

//   {
//     type: "large",
//     img: "/images/1.png",
//     minHeight: "400px",
//     height: "40vh",
//     mobileHeight: "320px",
//     mobileMinHeight: "auto",
//     clickeable: true,
//   },
//   {
//     type: "key-link",
//     href: "campanas",
//   },
//   {
//     type: "small",
//     img: "/images/7.png",
//     minHeight: "400px",
//     height: "40vh",
//     title: "Lorem Ipsum",
//     titleColor: "white",
//     textAlign: "end",
//   },
//   {
//     type: "small",
//     img: "/images/8.png",
//     minHeight: "400px",
//     height: "40vh"

//   },
//   {
//     type: "small",
//     img: "/images/2.png",
//     minHeight: "400px",
//     height: "40vh"
//   },
//   {
//     type: "small",
//     img: "/images/3.png",
//     minHeight: "400px",
//     height: "40vh"
//   },
//   {
//     type: "key-link",
//     href: "identidad",
//   },
//   {
//     type: "banner",
//     title: "Lorem Ipsum",
//     titleColor: "white",
//     description: "Lorem Ipsum is simply dummy text.",
//     descriptionColor: "#c0c0c0",
//     textAlign: "center",
//     height: "50vh",
//   },
//   {
//     type: "large",
//     img: "/images/img004.png",
//     minHeight: "400px",
//     height: "50vh",
//     title: "Lorem Ipsum",
//     titleColor: "white",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     descriptionColor: "#c0c0c0",
//     textAlign: "end",
//   },
//   {
//     type: "key-link",
//     href: "espacios",
//   },
//   {
//     type: "small",
//     img: "/images/5.png",
//     minHeight: "400px",
//     height: "40vh"
//   },
//   {
//     type: "small",
//     img: "/images/6.png",
//     minHeight: "400px",
//     height: "40vh"
//   },
//   {
//     type: "small",
//     img: "/images/2.png",
//     minHeight: "400px",
//     height: "40vh"
//   },
//   {
//     type: "small",
//     img: "/images/3.png",
//     minHeight: "400px",
//     height: "40vh"
//   },
//   {
//     type: "key-link",
//     href: "popurri",
//   },
//   {
//     type: "large",
//     img: "/images/img006.png",
//     minHeight: "400px",
//     height: "30vw"
//   },
//   {
//     type: "key-link",
//     href: "nosotros",
//   },
//   {
//     type: "large",
//     img: "/images/img9.jpg",
//     title:"Nosotros",
//     titleColor:"white",
//     minHeight: "400px",
//     height: "50vw",
//     clickeable: true,
//   },
// ]

const config: ItemType[] = [
  {
    type: "large",
    minHeight: "600px",
    height: "50vh",
    mobileHeight: "320px",
    mobileMinHeight: "auto",
    clickeable: false,
    title: "VIDEO",
    titleColor: "white",
    video: "   "
  },
  {
    type: "key-link",
    href: "campanas",
  },
  {
    type: "small",
    clickeable: true,
    img: "/images/img3.jpg",
    minHeight: "400px",
    height: "40vh",
    title: "Campañas",
    titleColor: "white",
    textAlign: "end",
  },
  {
    type: "small",
    clickeable: true,
    img: "/images/img4.jpg",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "small",
    clickeable: true,
    img: "/images/img5.jpg",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "small",
    clickeable: true,
    img: "/images/img13.jpg",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "key-link",
    href: "identidad",
  },
  {
    type: "large",
    minHeight: "400px",
    height: "40vh",
    mobileHeight: "320px",
    mobileMinHeight: "auto",
    clickeable: false,
    title: "Hacemos comunicación visual ",
    titleColor: "white",
    descriptionColor: "#FF5500",
    description: "Diseñamos y desarrollamos proyectos efectivos que potencian relatos y fortalecen marcas",
    textAlign: "left",
  },
  {
    type: "key-link",
    href: "espacios",
  },
  {
    type: "large",
    minHeight: "500px",
    img: "/images/img8.jpg",
    height: "50vh",
    mobileHeight: "420px",
    mobileMinHeight: "auto",
    clickeable: false,
    // title: "LARGE BUT HIGHER",
    titleColor: "white"
  },
  {
    type: "small",
    clickeable: true,
    img: "/images/img14.jpg",
    minHeight: "400px",
    height: "40vh",
    title: "Lorem Ipsum",
    titleColor: "white",
    textAlign: "end",
  },
  {
    type: "small",
    clickeable: true,
    img: "/images/img11.jpg",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "small",
    clickeable: true,
    img: "/images/img6.jpg",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "small",
    clickeable: true,
    img: "/images/img7.jpg",
    minHeight: "400px",
    height: "40vh"
  },
  {
    type: "key-link",
    href: "popurri",
  },
  {
    type: "large",
    minHeight: "300px",
    height: "30vh",
    mobileHeight: "420px",
    mobileMinHeight: "auto",
    img: "/images/img10.jpg",
    clickeable: false,
    // title: "LARGE BUT SHORTER",
    titleColor: "white"
  },
  {
    type: "key-link",
    href: "nosotros",
  },
  {
    type: "large",
    img: "/images/img9.jpg",
    title: "Mas proyectos...",
    titleColor: "white",
    minHeight: "500px",
    height: "50vw",
    clickeable: false,
    extraClass: "proyects"
  },

]

export default function HomePage() {

  const [modalInfo, setModalInfo] = React.useState<ItemType>();

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
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            {config.map((item, index) => BuildSectionComponent(item, index, setModalInfo))}
          </div>
        </div>
        {modalInfo && (<Modal modalInfo={modalInfo} setModalInfo={setModalInfo} />)}
        <Footer />
      </main>
    </>
  )
}


export const Header = () => {
  const router = useRouter();

  const items = [
    {
      key: "campanas",
      name: "Campañas"
    },
    {
      key: "identidad",
      name: "Identidad"
    },
    {
      key: "espacios",
      name: "Espacios"
    },
    {
      key: "popurri",
      name: "Popurri"
    },
    {
      key: "nosotros",
      name: "Nosotros"
    },
  ]

  const [active, setActive] = React.useState(false);

  return (
    <div className={`Header ${active ? "active" : ""}`}>
      <div className="logo">
        aire
      </div>
      {!active ? (
        <div className='open-icon' onClick={() => setActive(true)}>
          <img src="/icons/menu.png" alt="" />
        </div>
      ) : (
        <div className='close-icon' onClick={() => setActive(false)}>
          <img src="/icons/cruz.png" alt="" />
        </div>
      )}
      <div className='items'>
        {items.map((item, index) => (
          <div className='item' key={item.key} onClick={() => router.push("#" + item.key)}>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
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

  return (
    <div className={`Section SectionLarge col-12 p-0 ${extraClass}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
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
    </div>
  )
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
      <div className='SectionImage d-none d-md-flex' style={style} />
      <div className='SectionImage d-flex d-md-none' style={styleMobile} />
      {title || description ? (
        <div className='SectionText'>
          <div className='SectionTextHolder' style={textStyle}>
            {title && <p className='f-50 lh-48' style={titleStyle}><b>{title}</b></p>}
            {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
          </div>
        </div>
      ) : <></>}
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
    <div className='Section SectionBanner col-12' style={style} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
      {title || description ? (
        <div className='SectionText'>
          <div className='SectionTextHolder' style={textStyle}>
            {title && <p className='f-50 lh-48' style={titleStyle}><b>{title}</b></p>}
            {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
          </div>
        </div>
      ) : <></>}
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
          Somos
        </div>
        <div className="footerText">
          <p>
            gente que busca resolver cada
          </p>
          <p>
            nueva situación con potencia,
          </p>
          <p>
            buen diseño y eficacia.
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

  if (modalInfo !== undefined) {
    return (
      <div className='Modal-Wrapper'>
        <div className="modalBody" style={{ backgroundImage: `url(${modalInfo.img})` }}>
          <div className="closer" onClick={() => { setModalInfo(undefined) }}>
            <img src="/icons/cruz.png" alt="" />
          </div>
          <div className="modalTextContainer">
            <div className="modalTitle">
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}