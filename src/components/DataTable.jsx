import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import { FaTrash } from "react-icons/fa";
import zalo from "../assets/img/index-img/zalo_icon.png";

const DataTable = ({ data, onDelete }) => {
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Tên",
        accessor: "fullname",
      },
      {
        Header: "Số điện thoại",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Mô tả",
        accessor: "demand",
      },
      {
        Header: "Thao tác",
        Cell: ({ row }) => (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => onDelete(row.original.id)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FaTrash color="red" size={20} />
            </button>
            <a
              href={`https://zalo.me/${row.original.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={zalo}
                alt="Zalo Icon"
                style={{ width: "20px", height: "20px" }}
              />
            </a>
          </div>
        ),
      },
    ],
    [onDelete]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData });

  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      <table
        {...getTableProps()}
        style={{ border: "solid 1px black", width: "100%", marginTop: "10px" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    height: "50px",
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
