import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import "../chat/chat.css"
import Button from '@material-ui/core/Button';

function Chat(props) {
  const {handleLogOut} = props
 const [state, setState] = useState({ message: '', name: '' });
  const [chat, setChat] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:4000');
    socketRef.current.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);
  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socketRef.current.emit('message', { name, message });
    e.preventDefault();
    setState({ message: '', name });
  };

  const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))
	}
  return (
    <div className='card'>
      <form onSubmit={onMessageSubmit}>
        <h1>Messenger</h1>
        <div className='name-field'>
          <TextField
            name='name'
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label='Name'
          />
        </div>
        <div>
          <TextField
            name='message'
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id='outlined-multiline-static'
            variant='outlined'
            label='Message'
          />
        </div>
        <Button  className="chat-btn" variant="contained" color="primary">
        send message
      </Button>
      <Button  className="chat-btn"  variant="contained" color="secondary"  onClick = {handleLogOut}>log Out</Button>
      </form>
      <div className="render-chat">
				<h1>Chat View</h1>
				{renderChat()}
			</div>
      
    </div>
  );
}

export default Chat;

// Chat logic above
//next steps for tomorrow:
// React component needs integrating into the chat logic.
//Material ui research needed to find appropriate container.
