import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Layout } from 'antd';
const { Content } = Layout;

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);


const contentStyle ={
  fontSize: '20px'
}

  return (
    <>
    <Content style={contentStyle}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {setTimeout(()=>{
        navigate("/");
      }, 2000)}
    </Content>
    </>
  );
}