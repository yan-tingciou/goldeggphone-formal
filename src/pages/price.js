import React, { useState } from "react";

import { Table, Layout } from "antd";
import iphoneData from "../iphoneData.json";
const { Content } = Layout;

const Price = () => {
    const data = iphoneData;
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

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
                sortedInfo.columnKey === "originalScreen"
                    ? sortedInfo.order
                    : null,
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
                sortedInfo.columnKey === "originalBattery"
                    ? sortedInfo.order
                    : null,
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
            title: "Face ID/HOME鍵",
            dataIndex: "faceID",
            key: "faceID",
            ellipsis: true,
            width: "140px",
            render: (_, record) =>
                record.faceID && record.faceID !== "-"
                    ? record.faceID
                    : record.button || record.faceID,
        },
        {
            title: "聽筒/震動/響鈴",
            dataIndex: "handset",
            key: "handset",
            sorter: (a, b) => a.handset - b.handset,
            sortOrder:
                sortedInfo.columnKey === "handset" ? sortedInfo.order : null,
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
            sortOrder:
                sortedInfo.columnKey === "volumeKey" ? sortedInfo.order : null,
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
            title: "後蓋背板/後殼中框",
            dataIndex: "backCover",
            key: "backCover",
            // sorter: (a, b) => a.backCover - b.backCover,
            // sortOrder: sortedInfo.columnKey === 'backCover' ? sortedInfo.order : null,
            ellipsis: true,
            width: "170px",
        },
    ];

    const iPhoneTitle = () => {
        return (
            <>
                <h4
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        display: "inline",
                    }}
                >
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
                    <h1 className="seo-h1">
                        手機維修價目表
                    </h1>
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
                </div>
            </Content>
        </>
    );
};
export default Price;
