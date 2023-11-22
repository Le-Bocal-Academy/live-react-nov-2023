/**
 * Board View Component - This board view component shows columns and cards
 */

import { useState } from "react";
import Column, { ColumnData } from "../components/Column";
import Title from "../components/Title";
import AddColumnButton from "../components/AddColumnButton";

export default function BoardView() {
  const [columns, setColumns] = useState<ColumnData[]>([
    { title: "Col 1", cards: [] },
    { title: "Col 2", cards: [] },
  ]);

  const addColumn = () => {
    setColumns([...columns, { title: "New column", cards: [] }]);
  };

  const removeColumn = (index: number) => {
    setColumns(columns.filter((_, i) => i !== index));
  };

  const updateColumn = (index: number, newColumnData: ColumnData) => {
    setColumns(
      columns.map((column, i) => {
        return i === index ? newColumnData : column;
      })
    );
  };

  return (
    <>
      <Title>My Super ToDo Board</Title>

      <div className="mt-10 flex gap-10 overflow-x-auto">
        {columns.map((column, index) => (
          <Column
            {...column}
            remove={() => removeColumn(index)}
            updateColumn={(data: ColumnData) => updateColumn(index, data)}
          />
        ))}

        <AddColumnButton onClick={addColumn} text="Add column" />
      </div>
    </>
  );
}
