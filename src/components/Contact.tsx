import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [contactFormatError, setContactFormatError] = useState<boolean>(false);

  // State to track form submission success
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [fadeOutClass, setFadeOutClass] = useState<string>('');

  const form = useRef<HTMLFormElement>(null);

  // Contact validation function for either email or phone
  const isValidContact = (contact: string): boolean => {
    // Email regex validates most common email formats
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // Phone regex accepts various phone formats with or without country codes
    // Allows formats like: +1 123-456-7890, (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
    const phoneRegex = /^(\+\d{1,3}[ -]?)?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
    
    return emailRegex.test(contact.toLowerCase()) || phoneRegex.test(contact);
  };

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
    
    // Only validate contact format if there's something entered
    if (value !== '') {
      setContactFormatError(!isValidContact(value));
    } else {
      setContactFormatError(false);
    }
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
    const isContactInvalid = !isValidContact(email);
    
    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setContactFormatError(isContactInvalid);
    setMessageError(isMessageEmpty);

    // If all fields are filled and contact info is valid, send the email
    if (!isNameEmpty && !isEmailEmpty && !isContactInvalid && !isMessageEmpty && form.current) {
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
          setContactFormatError(false);
          setMessageError(false);

          // Display success message
          setFormSubmitted(true);

          // Start fade out animation after 4 seconds
          setTimeout(() => {
            setFadeOutClass('fade-out');
          }, 4000);

          // Hide message completely after animation completes
          setTimeout(() => {
            setFormSubmitted(false);
            setFadeOutClass('');
          }, 4500);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
    }
  };

  // Custom input styles to ensure text is visible
  const inputStyles = {
    color: '#000',
    backgroundColor: 'white',
    opacity: 1
  };

  // Custom style overrides using sx prop
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

          {/* Success Message Alert */}
          {formSubmitted && (
            <div className={`success-message ${fadeOutClass}`}>
              Email form has been submitted. Excited to connect!
            </div>
          )}

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
                error={emailError || contactFormatError}
                helperText={
                  emailError 
                    ? "Please enter your email or phone number" 
                    : contactFormatError 
                      ? "Please enter a valid email address or phone number" 
                      : ""
                }
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