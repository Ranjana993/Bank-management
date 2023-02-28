import React, { useState } from 'react'
import { Box, Button, styled, TextField } from '@mui/material';
import axios from 'axios';


const Register = () => {
  const [user, setUser] = useState({ name: "", fatherName: "", accountNo: "", email: "", password: "", phone: "", uidNo: "", cifNo: "" })



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setUser({ ...user, [name]: value })

  }

  // signUpUser
  const signUpUser = async (e) => {
    console.log("users list => ", user);
    await axios.post("http://localhost:9000/register", user);
    console.log("hello");
  }



  return (
    <Component>
      <Box style={{ display: 'flex', height: '100%' }}>
        <Wraper>
          <TextField variant="standard" name='name' value={user.name} onChange={e => handleChange(e)} label="Enter Your Name" />
          <TextField variant="standard" name='fatherName' value={user.lastName} onChange={e => handleChange(e)} label="Enter fatherName " />
          <TextField variant="standard" name='accountNo' value={user.accountNo} onChange={e => handleChange(e)} label="Enter accountNo " />
          <TextField variant="standard" name='cifNo' value={user.cifNo} onChange={e => handleChange(e)} label="Enter cifNo " />
          <TextField variant="standard" name='uidNo' value={user.uidNo} onChange={e => handleChange(e)} label="Enter uidNo " />
          <TextField variant="standard" name='email' value={user.email} onChange={e => handleChange(e)} label="Enter Email" />
          <TextField variant="standard" name='password' value={user.password} onChange={e => handleChange(e)} label="Enter Password" />
          <TextField variant="standard" name='phone' value={user.phone} onChange={e => handleChange(e)} label="Enter Phone" />
          <LoginBtn onClick={() => signUpUser()}>SignUp</LoginBtn>
        </Wraper>
      </Box>
    </Component>
  )
}

export default Register
const Component = styled(Box)`
    height: 70vh;
    width: 77vh;
    margin-top: 23px;
    margin: auto;
    /* border:1px solid black; */

`

const Wraper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div ,& > button ,& >p{
        margin-top: 20px;
    }


`

const LoginBtn = styled(Button)`
    text-transform: none;
    background-color: #fB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;


`
