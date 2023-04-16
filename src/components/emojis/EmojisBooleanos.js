import React from 'react';

const EmojisBooleanos = () => {
    const [banderaParaEmojiFeliz, setBanderaParaEmojiFeliz] = React.useState(false);
    const [banderaParaEmojiTriste, setBanderaParaEmojiTriste] = React.useState(false);
    const [banderaParaEmojiCorazon, setBanderaParaEmojiCorazon] = React.useState(false);

    const encenderBanderaFelizYApagarLasOtras = () => {
        setBanderaParaEmojiFeliz(true);
        setBanderaParaEmojiTriste(false);
        setBanderaParaEmojiCorazon(false);
    }

    const encenderBanderaTristeYApagarLasOtras = () => {
        setBanderaParaEmojiFeliz(false);
        setBanderaParaEmojiTriste(true);
        setBanderaParaEmojiCorazon(false);
    }

    const encenderBanderaCorazonYApagarLasOtras = () => {
        setBanderaParaEmojiFeliz(false);
        setBanderaParaEmojiTriste(false);
        setBanderaParaEmojiCorazon(true);
    }

    const encederTodasLasBanderasDeLosEmojis = () => {
        setBanderaParaEmojiFeliz(true);
        setBanderaParaEmojiTriste(true);
        setBanderaParaEmojiCorazon(true);
    }
    /* EMOJI FELICIDAD : https://www.maxpixel.net/static/photo/2x/Happy-Emoji-Smile-Happy-Face-Yellow-Happiness-5865208.png"*/
    /* EMOJI TRISTEZA : https://th.bing.com/th/id/R.39cd27d0fb39b6b0976b7087ebbbe0d8?rik=wsKD%2b41cxQ3XCA&pid=ImgRaw&r=0*/
    /*EMOJI CORAZON : https://th.bing.com/th/id/R.39591bf0035e71946d4228b3a7bbccfe?rik=WZu5E4addD9%2b2w&riu=http%3a%2f%2fclipart.info%2fimages%2fccovers%2f1516250282red-heart-emoji.png&ehk=zkhLM1h1JbSxqj5zUZYrSVqLAEAq%2bVR4NuHFv6O3S8Y%3d&risl=&pid=ImgRaw&r=0*/
    return (
        <div style={{border: '1px solid blue'}} >
            <p>Emojis 2 con booleano</p>
            <div style={{border: '1px solid black', display: 'inline',}}>
                <button onClick={encenderBanderaFelizYApagarLasOtras}>:)</button>
            </div>
            <div style={{border: '1px solid black', display: 'inline'}}>
                <button onClick={encenderBanderaTristeYApagarLasOtras}>:(</button>
            </div>
            <div style={{border: '1px solid black', display: 'inline'}}>
                <button onClick={encenderBanderaCorazonYApagarLasOtras}>{'<3'}</button>
            </div>
            <div style={{border: '1px solid black', display: 'inline'}}>
                <button onClick={encederTodasLasBanderasDeLosEmojis}>{'ver todos los emojis'}</button>
            </div>
            <div style={{border: '1px solid black', width: '800px', height:'500px'}}>
                { banderaParaEmojiFeliz ? <img style={{width: '500px'}} src='https://www.maxpixel.net/static/photo/2x/Happy-Emoji-Smile-Happy-Face-Yellow-Happiness-5865208.png' alt='emoji'/> : null}
                { banderaParaEmojiTriste ? <img style={{width: '500px'}} src='https://th.bing.com/th/id/R.39cd27d0fb39b6b0976b7087ebbbe0d8?rik=wsKD%2b41cxQ3XCA&pid=ImgRaw&r=0' alt='emoji'/> : null }
                { banderaParaEmojiCorazon ? <img style={{width: '500px'}} src='https://th.bing.com/th/id/R.39591bf0035e71946d4228b3a7bbccfe?rik=WZu5E4addD9%2b2w&riu=http%3a%2f%2fclipart.info%2fimages%2fccovers%2f1516250282red-heart-emoji.png&ehk=zkhLM1h1JbSxqj5zUZYrSVqLAEAq%2bVR4NuHFv6O3S8Y%3d&risl=&pid=ImgRaw&r=0' alt='emoji'/> : null }
            </div>
        </div>
        )
}

export default EmojisBooleanos;