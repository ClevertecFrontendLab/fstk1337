import React from 'react';

import { Layout } from 'antd';
import { MainSider } from '@components';

const { Header, Footer, Content } = Layout;


export const MainPage: React.FC = () => {

    return (
        <div className="container main-container">
            <Layout>
                <MainSider />
                <Layout>
                    <Header>
                        <span>Главная</span>
                        <h1>Приветствуем тебя в CleverFit — приложении,<br/>которое поможет тебе добиться своей мечты!</h1>
                    </Header>
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
