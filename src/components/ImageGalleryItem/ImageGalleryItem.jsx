import { Component } from "react";
import css from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";


export class ImageGalleryItem extends Component{

    render(){
        
        const {id, src, alt, onGalleryItemClick} = this.props;

        return  <li className={css["ImageGalleryItem"]} onClick={onGalleryItemClick}>
                    <img className={css["ImageGalleryItem-image"]} 
                         id={id} 
                         src={src} 
                         alt={alt}
                    />
                </li>
    }
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
    onGalleryItemClick: PropTypes.func,
}