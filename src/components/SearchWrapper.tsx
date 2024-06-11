import { type ReactNode } from "react";

interface SearchWrapperProps {
  children: ReactNode;
}

export default function SearchWrapper({ children }: SearchWrapperProps) {
  return <div className="w-11/12 max-w-7xl mx-auto">{children}</div>;
}
