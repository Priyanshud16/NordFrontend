import React, { useContext, useState } from 'react';
import { Input, Button, Box, Heading, Text, Spinner } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Component/AuthContextProvider';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate=useNavigate()
  const {LoginUser}=useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://nordbackend-2.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        throw new Error("Failed to login. Please check your credentials.");
      }

      const result = await res.json();
      alert(result.message);
      LoginUser(result.token)
       navigate("/")
      setSuccessMessage("Login successful!");
      setError("");
    } catch (error) {
      setError(error.message || "An unexpected error occurred.");
      setSuccessMessage(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box textAlign="center" p={5}>
      <Heading mb={6}>Login Page</Heading>
      <Box width="full" maxW="md" mx="auto" p={4} borderWidth={1} borderRadius="md">
        <form onSubmit={handleSubmit}>
          <Box mb={4}>
            <Text mb={1}>Email:</Text>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please Enter Your Email"
              background="white"
              border="2px solid black"
            />
          </Box>
          <Box mb={4}>
            <Text mb={1}>Password:</Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please Enter Your Password"
              background="white"
              border="2px solid black"
            />
          </Box>
          {error && <Text color="red.500" mb={4}>{error}</Text>}
          {successMessage && <Text color="green.500" mb={4}>{successMessage}</Text>}
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isSubmitting}
            loadingText="Submitting"
          >
            Submit
          </Button>
          <Box mt={4}>
            <Text>
              If you don't have an account, please{' '}
              <Link to="/signin" style={{ color: "blue" }}>Sign Up</Link>
            </Text>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
