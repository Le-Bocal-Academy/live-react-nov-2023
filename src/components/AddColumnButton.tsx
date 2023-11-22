/**
 * Add Column Button component - This component is a button to add a column
 */

import { MouseEvent } from "react";

interface AddColumnButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export default function AddColumnButton({
  onClick,
  text,
}: AddColumnButtonProps) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
