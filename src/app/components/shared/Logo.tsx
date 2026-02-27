import { Link } from "react-router";
import logoDark from "@/assets/Franco_Sons_Construction_13.png";
import logoLight from "@/assets/Franco_Sons_Construction_13_white.png";

interface LogoProps {
  variant?: "dark" | "light";
  linkTo?: string;
  size?: "default" | "small" | "large";
}

export function Logo({ variant = "dark", linkTo = "/", size = "default" }: LogoProps) {
  const logoSrc = variant === "light" ? logoLight : logoDark;

  let sizeClasses = "h-12 lg:h-14 max-w-[220px] lg:max-w-[260px]"; // default
  if (size === "small") {
    sizeClasses = "h-10 max-w-[180px]";
  } else if (size === "large") {
    sizeClasses = "h-16 max-w-[280px]";
  }

  const content = (
    <div className="flex items-center">
      <img
        src={logoSrc}
        alt="Franco & Sons Construction LLC"
        className={`block object-contain ${sizeClasses}`}
      />
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="shrink-0 block">
        {content}
      </Link>
    );
  }

  return <div className="shrink-0">{content}</div>;
}