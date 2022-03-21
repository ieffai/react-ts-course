import React, { FC, useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
}

export const Card: FC<CardProps> = ({
  width,
  height,
  variant,
  onClick,
  children,
}) => {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid red" : "none",
        background: variant === CardVariant.primary ? "gray" : "",
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};
