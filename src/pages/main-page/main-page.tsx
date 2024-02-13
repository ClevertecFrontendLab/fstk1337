import React, { useState } from 'react';

import { Layout } from 'antd';
import { MainContent, MainHeader, MainSider } from '@components';
import { useWindowWidth } from '@hooks';


export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const width = useWindowWidth();

    return (
        <div className="container main-container">
            <Layout>
                <MainSider collapsedState={[collapsed, setCollapsed]}/>
                <Layout style={{
                    marginLeft: width < 640 ? 0 : (collapsed ? 64 : 208),
                    transition: 'margin 0.2s ease-in-out'
                }}>
                    <MainHeader />
                    <MainContent />
                </Layout>
            </Layout>
        </div>
    );
};
