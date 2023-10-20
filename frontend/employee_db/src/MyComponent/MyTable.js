import { useState } from 'react';

function MyTable() {
  const [tableData, setTableData] = useState([
    ['John', 'Doe'],
    ['Jane', 'Doe'],
  ]);

  const handleTableCellInput = (event, rowIndex, columnIndex) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][columnIndex] = event.target.innerHTML;
    setTableData(newTableData);
  };

  return (
    <table>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <td
                key={`${rowIndex}-${columnIndex}`}
                contentEditable
                onInput={(event) =>
                  handleTableCellInput(event, rowIndex, columnIndex)
                }
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default MyTable