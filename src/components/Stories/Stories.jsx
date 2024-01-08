import React from 'react';
import Photo1 from "../../assets/photo 1.svg"
import "./stories.scss"

const Stories = () => {
    return (
        <section className="stories">
            <div className="container">
                <div className="stories__wrapper">
                    <div className="events">
                        <div className="events__item">
                            <div className="events__body">
                                <img className="events__img" src={Photo1} alt=""/>
                                <h5 className="events__title">Скидки</h5>
                            </div>
                        </div>
                        <div className="events__item">
                            <div className="events__body">
                                <img className="events__img" src={Photo1} alt=""/>
                                <h5 className="events__title">Скидки</h5>
                            </div>
                        </div>
                        <div className="events__item">
                            <div className="events__body">
                                <img className="events__img" src={Photo1} alt=""/>
                                <h5 className="events__title">Скидки</h5>
                            </div>
                        </div>
                        <div className="events__item">
                            <div className="events__body">
                                <img className="events__img" src={Photo1} alt=""/>
                                <h5 className="events__title">Скидки</h5>
                            </div>
                        </div>
                        <div className="events__item">
                            <div className="events__body">
                                <img className="events__img" src={Photo1} alt=""/>
                                <h5 className="events__title">Скидки</h5>
                            </div>
                        </div>
                        <div className="events__item shadow">
                            <div className="events__body events__body--shadow">
                                <div className="events__img--shadow"></div>
                                <div className="events__title--shadow"></div>
                            </div>
                        </div>
                        <div className="events__item shadow">
                            <div className="events__body events__body--shadow">
                                <div className="events__img--shadow"></div>
                                <div className="events__title--shadow"></div>
                            </div>
                        </div>
                        <div className="events__item shadow">
                            <div className="events__body events__body--shadow">
                                <div className="events__img--shadow"></div>
                                <div className="events__title--shadow"></div>
                            </div>
                        </div>
                        <div className="events__item shadow">
                            <div className="events__body events__body--shadow">
                                <div className="events__img--shadow"></div>
                                <div className="events__title--shadow"></div>
                            </div>
                        </div>
                        <div className="events__item shadow">
                            <div className="events__body events__body--shadow">
                                <div className="events__img--shadow"></div>
                                <div className="events__title--shadow"></div>
                            </div>
                        </div>
                        <div className="events__item shadow">
                            <div className="events__body events__body--shadow">
                                <div className="events__img--shadow"></div>
                                <div className="events__title--shadow"></div>
                            </div>
                        </div>
                        <div className="events__item shadow">
                            <div className="events__body events__body--shadow">
                                <div className="events__img--shadow"></div>
                                <div className="events__title--shadow"></div>
                            </div>
                        </div>
                        <div className="events__item shadow">
                            <div className="events__body events__body--shadow">
                                <div className="events__img--shadow"></div>
                                <div className="events__title--shadow"></div>
                            </div>
                        </div>
                        <div className="events__item shadow">
                            <div className="events__body events__body--shadow">
                                <div className="events__img--shadow"></div>
                                <div className="events__title--shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stories;