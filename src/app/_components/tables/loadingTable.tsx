export default function LoadingTableRows({
  numeric,
  columns,
}: {
  numeric: number;
  columns: number;
}) {
  const rowStructure = (
    <tr key={Math.random()} className="p-4">
      {Array.from({ length: columns }, (_, _index) => (
        <td key={Math.random()}>
          <p className="skeleton h-4 w-full"></p>
        </td>
      ))}
    </tr>
  );

  const rows = [];
  for (let i = 0; i < numeric; i++) {
    rows.push(rowStructure);
  }

  return <>{rows}</>;
}
