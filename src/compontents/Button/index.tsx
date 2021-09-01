import classnames from "classnames";
// 此处换成enum是不是更合适
export type buttonType = "primary" | "default" | "text" | "link";
export type shapeType = "circle" | "round";
export type htmlType = "button" | "submit" | "reset" | undefined;
export type sizeType = "large" | "middle" | "small";
export type btnClickType = ((e: React.MouseEvent<HTMLButtonElement>) => void) &
  ((e: React.MouseEvent<HTMLAnchorElement>) => void);
export interface buttonProps {
  className?: string;
  type?: buttonType;
  danger?: boolean;
  disabled?: boolean;
  shape?: shapeType;
  size?: sizeType;
  href?: string;
  target?: string;
  htmlType?: htmlType;
  onClick?: btnClickType;
}
export const Button: React.FC<buttonProps> = (props) => {
  const {
    type,
    className,
    danger,
    disabled,
    href,
    shape,
    size,
    target,
    htmlType,
    onClick,
    children,
  } = props;
  const btnClassName = classnames("wide-btn", className, {
    [`wide-btn-${type}`]: true,
    [`wide-btn-${size}`]: size,
    "wide-btn-disabled": disabled,
    "wide-btn-link-disabled": disabled && type === 'link',
    "wide-btn-round": shape === "round", // 这种字符串直接比对的应改为常量类型去控制todo
    "wide-btn-circle": shape === "circle",
    "wide-btn-danger": danger,
  });

  const btnClick: btnClickType = (event : any) => {
    if (!disabled && onClick) {
      onClick(event)
    }
  }
  if (type === "link") {
    return (
      <a
        className={btnClassName}
        href={href}
        target={target}
        onClick={(e) =>
          btnClick(e)
        }
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={btnClassName}
      disabled={disabled}
      type={htmlType}
      onClick={(e) => btnClick(e)}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  type: "default",
  danger: false,
  disabled: false,
  shape: "circle",
  htmlType: "button",
  size: "middle",
};
