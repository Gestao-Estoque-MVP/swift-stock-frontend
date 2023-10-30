"use client"
// components/Layout.tsx
import React from 'react';
import SideBar from '../Dashboard/Sidebar/SideBar';
import { usePathname } from 'next/navigation';


type LayoutProps = {
  children: React.ReactNode;
};

const MenuLayout = ({ children }: LayoutProps) => {
  const hasMenuPaths = ["dashboard"];
  
  const currentPath = usePathname() + "/";

  const hasMenu = hasMenuPaths.find(path => currentPath.includes(`/${path}/`));
  if(!hasMenu) return children;

  return (
    <div className="flex h-screen">
      <SideBar/>
      <main className="overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default MenuLayout;
