import { Layout, Typography } from 'antd';
const { Paragraph } = Typography;
const { Content } = Layout;

const About = () => {

    return(<>
    <Content>
        <div className='contentStyle'>
            <ul>
                <li >
                    <h2>關於金機誕 About</h2>
                    <div className="aboutText">
                        <img src="https://github.com/yan-tingciou/goldeggphone-formal/blob/main/src/images/%E9%87%91%E6%A9%9F%E8%AA%95logo.jpeg?raw=true" className="servicePhoto" alt="" />
                        <p>
                            金機誕通訊行成立於2016，我們成立7年多來一直秉持著專業、效率、品質、誠信，四大堅持，盡可能讓您的產品恢復如初，並持續不斷精進技術設備增加經驗，穩健成長，除手機平板筆電維修外，還提供門號申辦、全新機/中古機買賣、手機配件、客製化包膜等等的一條龍服務，<span className='fontRed'>我們也在2024年4月取得蘋果APPLE獨立維修中心的資格，除一般認證的維修零件，也能提供APPLE原廠的零件供您選擇。</span>
                        </p>
                    </div>
                </li>
                <li>
                    <h2>營業時間 Opening Day</h2>
                    <div className="aboutText">
                        <img src="https://github.com/yan-tingciou/goldeggphone-formal/blob/main/src/images/openingDay.jpg?raw=true" className="servicePhoto" alt="" />
                        <p className='aboutTextCenter'>
                            星期一 12:00–21:00<br/>
                            星期二 12:00–21:00<br/>
                            星期三 12:00–21:00<br/>
                            星期四 12:00–21:00<br/>
                            星期五 12:00–21:00<br/>
                            <span className='fontRed'> 星期六 12:00–18:30</span><br/>
                            星期日 公休<br/>
                            (不定期公休，請依臉書官網公告為主)
                        </p>
                        {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgoldeggphone&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" style={{border: 'none', overflow: 'hidden', width: '340px', height: '331px'}} 
                            frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                        </iframe> */}
                    </div>

                </li>
                <li>
                    <h2>如何前往 Where</h2>
                    {/* <i className="fa-solid fa-location-dot fa-beat" style={{color: "#e79e6f"}}></i> */}
                    <Paragraph copyable style={{ fontSize: '18px' }}>桃園市龜山區中興路354號</Paragraph>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.244641023994!2d121.3326218749488!3d24.99180183999026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681e8bb993554b%3A0x3db7bc01b1988084!2z6YeR5qmf6KqV5omL5qmf57at5L-uIOePvuWgtOW_q-mAn-e2reS_riDmiYvmqZ8g5bmz5p2_IOWQhOWkp-W7oOeJjOe2reS_rg!5e0!3m2!1szh-TW!2stw!4v1701013547821!5m2!1szh-TW!2stw"
                        style={{ width: "75%", height: "350px", border: "0"}}
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </li>
            </ul>
        </div>
    </Content>
    </>)
}
export default About;