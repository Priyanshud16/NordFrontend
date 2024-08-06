import { Button, Input, FormControl, FormLabel, FormErrorMessage, Box, Heading, Alert, AlertIcon, AlertTitle, border } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const res = await fetch("https://nordbackend-2.onrender.com/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage(data.message || 'Registration successful!');
     
        setTimeout(() => navigate("/login"), 2000);

       
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError(error.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box p="50px">
      <Heading size="lg" textAlign="center" mb="10px">Signin Page</Heading>
      <Box width="30%" margin="0 auto" p="30px" borderWidth="1px" borderRadius="md">
        {successMessage && (
          <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='100px'
            width="450px"
            mb="4"
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              {successMessage}
            </AlertTitle>
          </Alert>
        )}

        {error && (
          <Alert
            status='error'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='100px'
            width="450px"
            mb="4"
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              {error}
            </AlertTitle>
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb="4">
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="text"
              placeholder="Please Enter Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              background="white"
              borderColor="black"
            />
          </FormControl>

          <FormControl isRequired mb="4">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Please Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              background="white"
              borderColor="black"
            />
          </FormControl>

          <FormControl isRequired mb="4">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Please Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              background="white"
              borderColor="black"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isSubmitting}
          >
            Submit
          </Button>

          <Box mt="20px">
            <h4 style={{width:"500px"}}>If you already have an account, please <Link to="/login" style={{ color: "blue" }}>Login</Link></h4>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Signin;
