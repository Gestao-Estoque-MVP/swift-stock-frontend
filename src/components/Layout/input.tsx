// components/Layout.tsx
import React from 'react';
import SideBar from '../Dashboard/Sidebar/SideBar';

type LayoutProps = {
    children: React.ReactNode;
    onMenuClick: (menu: string) => void;
};

const Layout: React.FC<LayoutProps> = ({ children, onMenuClick }) => {
    return (
        <div className="flex">
            <SideBar onMenuClick={onMenuClick} />
            <main className="flex-grow">{children}</main>
        </div>
    );
};

export default Layout;
