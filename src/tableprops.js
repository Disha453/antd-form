import React from "react";
import { Table } from "antd";


export function TableData({ recordsData, handleDelete, handleEdit }) {


    const columns = [
        {
            title: "fname",
            dataIndex: "fname",
            key: "fname",
        },
        {
            title: "lname",
            dataIndex: "lname",
            key: "lname",
        },
        {
            title: "address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "delete",
            dataIndex: "delete",
            key: "delete",
            render: (_, item, index) => {

                return (
                    <>
                        <button
                            style={{ color: "green" }}
                            onClick={() => handleDelete(index)}
                        >delete</button>

                    </>
                );
            },
        },


        {
            title: "edit",
            dataIndex: "edit",
            key: "edit",
            render: (_, item, index) => {

                return (
                    <>
                        <button
                            style={{ color: "green" }}
                            onClick={() => handleEdit(index)}
                        >edit</button>

                    </>
                );
            },
        },
    ];

    return (
        <>
            <div>
                <Table columns={columns} dataSource={recordsData} />

            </div>



        </>
    )

}

export default TableData;