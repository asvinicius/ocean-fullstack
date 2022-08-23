import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import pipe from "../../assets/pipe.png";
import gameover from "../../assets/game-over.png";
import mario from "../../assets/mario.gif";
import {useState} from "react";

function Jogo() {

    const [jumping, setJumping] = useState(false);

    document.onkeydown = function(){
        setJumping(true);
        setTimeout(function(){setJumping(false)}, 1500)
    }

    let marioClassName = "mario";

    if(jumping){
        marioClassName = "mario mario-pulo";
    }

    console.log({jumping});

    return <div className="jogo">
        <img className="nuvens" src={clouds} alt="Nuvens" />
        <img className="canos" src={pipe} alt="Canos" />
        <img className={marioClassName} src={mario} alt="Mário" />
        <div className="chao"></div>
    </div>
}

export default Jogo;