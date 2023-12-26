import { Outlet, Link, Navigate, useLocation } from "react-router-dom";

import { Layout } from "antd";
const { Content } = Layout;

const Service = () => {

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
                minHeight: 578,
                background: '#fff'
            }}
        >
            service
        </div>
    </Content>
    </>)
}
export default Service;