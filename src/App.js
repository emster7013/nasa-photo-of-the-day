import React from "react";
import "./App.css";
import NasaImage from '../src/components/NasaImage'
import styled from 'styled-components';
const Title = styled.div `
background-image: radial-gradient(circle, #f9f871, #ffda5e, #ffbd56, #ff9f55, #f88359, #ee6f5e, #e15d63, #d14c68, #c03f6c, #ad356f, #972e71, #802972);
display: flex;
flex-direction: column;
text-align: center;
color: #60e4e2;
`
function App() {
  return (
    <Title>
      <h1>
        NASA PHOTO OF THE DAY
      </h1>
      <NasaImage/>
    </Title>
  );
}

export default App;
