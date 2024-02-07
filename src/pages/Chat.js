import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Paper, Avatar } from '@mui/material';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const persons = [
    { id: 1, name: 'Orin', avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1008.jpg' },
    { id: 2, name: 'Dessie', avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/264.jpg' },
    { id: 3, name: 'Molly', avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/557.jpg' },
    { id: 4, name: 'Elena', avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/913.jpg' },
    { id: 5, name: 'Kaya', avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/284.jpg' },
    { id: 5, name: 'Dameon', avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/950.jpg' },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length, text: newMessage, sender: 'me' }]);
      setNewMessage('');
    }
  };

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div style={{ display: 'flex', height: '50vh', padding: '16px' }}>
      <div style={{ width: '200px', marginRight: '16px' }}>
        <List>
          {persons.map((person) => (
            <ListItem button key={person.id} onClick={() => handlePersonClick(person)}>
              <Avatar alt={person.name} src={person.avatar} style={{ marginRight: '8px' }} />
              <ListItemText primary={person.name} />
            </ListItem>
          ))}
        </List>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Paper style={{ flex: 1, overflowY: 'auto', marginBottom: '16px' }}>
          <List>
            {messages
              .filter((message) => message.sender === (selectedPerson ? selectedPerson.name : 'me'))
              .map((message) => (
                <div 
                // style={{marginTop:"10px"}}
                >

                <ListItem key={message.id}>
                  <ListItemText primary={message.text} />
                </ListItem>
                </div>
              ))}
          </List>
        </Paper>
        {selectedPerson && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '8px' ,marginTop:"10px" }}>
              <Avatar alt={selectedPerson.name} src={selectedPerson.avatar} />
              <div>{selectedPerson.name}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                label={`Send message to ${selectedPerson.name}`}
                variant="outlined"
                style={{ flex: 1, marginRight: '8px' }}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button variant="contained" style={{backgroundColor: "#937a34"}} onClick={handleSendMessage}>
                Send
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1
        style={{color:"#937a34",backgroundColor:"#fff",width:"15%",textAlign:"center",borderRadius:"5%"}}
        >Chats</h1>
        <ChatApp />
      </header>
    </div>
  );
}

export default App;
