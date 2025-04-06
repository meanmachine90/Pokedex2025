import  { useState } from 'react'; 

export const PokemonListItem =(
    {
        code,
        name,
        primaryImg,
        imgSprite,
        onClickHandler = (code)=>{}
    }
) => {
    const [imgSrc, setImgSrc] = useState(primaryImg || imgSprite);
    const handleImgError = () => {
        setImgSrc(imgSprite); 
    };
    
    return (
        <a className="pokemon-card">
            <img className="imgage" src={imgSrc} alt={name + code} onError={handleImgError} />
            <div className="content">
                <h5 className="name">{name}</h5>
                <button className="detalle"  onClick={()=>{onClickHandler(code);}}>Ver Detalle</button>
            </div>
        </a>
    );
}