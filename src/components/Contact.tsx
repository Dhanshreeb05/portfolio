import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  // Handle field changes with immediate validation
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setNameError(value === '');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value === '');
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
    setMessageError(value === '');
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const isNameEmpty = name === '';
    const isEmailEmpty = email === '';
    const isMessageEmpty = message === '';
    
    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    // If all fields are filled, send the email
    if (!isNameEmpty && !isEmailEmpty && !isMessageEmpty && form.current) {
      emailjs.sendForm(
        'service_8qn4u9a', 
        'template_ehvk0tp', 
        form.current, 
        'FGBlDUBXY9_W-ZaLm'
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          // Clear the form after submission
          setName('');
          setEmail('');
          setMessage('');
          // Reset validation errors
          setNameError(false);
          setEmailError(false);
          setMessageError(false);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
    }
  };

  
  const inputStyles = {
    color: '#000',
    backgroundColor: 'white',
    opacity: 1
  };

  
  const textFieldSx = {
    '& .MuiInputBase-input': {
      color: '#000',
      opacity: 1,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.5)',
      },
    },
    '& .MuiFormLabel-root': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            ref={form}
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="name"
                name="name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={handleNameChange}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
                sx={textFieldSx}
                InputProps={{
                  style: inputStyles
                }}
              />
              <TextField
                required
                id="email"
                name="email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                fullWidth
                sx={textFieldSx}
                InputProps={{
                  style: inputStyles
                }}
              />
            </div>
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              value={message}
              onChange={handleMessageChange}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              fullWidth
              sx={{
                ...textFieldSx,
                '& .MuiInputBase-input': {
                  color: '#000',
                  opacity: 1,
                  backgroundColor: 'white'
                },
              }}
              InputProps={{
                style: inputStyles
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              endIcon={<SendIcon />}
              style={{ marginTop: '10px' }}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;