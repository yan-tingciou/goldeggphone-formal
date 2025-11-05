import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Table, Layout, Tooltip } from "antd";
import LoadingPrompt from "../component/loading";
const { Content } = Layout;

const Price = () => {
  const [data, setData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true); //控制是否還在載入中
  const [loadingTimeout, setLoadingTimeout] = useState(false); //控制10秒後若還在載入中，則顯示錯誤訊息
  const [errorNotificationDisplayed, setErrorNotificationDisplayed] =
    useState(false); //控制是否已經顯示錯誤訊息

  const location = useLocation();

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const iphoneColumns = [
    {
      title: "iPhone型號",
      dataIndex: "type",
      key: "type",
      // filteredValue: filteredInfo.type || null,
      // onFilter: (value, record) => record.type.includes(value),
      // sorter: (a, b) => a.type.length - b.type.length,
      // sortOrder: sortedInfo.columnKey === 'type' ? sortedInfo.order : null,
      ellipsis: true,
      fixed: "left",
      width: "150px",
      className: "columnBold",
    },
    // {
    //   title: "玻璃破裂",
    //   dataIndex: "glass",
    //   key: "glass",
    //   sorter: (a, b) => a.glass - b.glass,
    //   sortOrder: sortedInfo.columnKey === "glass" ? sortedInfo.order : null,
    //   ellipsis: true,
    //   width: "92px",
    // },
    {
      title: "螢幕總成",
      dataIndex: "screen",
      key: "screen",
    //   sorter: (a, b) => a.screen - b.screen,
    //   sortOrder: sortedInfo.columnKey === "screen" ? sortedInfo.order : null,
      ellipsis: true,
      width: "120px",
    },
    {
      title: "APPLE原廠螢幕",
      dataIndex: "originalScreen",
      key: "originalScreen",
      sorter: (a, b) => a.originalScreen - b.originalScreen,
      sortOrder:
        sortedInfo.columnKey === "originalScreen" ? sortedInfo.order : null,
      ellipsis: true,
      width: "138px",
      className: "fontRed",
    },
    {
      title: "認證電池/認證高容",
      dataIndex: "certifiedBattery",
      key: "certifiedBattery",
      // sorter: (a, b) => a.certifiedBattery - b.certifiedBattery,
      // sortOrder: sortedInfo.columnKey === 'certifiedBattery' ? sortedInfo.order : null,
      ellipsis: true,
      width: "140px",
    },
    {
      title: "APPLE原廠電池",
      dataIndex: "originalBattery",
      key: "originalBattery",
      sorter: (a, b) => a.originalBattery - b.originalBattery,
      sortOrder:
        sortedInfo.columnKey === "originalBattery" ? sortedInfo.order : null,
      ellipsis: true,
      width: "138px",
      className: "fontRed",
    },
    {
      title: "前/後鏡頭",
      dataIndex: "lens",
      key: "lens",
      ellipsis: true,
      width: "100px",
    },
    {
      title: "Face ID",
      dataIndex: "faceID",
      key: "faceID",
      sorter: (a, b) => a.faceID - b.faceID,
      sortOrder: sortedInfo.columnKey === "faceID" ? sortedInfo.order : null,
      ellipsis: true,
      width: "100px",
    },
    {
      title: "HOME鍵",
      dataIndex: "button",
      key: "button",
      // sorter: (a, b) => a.button - b.button,
      // sortOrder: sortedInfo.columnKey === 'button' ? sortedInfo.order : null,
      ellipsis: true,
      width: "130px",
    },
    {
      title: "聽筒/震動/響鈴",
      dataIndex: "handset",
      key: "handset",
      sorter: (a, b) => a.handset - b.handset,
      sortOrder: sortedInfo.columnKey === "handset" ? sortedInfo.order : null,
      ellipsis: true,
      width: "126px",
    },
    {
      title: "容量擴充",
      dataIndex: "expansion",
      key: "expansion",
      ellipsis: true,
      width: "190px",
    },
    {
      title: "開機鍵/音量鍵",
      dataIndex: "volumeKey",
      key: "volumeKey",
      sorter: (a, b) => a.volumeKey - b.volumeKey,
      sortOrder: sortedInfo.columnKey === "volumeKey" ? sortedInfo.order : null,
      ellipsis: true,
      width: "126px",
    },
    {
      title: "充電/麥克風",
      dataIndex: "microphone",
      key: "microphone",
      sorter: (a, b) => a.microphone - b.microphone,
      sortOrder:
        sortedInfo.columnKey === "microphone" ? sortedInfo.order : null,
      ellipsis: true,
      width: "110px",
    },
    {
      title: "主板試修/CPU另計",
      dataIndex: "boardTrial",
      key: "boardTrial",
      sorter: (a, b) => a.boardTrial - b.boardTrial,
      sortOrder:
        sortedInfo.columnKey === "boardTrial" ? sortedInfo.order : null,
      ellipsis: true,
      width: "154px",
    },
    {
      title: "背蓋/後殼總成",
      dataIndex: "backCover",
      key: "backCover",
      // sorter: (a, b) => a.backCover - b.backCover,
      // sortOrder: sortedInfo.columnKey === 'backCover' ? sortedInfo.order : null,
      ellipsis: true,
      width: "110px",
    },
  ];

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/yan-tingciou/goldeggphone-formal/main/src/iphoneData.json"
      )
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setErrorNotificationDisplayed(true);
      });

    const timeoutId = setTimeout(() => {
      setLoadingTimeout(true);
      setIsLoading(false);
      if (!errorNotificationDisplayed && data === null) {
        setErrorNotificationDisplayed(true);
      }
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.pathname, errorNotificationDisplayed]);

  const iPhoneTitle = () => {
    return (
      <>
        <h4 style={{ fontSize: "24px", fontWeight: "bold", display: "inline" }}>
          I Phone 維修價目表{" "}
        </h4>
        <span className="fontRed">左滑查看更多</span>
      </>
    );
  };

  return (
    <>
      <Content>
        <div className="contentStyle">
          {isLoading && !loadingTimeout ? (
            <LoadingPrompt />
          ) : (
            <Table
              columns={iphoneColumns}
              dataSource={data}
              onChange={handleChange}
              pagination={false}
              size="small"
              scroll={{
                x: 100,
              }}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell
                      index={0}
                      colSpan={1}
                    ></Table.Summary.Cell>
                    <Table.Summary.Cell
                      index={1}
                      colSpan={10}
                    ></Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
              style={{ margin: "0 20px" }}
              title={iPhoneTitle}
              bordered
            />
          )}
        </div>
      </Content>
    </>
  );
};
export default Price;
