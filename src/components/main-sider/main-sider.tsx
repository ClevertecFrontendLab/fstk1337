import { CSSProperties, FC } from 'react';

import  { Layout, Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { MenuFoldOutlined, MenuUnfoldOutlined, HeartFilled, CalendarOutlined, TrophyFilled, IdcardOutlined } from '@ant-design/icons';
import style from './main-sider.module.scss';

import BigLogo from '@images/logo.svg';
import SmallLogo from '@images/logo-collapsed.svg';
import ExitIcon from '@icons/exit.svg';
import { MainSiderProps } from './main-sider-props';
import { useWindowWidth } from '@hooks';

const { Sider } = Layout;


export const MainSider:FC<MainSiderProps> = ({ collapsedState }) => {
    const [collapsed, setCollapsed] = collapsedState;
    const width = useWindowWidth();

    const menuItemStyle:CSSProperties = {
        height: '42px',
        lineHeight: '42px',
        paddingLeft: collapsed ? '24px' : '16px',
        paddingRight: collapsed ? '24px' : '16px',
        margin: '0 0 16px'
    }

    const bottomItem: ItemType = {
        icon: <ExitIcon />,
        label: 'Выход',
        key: 'exit',
        style: {
            margin: 0,
            paddingLeft: 16,
            paddingRight: 16,
            marginTop: 'auto'
        }
    }

    const menuItems: ItemType[] = [
        {
            icon: <CalendarOutlined />,
            label: 'Календарь',
            key: 'calendar',
            style: menuItemStyle
        },
        {
            icon: <HeartFilled />,
            label: 'Тренировки',
            key: 'trainings',
            style: menuItemStyle
        },
        {
            icon: <TrophyFilled />,
            label: 'Достижения',
            key: 'trophy',
            style: menuItemStyle
        },
        {
            icon: <IdcardOutlined />,
            label: 'Профиль',
            key: 'account',
            style: {...menuItemStyle, 'marginBottom': '0'}
        },
        bottomItem
    ];

    return (
        <Sider
            width={width < 640 ? 106 : 208}
            collapsedWidth={width < 640 ? 0 : 64}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <div className={style.siderContent}>
                <div className={style.siderHeader}>
                    <a href='/' className={style.logo + " " + (collapsed ? style.smallLogo : style.bigLogo)}>
                        {collapsed ? <SmallLogo /> : <BigLogo />}
                    </a>
                    <Menu mode='inline' items={menuItems} className={style.siderMenu} />
                </div>
            </div>
            <button className={style.siderBtn} type='button' onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <MenuUnfoldOutlined style={{ color: '#8c8c8c' }} /> : <MenuFoldOutlined style={{ color: '#8c8c8c' }} />}
            </button>
        </Sider>
    );
}
