import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // 引入 Swiper 的 CSS 样式

const Slider = () => {
  const swiperRef = useRef(null);

  // useEffect(() => {
  //   // ...
  
  //   // 添加事件監聽
  //   swiperRef.current.on('slideChange', () => {
  //     console.log('Slide changed');
  //   });
  
  //   // 清理工作
  //   return () => {
  //     // 在組件卸載時，清理 Swiper 實例
  //     if (swiperRef.current) {
  //       swiperRef.current.destroy();
  //     }
  //   };
  // }, []);

  return (
    <div className="swiper-container">
        {/* <h2>專業 品質 效率</h2> */}
        <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="https://github.com/yan-tingciou/goldeggphone/blob/main/images/repair-1.jpg?raw=true" alt="" /></div>
            <div className="swiper-slide"><img src="https://github.com/yan-tingciou/goldeggphone/blob/main/images/broken-2.jpg?raw=true" alt="" /></div>
            <div className="swiper-slide"><img src="https://github.com/yan-tingciou/goldeggphone/blob/main/images/broken-1.jpg?raw=true" alt="" /></div>
            <div className="swiper-slide"><img src="https://github.com/yan-tingciou/goldeggphone/blob/main/images/repair-2.jpg?raw=true" alt="" /></div>
            <div className="swiper-slide"><img src="https://github.com/yan-tingciou/goldeggphone/blob/main/images/iphone-1.jpg?raw=true" alt="" /></div>
            <div className="swiper-slide"><img src="https://github.com/yan-tingciou/goldeggphone/blob/main/images/iphone-2.jpg?raw=true" alt="" /></div>
        </div>
      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
      {/* <div className="swiper-pagination"></div> */}
    </div>
  );
};

export default Slider;