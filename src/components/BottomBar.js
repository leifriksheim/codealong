import "./BottomBar.css";
import cn from "../utils/classnames";

export default function BottomBar({ children }) {
  const classNames = cn({
    "bottom-bar": true,
  });

  return <nav className={classNames}>{children}</nav>;
}
