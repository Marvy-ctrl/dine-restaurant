import Link from "next/link";
import React from "react";

function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={`px-10 py-3.5 cursor-pointer ${className}`}>
      {children}
    </button>
  );
}

export default Button;
