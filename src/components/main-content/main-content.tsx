import { Layout, Card, Typography, Row, Col, Button } from 'antd';

import { HeartFilled, CalendarOutlined, IdcardOutlined, AppleFilled, AndroidFilled } from '@ant-design/icons';
import style from './main-content.module.scss';

const { Content } = Layout;


export const MainContent = () => {

    return (
        <Content className={style.mainContent}>
            <Row className={style.topCards}>
                <Col>
                    <Card className={style.mainCard} bordered={false}>
                        <Typography >
                            <p className={style.mainCardText} style={{  marginBottom: 0, padding: '1px 0' }}>
                                С CleverFit ты сможешь:<br/>
                                — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;<br/>
                                — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;<br/>
                                — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;<br/>
                                — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.
                            </p>
                        </Typography>
                    </Card>
                </Col>
            </Row>
            <Row className={style.middleCards}>
                <Row>
                    <Col>
                        <Card className={style.mainCard} bordered={false}>
                            <Typography>
                                <p className={style.mainCardStrongText} style={{  marginBottom: 0 }}>
                                CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                                </p>
                            </Typography>
                        </Card>
                    </Col>
                </Row>
                <Row className={style.actionCards}>
                    <Col>
                        <Card title="Расписать тренировки" bordered={false} className={style.actionCard}>
                            <Button type='link' icon={<HeartFilled />}>Тренировки</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Назначить календарь" bordered={false} className={style.actionCard}>
                            <Button type='link' icon={<CalendarOutlined />}>Календарь</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Заполнить профиль" bordered={false} className={style.actionCard}>
                            <Button type='link' icon={<IdcardOutlined />}>Профиль</Button>
                        </Card>
                    </Col>
                </Row>
            </Row>
            <Row className={style.downCards}>
                <Col className={style.reviewsBtn}>
                    <Button type='link'>Смотреть отзывы</Button>
                </Col>
                <Col className={style.downloadApp}>
                    <Card
                        className={style.downCard}
                        bodyStyle={{ padding: '14px 24px' }}
                        bordered={false}
                        actions={[
                            <Button type='text' key='android' icon={<AndroidFilled />}>Android OS</Button>,
                            <Button type='text' key='apple' icon={<AppleFilled />}>Apple iOS</Button>
                        ]}
                    >
                        <Card.Meta title='Скачать на телефон' description='Доступно в PRO-тарифе' />
                    </Card>
                </Col>
            </Row>
        </Content>
    );
}
