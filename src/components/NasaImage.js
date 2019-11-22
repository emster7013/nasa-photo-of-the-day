import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Nasainfo= styled.div `
background-color: rgba(0,0,0,.5);
color: white;
width: 80%;
display: flex;
flex-direction: column;
text-align: center;
border-radius: 15%;
margin: auto;
margin-bottom: 50px;
`
const NasaImg = styled.img `
width: 40%;
display: block;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 30px;
`
const Para = styled.p `
width: 50%;
display: block;
text-align: center;
margin: auto;

`
function NasaImage(){
    const[nasaImage, setNasaImage] = useState('');
    const [title, setTitle] = useState('');
    const[date, setDate] = useState('');
    const [explanation, setExplanation] = useState('');
//&date=2012-03-14 add this in at the end of the API to change picture
    useEffect(() => {
        axios
          .get('https://api.nasa.gov/planetary/apod?api_key=sOUVorBXAlp6uwEE33VMWc4N2Z5upiqI6C14ZC3k')
          .then(response => {
            console.log(response.data);
            setNasaImage(response.data.url);
            setTitle(response.data.title);
            setDate(response.data.date);
            setExplanation(response.data.explanation);
         })
        .catch((err)=>{
        console.log(err);
})}, [])

return(
    <Nasainfo>
        <NasaImg src={nasaImage} alt='different pictures of space daily'/>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <Para>{explanation}</Para>
        <h6>Emily Gauthier</h6>
    </Nasainfo>

)
};
export default NasaImage;