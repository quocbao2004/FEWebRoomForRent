import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import { FaTrash, FaCommentDots } from "react-icons/fa"; // Import icon xóa và Zalo
import zalo from "../assets/img/index-img/zalo_icon.png";

const DataTable = ({ data, onDeleteSelected }) => {
  const [tableData, setTableData] = useState(data);
  const [selectedRows, setSelectedRows] = useState({});

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Chọn",
        accessor: "select",
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedRows[row.original.id] || false}
            onChange={() => handleSelectRow(row.original.id)}
          />
        ),
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Tên",
        accessor: "name",
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
        accessor: "description",
      },
      {
        Header: "Tình trạng",
        accessor: "status",
      },
      {
        Header: "Thao tác",
        Cell: ({ row }) => (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => handleDelete(row.original.id)}
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
    [selectedRows]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData });

  const handleSelectRow = (id) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xoá?")) {
      const newData = tableData.filter((item) => item.id !== id);
      setTableData(newData);
    }
  };

  const handleZalo = (phone) => {
    window.alert(`Liên hệ qua Zalo với số điện thoại: ${phone}`);
  };

  const handleDeleteSelected = () => {
    const selectedIds = Object.keys(selectedRows).filter(
      (key) => selectedRows[key]
    );
    if (selectedIds.length === 0) {
      window.alert("Vui lòng chọn ít nhất một dòng để xóa.");
      return;
    }
    if (window.confirm("Bạn có chắc chắn muốn xoá những mục đã chọn?")) {
      const newData = tableData.filter((item) => !selectedRows[item.id]);
      setTableData(newData);
      setSelectedRows({}); // Xóa hết lựa chọn sau khi xóa
      if (onDeleteSelected) onDeleteSelected(selectedIds);
    }
  };

  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      <button className="delete-all-btn" onClick={handleDeleteSelected}>
        <FaTrash color="red" size={16} /> Xóa các mục đã chọn
      </button>
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
