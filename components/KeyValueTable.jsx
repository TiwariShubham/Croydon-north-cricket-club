export default function KeyValueTable({ rows, children }) {
  return (
    <table className="data-table">
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th>{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
        {children}
      </tbody>
    </table>
  );
}
