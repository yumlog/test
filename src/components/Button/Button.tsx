import styles from "./Button.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "gray";
  size?: "lg" | "md" | "sm" | "xs";
  block?: boolean;
}

export default function Button({
  children,
  color = "primary",
  size = "sm",
  block,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx("btn", `btn-${color}`, `btn-${size}`, {
        "btn-block": block,
      })}
      {...props}
    >
      {children}
    </button>
  );
}
