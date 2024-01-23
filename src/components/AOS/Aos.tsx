'use client';
import AOS from 'aos';
import { useEffect } from 'react';

const AosContainer = () => {
    useEffect(() => {
        AOS.init({
            offset: 120,
            duration: 900,
        });
    });
    return <></>;
};

export default AosContainer;
