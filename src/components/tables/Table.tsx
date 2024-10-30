import React, { useMemo } from "react";
import { useTable, Column } from "react-table";
import ChartContainer from "../common/ChartContainer";

interface RowData {
  date: string;
  billingName: string;
  amount: string;
  status: string;
  invoice: string;
}

interface TableProps {
  style?: React.CSSProperties;
}

const Table: React.FC<TableProps> = ({ style }) => {
  const data = useMemo<RowData[]>(
    () => [
      {
        date: "1 Dec",
        billingName: "John Doe",
        amount: "$100",
        status: "Paid",
        invoice: "#1234",
      },
      {
        date: "8 Dec",
        billingName: "Jane Smith",
        amount: "$200",
        status: "Pending",
        invoice: "#1235",
      },
      {
        date: "16 Dec",
        billingName: "Alice Johnson",
        amount: "$150",
        status: "Paid",
        invoice: "#1236",
      },
      {
        date: "31 Dec",
        billingName: "Bob Brown",
        amount: "$250",
        status: "Pending",
        invoice: "#1237",
      },
    ],
    []
  );

  const columns: Column<RowData>[] = useMemo(
    () => [
      { Header: "Date", accessor: "date" },
      { Header: "Billing Name", accessor: "billingName" },
      { Header: "Amount", accessor: "amount" },
      { Header: "Status", accessor: "status" },
      { Header: "Invoice", accessor: "invoice" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <ChartContainer style={style}>
      <h2 className="text-lg font-medium text-[#493421]">Recent Order</h2>
      <hr className="border-[#493421] my-2" />

      <div style={{ maxHeight: "270px", overflowY: "auto" }}>
        <table
          {...getTableProps()}
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 5px", // Adds space between rows
          }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                style={{
                  backgroundColor: "#493421",
                  color: "white",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      padding: "10px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              let backgroundColor;
              let textColor = "#000000";
              switch (i % 4) {
                case 0:
                  backgroundColor = "#493421";
                  textColor = "#FFFFFF";
                  break;
                case 1:
                  backgroundColor = "#F0CF83";
                  break;
                case 2:
                  backgroundColor = "#D7A53F";
                  break;
                case 3:
                  backgroundColor = "#FFFFFF";
                  break;
                default:
                  backgroundColor = "#FFFFFF";
              }

              return (
                <tr
                  {...row.getRowProps()}
                  style={{
                    backgroundColor,
                    color: textColor,
                    borderRadius: "10px", // Apply border-radius to each row
                    overflow: "hidden",
                  }}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid transparent",
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
    </ChartContainer>
  );
};

export default Table;
