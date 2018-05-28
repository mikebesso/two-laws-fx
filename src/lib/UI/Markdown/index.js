import ReactMarkdown from "react-markdown";

import React, {Component} from 'react';


class Markdown extends Component {


   

    render(){
        

        return(
            <ReactMarkdown className="markdown" source={this.props.source} />
        )
    }

}


export default Markdown;