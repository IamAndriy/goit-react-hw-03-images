import { Component } from "react";
import css from './Button.module.css';
import PropTypes from "prop-types";

export class Button extends Component{

    render(){
        
        const {title, onClick} = this.props;

        return  <button className={css.Button} onClick={onClick}>
                    {title}
                </button>
    }
}

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
}