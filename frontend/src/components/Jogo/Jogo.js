import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import pipe from "../../assets/pipe.png";
import gameover from "../../assets/game-over.png";
import mario from "../../assets/mario.gif";
import {useRef, useState} from "react";

function Jogo() {

    const [jumping, setJumping] = useState(false);
    const [isDead, setIsDead] = useState(false);

    const marioRef = useRef();
    const canoRef = useRef();

    function isFoul(){
        const mario = marioRef.current;
        const cano = canoRef.current;

        if(!mario || !cano){
            return;
        }

        return(
            cano.offsetLeft > mario.offsetLeft &&
            cano.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
            mario.offsetTop + mario.offsetHeight > cano.offsetTop
        );
    }

    setInterval(function(){
        const valor = isFoul();

        if(!valor){
            return;
        }

        //console.log("Game Over? ",valor)
        setIsDead(true);
    }, 100);

    console.log({isDead});

    document.onkeydown = function(){
        setJumping(true);
        setTimeout(function(){setJumping(false)}, 1500)
    }

    let marioClassName = "mario";

    if(jumping){
        marioClassName = "mario mario-pulo";
    }

    console.log({jumping});

    const marioImage = isDead ? gameover : mario;

    return <div className="jogo">
        <img className="nuvens" src={clouds} alt="Nuvens" />
        <img ref={canoRef} className="canos" src={pipe} alt="Canos" />
        <img ref={marioRef} className={marioClassName} src={marioImage} alt="Mário" />
        <div className="chao"></div>
    </div>
}

export default Jogo;