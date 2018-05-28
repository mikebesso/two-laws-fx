import React from 'react';
import NewWindow from "./NewWindow";
import Firebase from '../../firebase';

class ChatWindow extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };

    this.onAddMessage = this.onAddMessage.bind(this);
  }

  componentWillMount() {
    const messagesRef = Firebase.Database.ref('messages')
      .orderByKey()
      .limitToLast(100);

    messagesRef.on('child_added', snapshot => {
      const message = { text: snapshot.val(), id: snapshot.key };

      this.setState(prevState => ({
        messages: [ message, ...prevState.messages ],
      }));
    });
  }

  onAddMessage(event) {
    event.preventDefault();

    Firebase.Database.ref('messages').push(this.input.value);

    this.input.value = '';
  }

  render() {
    return (
        <NewWindow name={this.props.name} title={this.props.title}>
            <form onSubmit={this.onAddMessage}>
                <input type="text" ref={node => this.input = node}/>
                <input type="submit"/>
                <ul>
                {this.state.messages.map(message =>
                    <li key={message.id}>{message.text}</li>
                )}
                </ul>
            </form>
        </NewWindow>
    );
  }
}


ChatWindow.defaultProps = {
    name: "chat",
    title: "Chat"
}

export default ChatWindow;