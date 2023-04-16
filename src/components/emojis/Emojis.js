import React from 'react';

const Emojis = () => {
    const [imagenUrl, setImagenUrl] = React.useState('');

    const cambiarUrlAFelicidad = () => {
        setImagenUrl('https://www.maxpixel.net/static/photo/2x/Happy-Emoji-Smile-Happy-Face-Yellow-Happiness-5865208.png');
    }

    const cambiarUrlATristeza = () => {
        setImagenUrl('https://th.bing.com/th/id/R.39cd27d0fb39b6b0976b7087ebbbe0d8?rik=wsKD%2b41cxQ3XCA&pid=ImgRaw&r=0');
    }

    const cambiarUrlACorazon = () => {
        setImagenUrl('https://th.bing.com/th/id/R.39591bf0035e71946d4228b3a7bbccfe?rik=WZu5E4addD9%2b2w&riu=http%3a%2f%2fclipart.info%2fimages%2fccovers%2f1516250282red-heart-emoji.png&ehk=zkhLM1h1JbSxqj5zUZYrSVqLAEAq%2bVR4NuHFv6O3S8Y%3d&risl=&pid=ImgRaw&r=0');
    }
    /* EMOJI FELICIDAD : https://www.maxpixel.net/static/photo/2x/Happy-Emoji-Smile-Happy-Face-Yellow-Happiness-5865208.png"*/
    /* EMOJI TRISTEZA : https://th.bing.com/th/id/R.39cd27d0fb39b6b0976b7087ebbbe0d8?rik=wsKD%2b41cxQ3XCA&pid=ImgRaw&r=0*/
    /*EMOJI CORAZON : https://th.bing.com/th/id/R.39591bf0035e71946d4228b3a7bbccfe?rik=WZu5E4addD9%2b2w&riu=http%3a%2f%2fclipart.info%2fimages%2fccovers%2f1516250282red-heart-emoji.png&ehk=zkhLM1h1JbSxqj5zUZYrSVqLAEAq%2bVR4NuHFv6O3S8Y%3d&risl=&pid=ImgRaw&r=0*/
    return (
        <div style={{border: '1px solid blue'}} >
            <p>Emojis</p>
            <div style={{border: '1px solid black', display: 'inline',}}>
                <button onClick={cambiarUrlAFelicidad}>:)</button>
            </div>
            <div style={{border: '1px solid black', display: 'inline'}}>
                <button onClick={cambiarUrlATristeza}>:(</button>
            </div>
            <div style={{border: '1px solid black', display: 'inline'}}>
                <button onClick={cambiarUrlACorazon}>{'<3'}</button>
            </div>
            <div style={{border: '1px solid black', width: '800px', height:'500px'}}>
                <img style={{width: '500px'}} src={imagenUrl} alt='emoji'/>
            </div>
        </div>
        )
}

export default Emojis;