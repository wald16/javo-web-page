import { Shown } from '@/components/Shown';
import Head from 'next/head'
import React, { useState } from 'react';
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
  description2?: string;
  description2Color?: string;
  minHeight?: string;
  mobileHeight?: string;
  mobileMinHeight?: string;
  fontSize?: number,
  video?: string,
  bkg?: string,
  extraClass?: string,
  secondaryMedia?: { src: string, position: string, type: string }[],
  secondaryVideos?: string[],
  details: string,


}

const text =
  <>
    hacemos
    <br />
    comunicación
    <br />
    visual
  </>

const description =
  <>
    Diseñamos y desarrollamos <br />
    proyectos efectivos <br />
    que potencian relatos<br />
    y fortalecen marcas.

  </>

const description2 =
  <>
    Diseñamos y desarrollamos <br />
    proyectos efectivos <br />
    que potencian relatos<br />
    y fortalecen marcas.

  </>
const _text = text as unknown
const _description = description as unknown
const _description2 = description2 as unknown
const config: ItemType[] = [

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "",
    titleColor: "#606060",
    textAlign: "end",
    minHeight: "500px",
    height: "30vh",
    mobileHeight: "35vh",
    // mobileMinHeight: "auto",
    img: "/images/JOB_Presidencia/Presidencia_1200_job_web_HOME_desktop.jpg",
    clickeable: true,
    // title: "LARGE BUT SHORTER",
    category: "identidad",
    showOnlyOnFilter: false,
    secondaryMedia: [
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_01.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_02.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_03.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_04.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_05.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_06.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_07.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_08.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_09.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_10.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_11.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_12.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_13.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_14.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_15.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_16.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_17.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_18.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_19.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_20.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_21.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_22.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_23.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_24.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_25.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_26.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_27.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_28.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_29.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_30.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_31.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_32.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_33.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_34.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_35.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_36.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_37.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_38.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_39.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_40.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_41.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_42.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_43.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_44.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_45.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_46.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_47.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_48.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_49.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_50.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_51.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_52.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_53.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_54.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Presidencia/Presidencia_1200_job_web_55.jpg", position: "top", type: "img" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    //title: "Imparable",
    titleColor: "#606060",
    textAlign: "end",
    clickeable: true,
    img: "/images/JOB_Imparable/job_Imparable_HOME_desktop.jpg",
    minHeight: "360px",
    height: "40vh",
    category: "poupurri",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/img4b.jpg", position: "center", type: "img" },
      { src: "/images/img2.jpg", position: "top", type: "img" },
      { src: "/images/img4b.jpg", position: "top", type: "img" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img11.jpg",
    minHeight: "360px",
    category: "identidad",
    height: "40vh",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/JOB_Clacso_2018/1_Clacso_2018_IMG_8315_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/2_Clacso_2018_IMG_8372_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/3_Clacso_2018_IMG_8318_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/4_Clacso_2018_IMG_8386_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/5_Clacso_2018_IMG_8382_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/6_Clacso_2018_IMG_8379_Flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/7_Clacso_2018_IMG_8383_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/8_Clacso_2018_IMG_8409_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/9_Clacso_2018_edificios_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/10_Clacso_2018_117_Clacso2018_Relevamiento_20181119_JAD9307_800_job_we.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/11_Clacso_2018_100_Clacso2018_Relevamiento_20181119_JAD9277_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/12_Clacso_2018_112_Clacso2018_Relevamiento_20181119_JAD9297_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/13_Clacso_2018_IMG_8374_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/14_Clacso_2018_117_Clacso2018_Carteleria_20181119_MG_7073_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/15_Clacso_2018_IMG_8442_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/16_Clacso_2018_IMG_8378_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/17_Clacso_2018_clacso2018_poster_ext_foto_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/18_Clacso_2018_IMG_8267_flatt_1400_retocada_sin_texto_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/19_Clacso_2018_IMG_8300_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/20_Clacso_2018_IMG_8538_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/21_Clacso_2018_IMG_8758_flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/22_Clacso_2018_3_almohadones_Negro_arriba_y_abajo_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Clacso_2018/23_Clacso_2018_IMG_8764_flatt_800_job_web.jpg", position: "top", type: "img" }

    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "Soberanía",
    clickeable: true,
    img: "/images/img14.jpg",
    category: "espacios",
    minHeight: "360px",
    mobileHeight: "35vh",
    height: "40vh",
    titleColor: "white",
    textAlign: "end",
    secondaryMedia: [
      { src: "/images/JOB_Soberania/1_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/2_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/3_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/4_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/5_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/6_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/7_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/8_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/9_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/10_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/11_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/12_Soberania_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Soberania/13_Soberania_1200_job_web.jpg", position: "top", type: "img" },
    ]
  },
  /*
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "Soberanía",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img13.jpg",
    minHeight: "360px",
    height: "40vh",
    mobileHeight: "35vh",
    category: "identidad",
    secondaryMedia: [
      { src: "/images/img13.jpg", position: "top", type: "img" },
      { src: "/images/img12.jpg", position: "top", type: "img" },
      { src: "/images/img13.jpg", position: "top", type: "img" },
    ],
    secondaryVideos: [
      "/videos/it_joven_02.mp4",
    ]
  },
*/
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "Argentina te busca",
    //description: "señalética",
    //descriptionColor: "#A09F97",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/JOB_Argentina_Te_Busca/Argentina_Te_Busca_Home.jpg",
    minHeight: "360px",
    height: "40vh",
    mobileHeight: "35vh",
    category: "campañas",
    secondaryMedia: [
      { src: "/videos/JOB_Argentina_Te_Busca/2022_03_14_Argentina_te_busca_16_9.mp4", position: "top", type: "video" },
    ]
  },
  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    minHeight: "500px",
    height: "500px",
    mobileHeight: "340px",
    mobileMinHeight: "720",
    fontSize: 70,
    // clickeable: true,
    title: _text as string,
    titleColor: "white",
    descriptionColor: "#FF5500",

    description: _description as string,
    description2: _description2 as string,
    textAlign: "left",
    extraClass: "textModule",

  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "",
    titleColor: "white",
    textAlign: "end",
    minHeight: "680px",
    img: "/images/img8.jpg",
    height: "80vh",
    mobileHeight: "45vh",
    mobileMinHeight: "auto",
    category: "poupurri",
    clickeable: true,
    secondaryMedia: [
      { src: "/videos/JOB_IT_JOVEN/2023_04_10_IT_Joven_Injuve_30seg_16_9.mp4", position: "top", type: "video" },
      //{ src: "/videos/JOB_IT_JOVEN/2023_04_10_IT_Joven_Injuve_30seg_9_16.mp4", position: "top", type:"video" },
      { src: "/images/JOB_IT_JOVEN/1_IT_JOVEN_ID_sobre_degadee_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/2_IT_JOVEN_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/3_IT_JOVEN_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/4_IT_JOVEN_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/5_IT_JOVEN_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/6_IT_JOVEN_Chupete_vertical_PPL_TI_JOVEN_Flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/7_IT_JOVEN_SEXT_sextuple_estacion_de_subte_con_bici_IT_JOVEN_Flatt_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/8_IT_JOVEN_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/9_IT_JOVEN_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/10_IT_JOVEN_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/11_IT_JOVEN_grafismo_degadee_calido_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/12_IT_JOVEN_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_IT_JOVEN/13_IT_JOVEN_800_job_web.jpg", position: "top", type: "img" },
    ],
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "Segunda Dosis",
    description: "campaña",
    descriptionColor: "#A09F97",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/JOB_Segunda_Dosis/Segunda_Dosis_Home.jpg",
    minHeight: "360px",
    height: "40vh",
    mobileHeight: "35vh",
    category: "campaña",
    secondaryMedia: [
      { src: "/videos/JOB_Segunda_Dosis/2021_12_22_Animacion_Segunda_Dosis_16_9_v3.mp4", position: "top", type: "video" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    clickeable: true,
    img: "/images/JOB_TINA/Tina_Home.jpg",
    minHeight: "360px",
    height: "40vh",
    title: "",
    //description: "Señalética",
    //descriptionColor: "white",
    titleColor: "#606060",
    textAlign: "end",
    mobileHeight: "35vh",
    category: "campañas",
    secondaryMedia: [
      { src: "/videos/JOB_TINA/2022_09_27_Tina_16_9.mp4", position: "top", type: "video" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "Diagnóstico Maipú",
    titleColor: "black",
    textAlign: "end",
    clickeable: true,
    img: "/images/img6.jpg",
    minHeight: "360px",
    category: "poupurri",
    height: "40vh",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/img6.jpg", position: "top", type: "img" },
      { src: "/images/img2.jpg", position: "top", type: "img" },
      { src: "/images/img6.jpg", position: "top", type: "img" },
    ]

  },
  {
    category: "espacios",
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "",
    titleColor: "black",
    textAlign: "end",
    clickeable: true,
    img: "/images/img7.jpg",
    minHeight: "360px",
    height: "40vh",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/JOB_MICA_2013/1_MICA_2013_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/2_MICA_2013_DSCN2769_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/3_MICA_2013_DSCN2803_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/4_MICA_2013_DSCN2815_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/5_MICA_2013_DSCN2773_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/6_MICA_2013_DSCN2777_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/7_MICA_2013_DSCN2919_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/8_MICA_2013_DSCN3005_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/9_MICA_2013_DSCN2991_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/10_MICA_2013_DSCN2953_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/11_MICA_2013_DSCN2945_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/12_MICA_2013_DSCN2943_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/13_MICA_2013_DSCN3053_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/14_MICA_2013_DSCN3049_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/15_MICA_2013_DSCN3085_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_MICA_2013/16_MICA_2013_DSCN3087_800_job_web.jpg", position: "top", type: "img" },
    ]

  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "black",
    textAlign: "end",
    minHeight: "360px",
    height: "30vh",
    mobileHeight: "35vh",
    // mobileMinHeight: "auto",
    img: "/images/img10.jpg",
    clickeable: true,
    // title: "LARGE BUT SHORTER",
    category: "campañas",
    showOnlyOnFilter: false,
    secondaryMedia: [
      { src: "/images/img7.jpg", position: "top", type: "img" },
      { src: "/images/img2.jpg", position: "top", type: "img" },
      { src: "/images/img7.jpg", position: "top", type: "img" },
    ]
  },
  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    img: "/images/img9.jpg",
    titleColor: "white",
    textAlign: "left",
    minHeight: "680px",
    height: "30vw",
    clickeable: true,
    showOnlyOnFilter: false,
    category: "identidad",
    extraClass: "proyects",
    mobileHeight: "60vh",
    secondaryMedia: [
      { src: "/images/img7.jpg", position: "top", type: "img" },
      { src: "/images/img2.jpg", position: "top", type: "img" },
      { src: "/images/img7.jpg", position: "top", type: "img" },
    ]
  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    img: "/images/JOB_gobBsAs_ciudad_impacto/gobBsAs_1600_job_web_HOME.jpg",
    titleColor: "white",
    textAlign: "left",
    minHeight: "360px",
    height: "30vw",
    clickeable: true,
    showOnlyOnFilter: true,
    category: "ciudades",
    extraClass: "proyects",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/JOB_gobBsAs_ciudad_impacto/1_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/2_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/3_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/4_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/5_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/6_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/7_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/8_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/9_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/10_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/11_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/12_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/13_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/14_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/15_gobBsAs_850_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/16_gobBsAs_850_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/17_gobBsAs_850_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/18_gobBsAs_850_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/19_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/20_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/21_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/22_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/23_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/24_gobBsAs_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/25_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/26_gobBsAs_850_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/27_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/28_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/29_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/30_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/31_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/32_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/33_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/34_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/35_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/36_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/37_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
    ]
  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    img: "/images/JOB_gobBsAs_ciudad_impacto/gobBsAs_1600_job_web_HOME.jpg",
    titleColor: "white",
    textAlign: "left",
    minHeight: "360px",
    height: "30vw",
    clickeable: true,
    showOnlyOnFilter: true,
    category: "impacto",
    extraClass: "proyects",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/JOB_gobBsAs_ciudad_impacto/1_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/2_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/3_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/4_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/5_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/6_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/7_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/8_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/9_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/10_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/11_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/12_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/13_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/14_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/15_gobBsAs_850_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/16_gobBsAs_850_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/17_gobBsAs_850_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/18_gobBsAs_850_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/19_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/20_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/21_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/22_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/23_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/24_gobBsAs_800_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/25_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/26_gobBsAs_850_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/27_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/28_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/29_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/30_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/31_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/32_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/33_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/34_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/35_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/36_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_gobBsAs_ciudad_impacto/37_gobBsAs_1200_job_web.jpg", position: "top", type: "img" },
    ]
  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    img: "/images/JOB_Mercedes_ciudad/Mercedes_1600_job_web_HOME_alargada_C.jpg",
    titleColor: "white",
    textAlign: "left",
    minHeight: "360px",
    height: "30vw",
    clickeable: true,
    showOnlyOnFilter: true,
    category: "ciudades",
    extraClass: "proyects",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/JOB_Mercedes_ciudad/1_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/2_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/3_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/4_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/5_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/6_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/7_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/8_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/9_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/10_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/11_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/12_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/13_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
      { src: "/images/JOB_Mercedes_ciudad/14_Mercedes_1200_job_web.jpg", position: "top", type: "img" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    clickeable: true,
    img: "/images/JOB_Dia_del_Lector/Dia_Del_Lector_Home.jpg",
    minHeight: "360px",
    height: "40vh",
    title: "Tina",
    //description: "Señalética",
    //descriptionColor: "white",
    titleColor: "#606060",
    textAlign: "end",
    mobileHeight: "35vh",
    showOnlyOnFilter: true,
    category: "poupurri",
    secondaryMedia: [
      { src: "/videos/JOB_Dia_del_Lector/2022_08_23_Borges_web.mp4", position: "top", type: "video" },
    ]
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
    if (ele) {
      if (modalInfo) ele.style.overflow = 'hidden'
      else ele.style.overflow = 'auto'
    }
  }, [modalInfo])
  return (
    <>
      <Head>
        <title>brava</title>
        <meta name="description" content="Generated by Javo Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`stretch`}>
        <Home />
        <Video />
        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <div className="container">
          <div className='container-fluid'>
            <div className='row'>
              {config.filter(checkFilter).map((item, index) => (BuildSectionComponent(item, index, setModalInfo)))}
            </div>
          </div>
        </div>

        {modalInfo && (<Modal modalInfo={modalInfo} setModalInfo={setModalInfo} />)}
        <div className="container">

          <Footer />
        </div>
      </main>
    </>
  )
}
export const Home = () => {
  return (
    <div className="container">
      <div className='Home stretch' id='top'>

        <div className='row justify-content-between align-items-center bannerContent'>
          <div className='w-fit-content d-flex'>
            <h1 className='f-100 f-helvetica f-heavy mb-0'>
              <span className='ls-n-1'>brava</span>
            </h1>
          </div>
          <div className='w-fit-content d-flex flex-column bannerPhrase'>
            <p className='f-30 f-helvetica f-regular lh-30 ls-n-2 mb-0 '><b>comunicación</b></p>
            <p className='f-30 f-helvetica f-regular lh-30 ls-n-2 mb-0 '><b>visual</b></p>
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
    description2,
    description2Color,
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
    //height: height ? height : "50vw",
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

  const description2Style = {
    color: descriptionColor ? descriptionColor : "black"
  }


  const textStyle = {
    justifyContent: textAlign ? textAlign : "start",
    display: "flex",
    flexDirection: "column" as "column",
    // textShadow: "0px 0px 7px black",

  }
  if (video) {
    return (
      <div className={`Section SectionLarge col-12 p-0 ${extraClass}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
        <Shown partiallyVisible={true} >
          {/* <video src="/videos/banner.mp4" autoPlay={true} loop={true} muted={true} className='bannerVideo' id="myVideo"> */}
          {/* </video> */}
          {title || description2 ? (
            <div className='SectionText'>
              <div className='SectionTextHolder' style={textStyle}>
                {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
                {description2 && <p className='f-50 lh-48 description2' style={description2Style}><b>{description2}</b></p>}
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
          <div className='SectionImage mobileImage d-flex d-md-none' style={styleMobile} />
          {title || description2 ? (
            <div className='SectionText'>
              <div className='SectionTextHolder' style={textStyle}>
                {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
                {description2 && <p className='f-50 lh-48 description2' style={description2Style}><b>{description2}</b></p>}
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
    // textShadow: "0px 0px 7px black",
  }

  return (
    <div className={`Section SectionSmall col-12 col-md-6 p-0 ${clickeable ? "clickeable" : ""}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
      <Shown partiallyVisible={true} >
        <div className='SectionImage d-none d-md-flex' style={style} />
        <div className='SectionImage mobileImage d-flex d-md-none' style={styleMobile} />
        {title || description ? (
          <div className='SectionText'>
            <div className='SectionTextHolder' style={textStyle}>
              {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
              {description && <p className='f-20 lh-48 description' style={descriptionStyle}><b>{description}</b></p>}
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
    // textShadow: "0px 0px 7px black",
  }

  return (
    <div className='Section SectionBanner' style={style} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
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
      src: "/images/fotojavi.jpg",
      key: "Javier",

      text: "Productor y realizador audiovisual. Integré y dirigí equipos de producción tanto a nivel público como privado adoptando como eje profesional la importancia de entender el lenguaje audiovisual como parte central de la estrategia comunicacional. Realicé numerosas campañas comerciales y dirigí la producción audiovisual de contenidos de comunicación del Gobierno Nacional entre 2019 y 2023.",
    },

    {
      name: "Gustavo Wald",
      src: "/images/img12.jpeg",
      key: "Gustavo",
      text: "Diseñador gráfico. Entiendo la emisión gráfica como el acto de comunicación visual en el cual el gesto gráfico condensa y corporiza aquello que se busca (o es bueno) decir. Mi trayectoria profesional resultó en especializarme en la mirada estratégica que fortalece el acto de comunicación. Estuve a cargo del diseño de la comunicación visual de la Ciudad de Buenos Aires y, recientemente, del Gobierno Nacional.",

    }
  ]
  const [activeBio, setActiveBio] = useState<string>("")
  const [bioText, setBioText] = useState<string>("")
  const [bioName, setBioName] = useState<string>("")
  const handleHover = (bio: string, text: string, name: string) => {
    setActiveBio(bio)
    setBioText(text)
    setBioName(name)
  }
  return (
    <div id='nosotros' className="footerContainer">
      <div className="titleWrapper">
        <div className="titleContent">
          <p className='title'>
            somos
          </p>
        </div>
        <div className="subtitleContent">
          <p className='subTitle'>
            un equipo que busca resolver<br />cada nueva situación con&nbsp;potencia,<br />buen diseño y eficacia.
          </p>
        </div>
      </div>

      <div className="textsContainer">

        <div className="textContent">
          <div className="textTitle">campañas</div>
          <div className="text">Implementamos la solución visual de campañas comerciales, públicas<br />y políticas en la dimensión<br />y escala adecuadas para cada circunstancia.</div>
        </div>
        <div className="textContent">
          <div className="textTitle">ciudades</div>
          <div className="text">Abordamos la comunicación visual que la gestión de ciudades requiere con el adecuado cruce entre las demandas de la gestión<br />y las prioridades de la comunidad.</div>
        </div> <div className="textContent">
          <div className="textTitle">espacios</div>
          <div className="text">Diseñamos espacios expositivos de alto impacto, combinando poder con sutileza. Experiencias sensoriales, bellas y efectivas que perfeccionan relatos<br />y fortalecen marcas.</div>
        </div> <div className="textContent">
          <div className="textTitle">consultoría</div>
          <div className="text">Sabemos orientar, diseñar<br />y optimizar equipos de diseño y producción audiovisual<br />de organizaciones en la búsqueda de maximizar<br />sus potencialidades.</div>
        </div>

      </div>

      <div className="biographies">
        {biographies.map((b, i) => {
          return (
            <>
              <div className="biographie desktop" key={b.key} onMouseEnter={() => handleHover(b.key, b.text, b.key)} onMouseLeave={() => handleHover("", "", "")} >
                <div className={b.key === activeBio || activeBio === "" ? "biographieImg active" : "biographieImg inactive"} style={{ backgroundImage: `url(${b.src})` }} ></div>
                <div className={b.key === activeBio ? "biographieName active" : "biographieName"}><p> {b.name} </p>  </div>
              </div>


              <div className="biographie mobile" key={b.key} onMouseEnter={() => handleHover(b.key, b.text, b.key)} onMouseLeave={() => handleHover("", "", "")} >
                <div>
                  <div className={"biographieImg active"} style={{ backgroundImage: `url(${b.src})` }} ></div>
                  <div className={"biographieName"}><p> {b.name} </p>  </div>
                </div>

              </div>
              <div className={"mobileBiographieText mobile"}>
                <p className='text'>
                  {b.text}
                </p>
              </div>



            </>
          )
        })}
        <div id='biographieText' className={activeBio !== "" ? "biographieText desktop d-md-flex" : "desktop d-none"}>
          <p className='text'>
            {bioText}
          </p>
        </div>
      </div>


      <div className="finalContent d-flex">
        <div className="left">
          <div
            className="brand"
            onClick={() => {
              const element = document.getElementById('top');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            brava
          </div>

          {/*          <div className="phrase">
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>comunicación</b></p>
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>visual</b></p>
          </div>
          */}
        </div>
        <div className="right d-flex col-6">
          <div className="contact">
            agenciabrava@gmail.com  &nbsp;  +54&nbsp;9&nbsp;11 0000&nbsp;0000
          </div>

          <div className="city lh-25">
            Buenos Aires
          </div>
        </div>
      </div>
      {/* <div className="mobileFinalContent  d-flex d-md-none ">
        <div className="up">
          <div className="brand">
            aire
          </div>
          <div className="phrase">
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>diseño</b></p>
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>audiovisual</b></p>
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>comunicación</b></p>
          </div>
        </div>
        <div className="down">
          <div className="city">
            <p>
              Buenos Aires
            </p>
          </div>
          <div className="contact">
            xxxxxxxxx@gmail.com
          </div>
        </div>
      </div> */}
    </div>
  )
}

export const Modal = ({ setModalInfo, modalInfo }: { setModalInfo: Function, modalInfo: ItemType }) => {
  const [active, setActive] = React.useState<Boolean>(false)
  const checkItems = modalInfo.secondaryMedia ? "Graphic" : "Video"
  const [selection, setSelection] = React.useState<"Video" | "Graphic">(checkItems)
  const lastImageChecker = (_index: number) => {
    _index = _index + 1
    const length = modalInfo.secondaryMedia?.length
    if (_index === length) {
      return true
    } else return false
  }

  if (modalInfo.secondaryMedia && modalInfo.secondaryVideos) {
    return (
      <div className='Modal-Wrapper'>
        <div className="modalBody">

          <div className="modalHeader">

            <div className='closer'>
              <div className="imgBg" onClick={() => { setModalInfo(undefined) }}>
                <img src="/icons/cruz.png" alt="" />
              </div>
            </div>
            <div className={`tabs`} >

              {modalInfo.secondaryVideos && (
                <div className={`imgBg tabSelector ${selection == "Video" ? "active" : ""}`} onClick={() => setSelection("Video")}>
                  <p className='mb-0 px-2  lh-32'>audiovisual</p>
                </div>
              )}
              {modalInfo.secondaryMedia && (
                <div className={`imgBg tabSelector ${selection == "Graphic" ? "active" : ""}`} onClick={() => setSelection("Graphic")}>
                  <p className='mb-0 px-2  lh-32'>gráfica</p>
                </div>
              )}
            </div>
          </div>
          <div className="modalContent">

            {selection === "Graphic" && modalInfo.secondaryMedia && (
              <div className='Graphic Video'>
                <div className="modalImages">
                  {modalInfo.secondaryMedia.map((image: { src: string, position: string, type: string }, index: number) => {
                    if (image.type == "img") {
                      return (
                        <img src={image.src} key={index} style={{ objectPosition: image.position }} className={lastImageChecker(index) ? "lastImg" : ""} alt="" />
                      )
                    } else {
                      return (
                        <video key={index} className="bannerVideo" controls autoPlay={false} src={image.src} typeof="video/mp4"></video>
                      )
                    }
                  })}
                </div>
              </div>
            )}
            {selection === "Video" && modalInfo.secondaryVideos && (
              <div className='Video'>
                <div className="modalImages">
                  {modalInfo.secondaryVideos.map((src, index) => {
                    return (
                      <video key={index} height={"100%"} className="bannerVideo" controls autoPlay={false} src={src} typeof="video/mp4"></video>
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
      </div>
    )
  } else {
    return (
      <div className='Modal-Wrapper'>
        <div className="modalBody">

          <div className="modalHeader">

            <div className='closer'>
              <div className="imgBg" onClick={() => { setModalInfo(undefined) }}>
                <img src="/icons/cruz.png" alt="" />
              </div>
            </div>
          </div>
          <div className="modalContent">

            {selection === "Graphic" && modalInfo.secondaryMedia && (
              <div className='Graphic'>
                <div className="modalImages">
                  {modalInfo.secondaryMedia.map((image: { src: string, position: string, type: string }, index: number) => {
                    if (image.type == "img") {
                      return (
                        <img src={image.src} key={index} style={{ objectPosition: image.position }} className={lastImageChecker(index) ? "lastImg" : ""} alt="" />
                      )
                    } else {
                      return (
                        <video key={index} className="bannerVideo" controls autoPlay={false} src={image.src} typeof="video/mp4"></video>
                      )
                    }
                  })}
                </div>
              </div>
            )}
            {selection === "Video" && modalInfo.secondaryVideos && (
              <div className='Video'>
                <div className="modalImages">
                  {modalInfo.secondaryVideos.map((src, index) => {
                    return (
                      <video key={index} className="bannerVideo" controls autoPlay={false} src={src} typeof="video/mp4"></video>
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
      </div>
    )
  }

}


