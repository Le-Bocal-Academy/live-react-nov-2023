/**
 * Column Header Component - This component shows the column title and actions
 */

import { useState } from "react";
import Title from "./Title";
import { IoTrashBin, IoSave } from "react-icons/io5";

interface ColumnHeaderProps {
  title: string;
  remove: () => void;
  updateTitle: (title: string) => void;
}

export default function ColumnHeader({
  title,
  updateTitle,
  remove,
}: ColumnHeaderProps) {
  const [isTitleEditing, setIsTitleEditing] = useState<Boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>(title);

  const saveTitle = () => {
    updateTitle(editedTitle);
    setIsTitleEditing(false);
  };

  const renderTitle = () => {
    if (isTitleEditing) {
      return (
        <div className="flex flex-row justify-between">
          <input
            className="bg-gray-200 rounded p-1"
            type="text"
            onChange={(e) => setEditedTitle(e.target.value)}
            value={editedTitle}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveTitle();
              }
            }}
          />
          <button
            className="text-gray-700 text-xl hover:bg-gray-100 active:text-red-500 p-1 rounded"
            onClick={saveTitle}
          >
            <IoSave />
          </button>
        </div>
      );
    }

    return (
      <div onClick={() => setIsTitleEditing(true)}>
        <Title level={2} className="!text-left cursor-pointer">
          {title}
        </Title>
      </div>
    );
  };

  return (
    <div className="flex flew-row justify-between">
      {renderTitle()}

      <button
        className="text-gray-700 text-xl hover:bg-gray-100 active:text-red-500 p-1 rounded"
        onClick={remove}
      >
        <IoTrashBin />
      </button>
    </div>
  );
}
