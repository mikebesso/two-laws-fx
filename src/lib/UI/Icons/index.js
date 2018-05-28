import React from "react";
import classNames from "classnames";
import * as Bloomer from "bloomer";


export const IconRegular = (props) => {

    const className = classNames(
        "far",
        "fa-" + props.icon,
        "fa-" + props.size + "x"
    )
    
    return(
        <Bloomer.Icon className={className} />
    )
}

IconRegular.defaultProps = {
    icon: "home",
    size: 1
}

export const IconSolid = (props) => {

    const className = classNames(
        "fas",
        "fa-" + props.icon,
        "fa-" + props.size + "x"
    )
    
    return(
        <Bloomer.Icon className={className} />
    )
}
IconSolid.defaultProps = {
    icon: "home",
    size: 1
}

export const IconBrand = (props) => {


    const className = classNames(
        "fab",
        "fa-" + props.icon,
        "fa-" + props.size + "x"
    )
    
    return(
        <Bloomer.Icon className={className} />
    )
}

IconBrand.defaultProps = {
    icon: "google",
    size: 1
}



