import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";

export type RowData = Array<string | number | boolean>;

export type Data = Array<RowData>;

type DataGridProps = {
  data: Data;
  colNames?: Array<string>;
};

const DataGrid: React.FC<DataGridProps> = ({ data, colNames }) => {
  const [sortBy, setSortBy] = useState<number | null>(null);
  const themeContext = useContext(ThemeContext);

  if (sortBy !== null) {
    data.sort((rowA, rowB) => {
      if (rowA[sortBy] < rowB[sortBy]) {
        return -1;
      } else if (rowA[sortBy] === rowB[sortBy]) {
        return 0;
      } else {
        return 1;
      }
    });
  }

  return (
    <table>
      <thead>
        {colNames && (
          <tr>
            {colNames.map((name, index) => (
              <th
                key={index}
                onClick={() => {
                  // sort by this column
                  setSortBy(index);
                }}
                style={{
                  textDecoration: sortBy === index ? "underline" : "",
                  color:
                    themeContext.themeName === "light" ? "black" : "lightgrey"
                }}
              >
                {name}
              </th>
            ))}
          </tr>
        )}
      </thead>
      <tbody>
        {data.map((row, index) => (
          <Row data={row} key={index} />
        ))}
      </tbody>
    </table>
  );
};

type RowProps = {
  data: RowData;
};

const Row: React.FC<RowProps> = ({ data }) => {
  return (
    <tr>
      {data.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  );
};

export default DataGrid;
