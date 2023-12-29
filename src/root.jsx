import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";

import './App.css';
import { PrimaryColor, SecondaryColor } from './MainStyle';

import Price from './pages/price';
import Service from './pages/service';
import About from './pages/about';
import Swiper from './component/swiper';

import '@fortawesome/fontawesome-free/css/all.css';

import { Layout, Menu, ConfigProvider, FloatButton } from "antd";
const { Header, Content, Footer } = Layout;


const Root = () => {
  const swiperContainerRef = useRef(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);
  const ulStyle = {
    display: 'flex',
    fontSize: '16px',
    // marginRight: '60px',
    // background: '#fff',
    padding: '0px',
  };

  const logoStyle = {
    fontSize: '24px',
  };

  useEffect(() => {
    const pathname = location.pathname;
    console.log(pathname);
    setActiveLink({ ...activeLink, [pathname]: 'active' });
  },[location]) 

  
  // const handleLinkClick = (linkName) => {
  //   setActiveLink(linkName);
  // };
  // useEffect(() => {
  //   const swiper = new Swiper(swiperContainerRef.current, {
  //     autoplay: {
  //       delay: 5000,
  //     },
  //     effect: 'slide',
  //     slideShadows: false,
  //     direction: 'horizontal',
  //     speed: 800,
  //     loop: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });

  //   return () => {
  //     if (swiper) {
  //       swiper.destroy(true, true);
  //     }
  //   };
  // }, []);

  return (
  <ConfigProvider
    theme={{
      components: {
        Layout: {
          headerBg: '#000',
          headerHeight: 110,
        },
        FloatButton: {
          fontSizeIcon: 24,
        }
      }
    }}
  >
    <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 99,
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="demo-logo">
            <h2><Link to="/"></Link></h2>
          </div>
          <ul style={ulStyle}>
            <li>
              <Link to={`/service`} className={`link ${location.pathname === '/service' ? 'active' : ''}`} >服務項目</Link>
            </li>
            <li>
              <Link to={`/price`} className={`link ${location.pathname === '/price' ? 'active' : ''}`} >維修價目表</Link>
            </li>
            <li>
              <Link to={`/about`} className={`link ${location.pathname === '/about' ? 'active' : ''}`} >關於金機誕</Link>
            </li>
          </ul>
        </Header>
        {location.pathname === "/price" ? 
          <Price /> 
          : location.pathname === "/service" ? 
          <Service />
          : location.pathname === "/about" ? 
          <About />
          :
          (<Content
            className="contentStyle"
            style={{
              padding: "0 30px",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 578,
                background: '#fff',
              }}
            >
              <Swiper/>
            </div>
          </Content>
          )}
        <Footer
          style={{
            textAlign: "center",
            padding: "15px"
          }}
        >
          <FloatButton.Group
            shape="circle"
            style={{
              right: 50,
              bottom: 70,
            }}
          >
            <div className="icon_fb">
              <FloatButton
                href='https://www.facebook.com/goldeggphone'
                target='_blank'
                shape="circle"
                style={{
                  right: 94,
                  width: '60px',
                  height: '60px',
                }}
                icon={<i className="fa-brands fa-square-facebook" style={{color: "#3b589f"}}></i>}
                tooltip={<span>官方臉書</span>}
              />              
            </div>
            <div className="icon_line">
              <FloatButton
                href='https://lin.ee/sXjSGka'
                target='_blank'
                shape="circle"
                style={{
                  marginTop: '10px',
                  right: 94,
                  width: '60px',
                  height: '60px',
                }}
                icon={<i className="fa-brands fa-line" style={{color: "#06c755"}}></i>}
                tooltip={<span>加Line聯繫</span>}
              />                  
            </div>
          </FloatButton.Group>
          Copyright © 2016-2023 金機誕 All rights reserved.
        </Footer>
    </Layout>
  </ConfigProvider>
  );
};
export default Root;