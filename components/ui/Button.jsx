import Link from "next/link";

function Button({
  color = unset,
  background = transparent,
  rounded = 0,
  className,
  to,
  children,
}) {
  const styles = {
    color: color,
    backgroundColor: background,
    borderRadius: rounded,
    border: "none",
    outline: "none",
    fontWeight: 500,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  };

  if (to)
    return (
      <Link style={styles} className={className} href={to}>
        {children}
      </Link>
    );

  return (
    <button style={styles} className={className ? className : undefined}>
      {children}
    </button>
  );
}

export default Button;
