import "./Button.css";
import cn from "../utils/classnames";

export default function Button({
  children,
  square = false,
  variant = "",
  size = "",
  onMouseOver = () => null,
  onMouseLeave = () => null,
  onClick = () => null,
}) {
  const classNamees = cn({
    button: true,
    "button--square": square,
    [`button--${variant}`]: variant,
  });

  return (
    <button
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      onClick={onClick}
      className={classNamees}
    >
      {children}
    </button>
  );
}
