import React, {useState, useEffect} from 'react';
import axios from 'axios';

function NasaImage(){
    const[nasaImage, setNasaImage] = useState('');
    const [title, setTitle] = useState('');
    const[date, setDate] = useState('');
    const [explanation, setExplanation] = useState('');

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
    <div className='nasa-info'>
        <img src={nasaImage} alt='different pictures of space daily'/>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <p>{explanation}</p>
        <h6>HELLO WORLD, this is just a little test.</h6>
    </div>

)
};
export default NasaImage;