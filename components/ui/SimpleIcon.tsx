type IconProps = {
  icon: { title: string; path: string };
  size?: number;
  className?: string;
};

export function SimpleIcon({
  icon,
  size = 24,
  className = "shadow-xs hover:bg-primary/90",
}: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={icon.title}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
