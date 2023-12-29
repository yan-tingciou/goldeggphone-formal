import { Layout } from "antd";
const { Content } = Layout;

const About = () => {

    return(<>
    <Content
        className="contentStyle"
        style={{
            padding: "0 30px",
        }}
    >
        <div
            style={{
                padding: 24,
                minHeight: "100vh",
                background: '#fff'
            }}
        >
            <h3>營業時間</h3>
            <p>
                星期一至星期五 12:00–21:00<br/>
                星期六 12:00–18:30<br/>
                星期日 公休<br/>
                (營業時間依臉書官網公告為主)
            </p>

            <h3>如何前往</h3>
            <p><i className="fa-solid fa-location-dot fa-beat" style={{color: "#e79e6f"}}></i>桃園市龜山區中興路354號</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.244641023994!2d121.3326218749488!3d24.99180183999026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681e8bb993554b%3A0x3db7bc01b1988084!2z6YeR5qmf6KqV5omL5qmf57at5L-uIOePvuWgtOW_q-mAn-e2reS_riDmiYvmqZ8g5bmz5p2_IOWQhOWkp-W7oOeJjOe2reS_rg!5e0!3m2!1szh-TW!2stw!4v1701013547821!5m2!1szh-TW!2stw"
                style={{ width: "70%", height: "300px", border: "0"}}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </Content>
    </>)
}
export default About;