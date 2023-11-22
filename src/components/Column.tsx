/**
 * Column component - Column component containing cards
 */

import ColumnHeader from "./ColumnHeader";

export interface ColumnData {
  title: string;
  cards: any[]; // TODO: Replace with Card type
}

interface ColumnProps extends ColumnData {
  remove: () => void;
  updateColumn: (data: ColumnData) => void;
}

export default function Column({
  title,
  cards,
  remove,
  updateColumn,
}: ColumnProps) {
  return (
    <div className="bg-gray-300 rounded w-80 h-40 shrink-0 p-5">
      <ColumnHeader
        title={title}
        remove={remove}
        updateTitle={(newTitle: string) =>
          updateColumn({ title: newTitle, cards })
        }
      />

      {cards.map(() => (
        <div>Card</div>
      ))}
    </div>
  );
}
