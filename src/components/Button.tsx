import React, { FC, MouseEventHandler } from "react";

interface IButtonProps {
  onClick: () => void;
  stopPropagation?: boolean;
}

export const Button: FC<IButtonProps> = (props) => {
  const { onClick, stopPropagation = true } = props;

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    stopPropagation && event.stopPropagation();
    onClick();
  };

  return (
    <button type="button" onClick={handleButtonClick}>
      get random user
    </button>
  );
};
