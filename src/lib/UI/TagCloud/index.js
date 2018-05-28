import React from "react";
import * as Bloomer from "bloomer";
import _ from "lodash";



class Tag extends  React.Component {

    render() {
        return(
            <Bloomer.Tag>{this.props.tag}</Bloomer.Tag>
        )
    }
}




class TagCloud extends React.Component {

    

    renderTag(tag) {

    }

    render(){

        console.log("TAG CLOUD", {tags: this.props.tags})

        return(
            <Bloomer.Container >
                {
                    _.flatMap(
                        this.props.tags,
                        (tag) => <Tag key={tag} tag={tag} />
                    )
                }
            </Bloomer.Container>

        )

    }

}




export default TagCloud;

