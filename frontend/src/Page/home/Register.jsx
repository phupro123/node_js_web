import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerUser } from "../../redux/apiRequest";
// import {  toast } from 'react-toastify';
// import React from 'react';
// import 'react-toastify/dist/ReactToastify.css';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://swall.teahub.io/photos/small/16-160847_yamaha-yzf-r1-2020-bike-4k-wallpaper-yzf.jpg");
  transform: scaleX(-1);
  background-size: cover;
  position: absolute;
`;

const Wrapper = styled.div`
  transform: scaleX(-1);
  width: 25%;
  padding: 40px;
  background-color: rgba(216, 234, 243, 0.8);
  border-radius: 16px;
  border: 1px solid transparent;
  position: relative;
  top: 25px;
  right: -150px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #3a7bd5;
`;

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid #3a7bd5;
`;

const Button = styled.button`
  padding: 10px 25px;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #00d2ff 0,
    #1fa5ea 51%,
    #3a7bd5 100%
  );
  border: 1px solid transparent;
  text-transform: uppercase;
`;
const Url = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  display: block;
  cursor: pointer;
  text-decoration: none;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  display: block;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("3");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
      email,
      phone,
      fullname,
      role,
    };
    
    registerUser(newUser, dispatch, navigate);
    
  };
 

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="Full Name"
            onChange={(e) => setFullname(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="Confirm Password" type="password" />

          <select
            name="role_id"
            className="table-group-action-input form-control"
            onChange={(e) => setRole(e.target.value)}
            style={{ marginTop: "10px" }}
          >
            <option value="3">Customer</option>
            <option value="2">Seller</option>
          </select>

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <br /> <b>PRIVACY POLICY</b>
          </Agreement>
          
          <Button type="submit" >REGISTER</Button>
         
        </Form>
      </Wrapper>
      
    </Container>
  );
};

export default Register;
