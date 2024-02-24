import './App.css';
import Typograpy from '@mui/material/Typography'
import Button from '@mui/material/Button';
 import TextField from '@mui/material/TextField';
 import FaceIcon from '@mui/icons-material/Face';
 import Avatar from '@mui/material/Avatar';
import  Form  from './component/Form';

function App() {
  const name="nane";
  alert(name);
  return(
    <div className="App">
      <h1>good morning</h1>
      <Typograpy variant='h1'>welcome to tech world</Typograpy>
      <TextField size='small' label="Name" autoFocus placeholder='Enter your name' multiline
      />
      <Button variant='contained'>hii bro</Button>
      <Avatar style={{backgroundColor:"blue"}}>a</Avatar>
      <FaceIcon/>
      <Form/>

       </div>
  );

}
export default App;