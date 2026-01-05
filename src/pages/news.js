import { Layout } from "antd";

const { Content } = Layout;

const News = () => {
    return (
        <>
            <Content>
                <div className="contentStyle">
                    <h1 className="seo-h1">
                        最新消息
                    </h1>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgoldeggphone%2Fposts%2Fpfbid0HPhyxGAot7nnbfQ9q9g9M2aJz8o6dbcVsuhUpJg9w18JS48BbhuVoyJnAuzdMtxzl&show_text=true&width=500&is_preview=true"
                        style={{
                            border: "none",
                            overflow: "hidden",
                            width: "500px",
                            height: "653px",
                        }}
                        frameborder="0"
                        allowfullscreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>

                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgoldeggphone&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
                        style={{
                            border: "none",
                            overflow: "hidden",
                            width: "340px",
                            height: "331px",
                        }}
                        frameborder="0"
                        allowfullscreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </Content>
        </>
    );
};
export default News;
