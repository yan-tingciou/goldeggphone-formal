import { Spin, Card, ConfigProvider } from "antd";
import { PrimaryColor } from "../MainStyle";

const App = () => {

    const cardStyle ={
        width: 150,
        background: "rgba(128 ,128 , 128, 0.7)",
        borderRadius: "10px",
        textAlign:"center",
        margin: "180px auto 0",
    };

    return(<>
    <ConfigProvider
        theme={{
        token: {
            colorPrimary: "#fff",
            borderRadius: 2,
        }
    }}
    >
        <Card style={cardStyle}>
            <Spin size="large" style={{marginBottom: "10px"}}/>
            <br />
            <span style={{ color: "#fff", marginLeft: "4px", fontSize:"20px" }}>
                Loading...
            </span>
        </Card>
    </ConfigProvider>
    </>)
};
export default App;