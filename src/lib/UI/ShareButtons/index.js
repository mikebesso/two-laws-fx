import React from "react";

import * as Share from "react-share";
import {IconBrand} from "../Icons";


export const LinkedinShareButton = (props) => {
    return(
        <Share.LinkedinShareButton title="share on linkedin" url="www.github.com/mikebesso">
            <IconBrand icon="linkedin" size={2} />
        </Share.LinkedinShareButton>
    )
}

export const TwitterShareButton = (props) => {
    return(
        <Share.TwitterShareButton title="share on twitter" url="www.github.com/mikebesso">
            <IconBrand icon="twitter" size={2} />
        </Share.TwitterShareButton>
    )
}


export const FacebookShareButton = (props) => {
    return(
        <Share.FacebookShareButton quote="share on facebook" url="www.github.com/mikebesso">
            <IconBrand icon="facebook" size={2} />
        </Share.FacebookShareButton>
    )
}



export const FacebookFollowButton = (props) => {
    return(
        <IconBrand icon="facebook" size={2} />
    )
}


export const TwitterFollowButton = (props) => {
    return(
        <IconBrand icon="twitter" size={2} />
    )
}