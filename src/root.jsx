import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";

import './App.css';
import { PrimaryColor, SecondaryColor } from './MainStyle';

import Price from './pages/price';
import Service from './pages/service';
import About from './pages/about';
// import bg1 from './images/bg-1.jpg';
// import bg2 from './images/bg-2.jpg';
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
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }
  };
  
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
        },
        Table:{
          rowHoverBg: SecondaryColor,
          headerBg: "#000",
          headerColor: "#fff",
          headerSortHoverBg: "#D0D0D0",
          headerColor: PrimaryColor,
        }
      }
    }}
  >
    <Layout>
        <Header className='headerStyle'>
          <div className="demo-logo">
            <h2><Link to="/"></Link></h2>
          </div>
          <a className="menu-list" ><MenuOutlined onClick={handleMenuOpen}/></a>
          { window.innerWidth > 690 
            ? 
            <ul className='menu'>
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
            : null
          }
        </Header>
          { window.innerWidth < 690 
            ? 
            <ul className='menu small'>
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
            : null
          }
        {location.pathname === "/price" ? 
          <Price /> 
          : location.pathname === "/service" ? 
          <Service />
          : location.pathname === "/about" ? 
          <About />
          :
          (<Content>
            <div
              style={{
                minHeight: 578,
                background: '#fff',
              }}
            >
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
        <Footer
          style={{
            textAlign: "center",
            padding: "15px"
          }}
        >
          Copyright © 2016-2024 金機誕 All rights reserved.
        </Footer>
    </Layout>
  </ConfigProvider>
  );
};
export default Root;