import "./styles.css";

const matrix = [
  [0, 1, 2, 3],
  [0, 3, 1, 2],
  [1, 2, 3, 4],
  [2, 3, 1, 4],
  [0, 2, 2, 3]
];

const cellSize = 80 / Math.max(matrix.length, matrix[0].length) + "vmin";

export default function App() {
  return (
    <div className="App">
      <table className="Table">
        <tbody>
          {matrix.map((row, indRow) => (
            <tr key={indRow}>
              {row.map((num, indCol) => (
                <td
                  key={indCol}
                  className="Cell"
                  style={{
                    height: cellSize,
                    width: cellSize,
                    ...((indRow === 0 ||
                      matrix[indRow][indCol] !==
                        matrix[indRow - 1][indCol]) && {
                      borderTopStyle: "solid"
                    }),
                    ...((indCol === 0 ||
                      matrix[indRow][indCol] !==
                        matrix[indRow][indCol - 1]) && {
                      borderLeftStyle: "solid"
                    }),
                    ...((indRow === matrix.length - 1 ||
                      matrix[indRow][indCol] !==
                        matrix[indRow + 1][indCol]) && {
                      borderBottomStyle: "solid"
                    }),
                    ...((indCol === matrix[0].length - 1 ||
                      matrix[indRow][indCol] !==
                        matrix[indRow][indCol + 1]) && {
                      borderRightStyle: "solid"
                    })
                  }}
                >
                  {num}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
