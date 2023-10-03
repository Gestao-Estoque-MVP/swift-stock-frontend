'use client'
import Layout from "@/components/Layout/input";
import Products from "./products/page";
import { useState } from 'react';


const DashboardPage = () => {
    
    const [activeContent, setActiveContent] = useState('');
    const renderContent = () => {
        switch (activeContent) {
            case 'products':
                return <Products />;
            case 'dashboard':
                return <></>;
            default:
                return <></>;
        }
    };
    
    return (
        <Layout onMenuClick={setActiveContent}>
            {renderContent()}
        </Layout>
    )
}
  
export default DashboardPage