import React from 'react';
import Logo from "../../assets/Logo.png"
import BurgerIcon from "../../assets/burger-icon.svg"
import Profile from "../../assets/Profile.svg"
import Cart from "../../assets/Cart.svg"
import "../../styles/header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <nav className="nav">
                        <div className="logo">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="nav-items">
                            <div className="nav__catalog catalog-btn">
                                <img className="catalog-btn__icon" src={BurgerIcon} alt=""/>
                                <span className="catalog-btn__title">
                                    Каталог
                                </span>
                            </div>
                            <div className="search">
                                <span className="search__icon">
                                    <i className="ri-search-line"></i>
                                </span>
                                <input className="search__input" type="text" placeholder="Поиск"/>
                                <span className="search__number">
                                    12202
                                </span>
                            </div>
                            <div className="nav__info">
                                <div className="login">
                                    <div className="login__texts">
                                        <p className="login__greating">
                                            Добро пожаловать
                                        </p>
                                        <h4 className="login__title">
                                            Вход/Регистрация
                                        </h4>
                                    </div>
                                    <div className="login__avatar">
                                        <img src={Profile} alt=""/>
                                    </div>
                                </div>
                                <div className="basket">
                                    <div className="basket__img">
                                        <img src={Cart} alt=""/>
                                        <span className="basket__pick">
                                            1
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;