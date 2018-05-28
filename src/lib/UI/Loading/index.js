import React from "react";
import * as Bloomer from "bloomer";


class Loading extends React.Component {

    render = () => {
        return(
            <Bloomer.Message>
                
                <Bloomer.MessageBody>
                        Loading
                </Bloomer.MessageBody>
            </Bloomer.Message>
        )
    }
};


export default Loading;