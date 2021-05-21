import { useState } from "react";

import "./Rating.css";
import Button from "./Button";
import cn from "../utils/classnames";

export default function Rating({ value = 1, onChange = () => null }) {
  const [hoverValue, setHoverValue] = useState(null);

  console.log(hoverValue);

  return (
    <div className="rating">
      <input
        type="range"
        min="1"
        max="5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></input>
      {Array.from(new Array(5)).map((_, index) => {
        const currentValue = index + 1;

        const hasHover = hoverValue !== null;

        const iconClasses = cn({
          bi: true,
          "bi-star": hasHover
            ? hoverValue < currentValue
            : value < currentValue,
          "bi-star-fill": hasHover
            ? hoverValue >= currentValue
            : value >= currentValue,
        });

        return (
          <Button
            key={currentValue}
            onMouseOver={() => setHoverValue(currentValue)}
            onMouseLeave={() => setHoverValue(null)}
            variant="transparent"
          >
            <i
              className={iconClasses}
              onClick={() => onChange(currentValue)}
            ></i>
          </Button>
        );
      })}
    </div>
  );
}
