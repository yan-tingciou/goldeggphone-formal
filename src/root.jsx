import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";

import './App.css';
import { PrimaryColor, SecondaryColor } from './MainStyle';

import Price from './pages/price';
import Service from './pages/service';
import About from './pages/about';
// import News from './pages/news';
import '@fortawesome/fontawesome-free/css/all.css';

import { Layout, ConfigProvider, FloatButton, Carousel } from "antd";
import { MenuOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;


const Root = () => {
  const location = useLocation();
  const [innerWidthChange, setInnerWidthChange] = useState(0);
  const [activeLink, setActiveLink] = useState(null);
  const ulStyle = {
    display: 'flex',
    fontSize: '16px',
    padding: '0px',
  };

  const logoStyle = {
    fontSize: '24px',
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidthChange(window.innerWidth);
    });
  },[innerWidthChange]);
  
  useEffect(() => {
    const pathname = location.pathname;
    console.log(pathname);
    setActiveLink({ ...activeLink, [pathname]: 'active' });

    window.scrollTo(0, 0);
  },[location]);

  const handleMenuOpen = () => {
    if (window.innerWidth < 690) {
      const menu = document.querySelector('.menu');
      menu.style.display = menu.style.display !== 'none' ? 'none' : 'flex';
    }
  };
  
  return (
  <ConfigProvider
    theme={{
      primaryColor: PrimaryColor,
      components: {
        Layout: {
          headerBg: '#000',
          headerHeight: 110,
        },
        FloatButton: {
          fontSizeIcon: 24,
        },
        Table:{
          rowHoverBg: SecondaryColor,
          headerBg: "#D0D0D0",
          // headerColor: "",
          headerSortHoverBg: PrimaryColor,
          headerSortActiveBg: PrimaryColor,
          bodySortBg: PrimaryColor,
        }
      }
    }}
  >
    <Layout>
        <Header className='headerStyle'>
          <div className="demo-logo">
            <h2><Link to="/"></Link></h2>
          </div>
          { window.innerWidth < 690 && <a className="menu-list" ><MenuOutlined onClick={handleMenuOpen}/></a>}
          { window.innerWidth > 690 
            ? 
            <ul className='menu'>
              <li>
                <Link to={`/about`} className={`link ${location.pathname === '/about' ? 'active' : ''}`} >關於金機誕</Link>
              </li>
              <li>
                <Link to={`/price`} className={`link ${location.pathname === '/price' ? 'active' : ''}`} >維修價目表</Link>
              </li>
              <li>
                <Link to={`/service`} className={`link ${location.pathname === '/service' ? 'active' : ''}`} >服務項目</Link>
              </li>
              {/* <li>
                <Link to={`/news`} className={`link ${location.pathname === '/news' ? 'active' : ''}`} >最新消息</Link>
              </li> */}
            </ul>
            : null
          }
        </Header>
          { window.innerWidth < 690 
            ? 
            <ul className='menu small'>
              <li>
                <Link to={`/about`} className={`link ${location.pathname === '/about' ? 'active' : ''}`} >關於金機誕</Link>
              </li>
              <li>
                <Link to={`/price`} className={`link ${location.pathname === '/price' ? 'active' : ''}`} >維修價目表</Link>
              </li>
              <li>
                <Link to={`/service`} className={`link ${location.pathname === '/service' ? 'active' : ''}`} >服務項目</Link>
              </li>
              {/* <li>
                <Link to={`/news`} className={`link ${location.pathname === '/news' ? 'active' : ''}`} >最新消息</Link>
              </li> */}
            </ul>
            : null
          }
        {location.pathname === "/price" ? 
          <Price /> 
          : location.pathname === "/service" ? 
          <Service />
          : location.pathname === "/about" ? 
          <About />
          // : location.pathname === "/news" ? 
          // <News />
          :
          (<Content>
            <div
              style={{
                minHeight: 578,
                background: '#fff',
              }}
            >
              <h1 className="seo-h1">
                金機誕手機維修-Apple 獨立維修中心
              </h1>
              <Carousel autoplay effect="fade">
                <div>
                  <img src="https://github.com/yan-tingciou/goldeggphone-formal/blob/main/src/images/bg-1.jpg?raw=true" className="bgStyle" ></img>
                </div>
                <div>
                  <img src="https://github.com/yan-tingciou/goldeggphone-formal/blob/main/src/images/bg-2.jpg?raw=true" className="bgStyle" ></img>
                </div>
              </Carousel>
            </div>
          </Content>
          )}
          <FloatButton.Group
            shape="circle"
            style={{
              right: 40,
              bottom: 50,
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
            <div className="icon_call">
              <FloatButton
                href='tel:03-319-7211'
                target='_blank'
                shape="circle"
                style={{
                  marginTop: '10px',
                  right: 94,
                  width: '60px',
                  height: '60px',
                }}
                icon={<i className="fa-solid fa-phone-volume" style={{color: PrimaryColor}}></i>}
                tooltip={<span>致電金機誕</span>}
              />                  
            </div>
          </FloatButton.Group>
        <Footer
          style={{
            textAlign: "center",
            padding: "12px",
            background: "#000",
            color: PrimaryColor,
          }}
        >
          Copyright © 2016-2024 金機誕 All rights reserved
          { (window.innerWidth < 690) ? <br /> : null }
          <span style={{ marginLeft: '20px' }}>訪客人數:</span>
          <img style={{ marginBottom: '-6px' }} src="https://counter4.optistats.ovh/private/freecounterstat.php?c=fs5muueycpssknmdu23g26ppsmxp5n3j" border="0" title="page counter" alt="page counter"/>
        </Footer>
    </Layout>
  </ConfigProvider>
  );
};
export default Root;