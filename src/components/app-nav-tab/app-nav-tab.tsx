import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { isBooksError,isBooksLoading } from 'src/app/redux/book-slice';
import { isCategoriesError,isCategoriesLoading } from 'src/app/redux/category-slice';
import { getDataTestId } from 'src/utils/app-nav-tab-test';

import { disableShow, disableShowCats, toggleShowCats } from '../../app/redux/nav-slice';
import { ReactComponent as ArrowIcon } from '../../assets/icon/arrowdown.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppNavCategories } from '../app-nav-categories/app-nav-categories';

import { AppNavTabProps } from './app-nav-tab-props';

import './app-nav-tab.scss';

export const AppNavTab: FC<AppNavTabProps> = (props) => {
    const booksLoading = useSelector(isBooksLoading());
    const categoriesLoading = useSelector(isCategoriesLoading());
    const booksError = useSelector(isBooksError());
    const categoriesError = useSelector(isCategoriesError());
    const isLoading = booksLoading || categoriesLoading;
    const isError = booksError || categoriesError;
    const success = !isLoading && !isError;

    const showCats = useAppSelector(state => state.nav.showCats);
    const dispatch = useAppDispatch();

    return (
        <li
            className='nav-tab'
            data-test-id={getDataTestId(props.route, props.view)}
        >
            {props.type === 'link' &&
                <Link
                    to={props.route}
                    className={classNames('tab-wrapper', props.active ? 'active' : '')}
                    onClick={props.view === 'adaptive' ? () => dispatch(disableShow()) : () => dispatch(disableShowCats())}
                >
                    <div className='link-wrapper'>
                        <span className='nav-link'>{ props.text }</span>
                    </div>
                </Link>
            }
            {props.type === 'dropdown' &&
                <React.Fragment>
                    <Link
                        to={`${props.route}/all`}
                        data-test-id={props.view === 'main' ? 'navigation-showcase' : 'burger-showcase'}
                        className={classNames('tab-wrapper', props.active ? 'active' : '')}
                        onClick={() => dispatch(toggleShowCats())}
                    >
                        <div className='link-wrapper'>
                            <div className='nav-link'>
                                { props.text }
                            </div>
                            {success &&
                                <div className={classNames('dropdown-btn', showCats ? 'down' : '')}>
                                    <ArrowIcon />
                                </div>
                            }
                        </div>
                    </Link>
                    <AppNavCategories show={success && showCats} type={props.view} />
                </React.Fragment>
            }
        </li>
    );
}