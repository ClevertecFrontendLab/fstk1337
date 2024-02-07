import React, { useState } from 'react';

import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;


export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="container">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    Cleverfit
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <span>Главная</span>
                        <h1>Приветствуем тебя в CleverFit — приложении,<br/>которое поможет тебе добиться своей мечты!</h1>
                    </Header>
                    <Content className='site-layout-content'>
                        Content
                    </Content>
                    <Footer>
                        Footer
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
};
