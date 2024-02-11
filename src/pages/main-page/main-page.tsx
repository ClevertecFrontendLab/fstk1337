import React from 'react';

import { Layout } from 'antd';
import { MainHeader, MainSider } from '@components';

const { Footer, Content } = Layout;


export const MainPage: React.FC = () => {

    return (
        <div className="container main-container">
            <Layout>
                <MainSider />
                <Layout>
                    <MainHeader />
                    <Content>
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
