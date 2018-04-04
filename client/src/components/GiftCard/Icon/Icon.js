import React from "react";
import FontAwesome from 'react-fontawesome';
import "./Icon.css"; 

const Icon = props => {
    /**
     * @function switchIcon displays the correct icon in the gift card panel
     * @param {*} category tells which category should be displayed
     * @returns the correct icon
     */
   function switchIcon (category){
        switch (category) {
            case "Dining":
                return 'cutlery';
                break;
            case "Retail":
                return 'shopping-cart';
                break;
            case "Activities":
                return 'bicycle';
                break;
            case "Health and Wellness":
                return 'heartbeat';
                break;
        }
    }
    const iconName = switchIcon(props.category);

    return (
        <FontAwesome className='icon' name={iconName} size='2x'/>
    )
};

export default Icon;