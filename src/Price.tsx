import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import './price.css'
import PriceSlider from './components/priceSlider/PriceSlider'
import DisplayPrice from './components/displayPrice/DisplayPrice'
import Inputprice from './components/inputprice/Inputprice'

interface Lananguage {
  id: number;
  name: string;
  img: string;
}

interface User {
  id: number;
  lan: Lananguage;
  name: string;
  location: string;
}

export interface PricePage {
  id: number;
  input: string[];
  button: string[];
  sidebar_content: string[];
  button_main: ButtonImage[];
  sidebar_content_main: sliderImage[];
  sidebar_title: string;
  lan: number; 
}
export interface ButtonImage{
  name:string,
  img:string
}
export interface sliderImage{
  text:string,
  img:string
}

export interface PriceArticle {
  id: number;
  articleno: number;
  product: string;
  inprice: number;
  price: number;
  unit: string;
  instock: number;
  description: string;
  lan: number; // Change the type if needed
  user: number; // Change the type if needed
}

export interface PriceData {
  user: User;
  price_page: PricePage;
  price_article: PriceArticle[];
}

const Price:React.FC = () => {
  const [priceData, setPriceData] = useState<PriceData | null>(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response: AxiosResponse<PriceData> = await axios.get('https://cross-backend-michealajit.vercel.app/api/price');
        setPriceData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 
  console.log(priceData?.user);
  return (
    <>
    <nav className="nav2">
        <div className='left'>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="hamburger-icon" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="profile-img" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
        <path d="M15 19l2 2l4 -4" />
      </svg>
    <span>{priceData?.user.name}
      <p className='left-p'>{priceData?.user.location}</p>
    </span>
        </div>
        <div className='right'>
        <p>{priceData?.user.lan.name}</p> 
<img  src={priceData?.user.lan.img} alt="Flag"  height={23}/>
        </div>
    </nav>
    <div className='parent-price-container'>
        <PriceSlider pricePage={priceData?.price_page}/>
        <section className='pricecontainer'>
        <Inputprice pricePage={priceData?.price_page}/>
        <DisplayPrice  priceArticle={priceData?.price_article}/>
        </section>
    </div>
    </>
  )
}

export default Price