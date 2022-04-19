import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HeroSlider = props => {
    const data = props.data

    const activeSlide = 0;
    return (
        <div className='hero-slider'>
            {
                data.map((item, index) => (
                    <HeroSliderItem key={index} item={item} active={index === activeSlide} />
                )
                )}
        </div>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array
}
const HeroSliderItem = props => (
    <div className={`hero-slider-item ${props.active ? 'active' : ''}`}>
        <div className="hero-slider-item-info">
            <div className={`hero-slider-item-info-title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="hero-slider-item-info-description">
                <span>{props.item.description}</span>
            </div>
            <div className="hero-slider-item-info-btn">
                <Link to={props.item.path}>
                    <button>xem chi tiết</button>
                </Link>
            </div>
        </div>
        <div className="hero-slider-item-image">
            <div className={`shape bg-${props.item.color}`}></div>
            <img src={props.item.img} />
        </div>
    </div>
)

export default HeroSlider