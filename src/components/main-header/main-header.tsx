import { Layout, Typography, Button, Col, Row } from 'antd';

const { Header } = Layout;
const { Title } = Typography;
import { SettingOutlined } from '@ant-design/icons';

import style from './main-header.module.scss';


export const MainHeader = () => {

    return (
        <Header className={style.header}>
            <span>Главная</span>
            <Row className={style.headerRow}>
                <Col>
                    <Title className={style.greeting}>Приветствуем тебя в CleverFit — приложении,<br/>которое поможет тебе добиться своей мечты!</Title>
                </Col>
                <Col className={style.settings}>
                    <Button type="text" icon={<SettingOutlined />}>Настройки</Button>
                </Col>
            </Row>
        </Header>
    );
}
