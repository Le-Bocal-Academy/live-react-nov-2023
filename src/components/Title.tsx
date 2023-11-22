/**
 * Title component - This compoient is a base title
 */

import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
  level?: 1 | 2 | 3;
  className?: string;
}

export default function Title({
  children,
  level = 1,
  className,
  ...props
}: TitleProps) {
  const additionnalClasses = className ? className : "";

  switch (level) {
    case 1:
      return (
        <h1
          className={`text-3xl text-cyan-700 text-center font-bold ${additionnalClasses}`}
          {...props}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={`text-xl text-gray-700 text-center ${additionnalClasses}`}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={`text-lg text-gray-700 text-center ${additionnalClasses}`}
        >
          {children}
        </h3>
      );
  }
}
