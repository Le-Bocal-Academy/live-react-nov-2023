/**
 * Main Layout Component
 */

import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="p-10 bg-stone-100 min-h-screen overflow-y-hidden">
      {children}
    </div>
  );
}
