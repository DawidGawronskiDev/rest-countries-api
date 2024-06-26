import { type ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <div className="w-11/12 max-w-7xl mx-auto">{children}</div>;
}
