// import fixPhoto from './../images/service-fix.jpg';
// import buyPhoto from './../images/service-buy&sell.jpg';
// import phoneCasePhoto from './../images/service-phone case.jpg';
// import phioneCasePhoto1 from './../images/service-phone case-1.jpg';

import { Layout } from "antd";
const { Content } = Layout;

const Service = () => {

    // window.addEventListener('scroll', () => {
    //     const elements = document.querySelectorAll('.serviceUl li');
    //     const windowBottom = window.innerHeight + window.scrollY;
      
    //     elements.forEach((element) => {
    //       const elementBottom = element.getBoundingClientRect().top + window.scrollY + element.offsetHeight;
      
    //       if (windowBottom > elementBottom) {
    //         element.style.visibility = 'visible';
    //       }
    //     });
    // });

    return(<>
    <Content>
        <div className='contentStyle'>
            <h2 >服務項目 Services</h2>
            <ul className="serviceUl">
                <li>
                    <img src="https://github.com/yan-tingciou/goldeggphone-formal/blob/main/src/images/service-fix.jpg?raw=true" className="servicePhoto" alt="" />
                    <div className="serviceText">
                        <h3 style={{fontSize: "28px"}}>PROFESSIONAL MAINTENANCE</h3>
                        <h3 style={{fontSize: "20px"}}>專業維修</h3>
                        <p>手機現場快速維修、主機板維修、電池更換、充電故障、耗電異常、電池膨脹、螢幕異常、螢幕破裂、開機問題、泡水受潮、背板破裂、鏡頭損壞/故障</p>
                    </div>
                </li>
                <li className="serviceLiReverse">
                    <img src="https://github.com/yan-tingciou/goldeggphone-formal/blob/main/src/images/service-buy&sell.jpg?raw=true" className="servicePhoto" alt="" />
                    <div className="serviceText">
                        <h3 style={{fontSize: "28px"}}>MOBILE PHONE SALE</h3>
                        <h3 style={{fontSize: "20px"}}>手機買賣</h3>
                        <p>新機買賣、二手機買賣、二手機回收</p>
                    </div>
                </li>
                <li>
                    <img src="https://github.com/yan-tingciou/goldeggphone-formal/blob/main/src/images/service-phone%20case-1.jpg?raw=true" className="servicePhoto" alt="" />
                    <div className="serviceText">
                        <h3 style={{fontSize: "28px"}}>ACCESSORIES</h3>
                        <h3 style={{fontSize: "20px"}}>3C配件</h3>
                        <p>手機防摔殼、保護貼、鏡頭保護貼、行動電源</p>
                    </div>
                </li>
                <li className="serviceLiReverse">
                    <img src="https://github.com/yan-tingciou/goldeggphone-formal/blob/main/src/images/service-others.jpg?raw=true" className="servicePhoto" alt="" />
                    <div className="serviceText">
                        <h3 style={{fontSize: "28px"}}>OTHERS</h3>
                        <h3 style={{fontSize: "20px"}}>相關服務</h3>
                        <p>申辦門號/續約、手機解鎖、系統升級、資料救援</p>
                    </div>
                </li>
            </ul>
        </div>
    </Content>
    </>)
}
export default Service;