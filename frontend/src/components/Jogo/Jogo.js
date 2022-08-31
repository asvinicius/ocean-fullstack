import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import pipe from "../../assets/pipe.png";
import gameover from "../../assets/game-over.png";
import mario from "../../assets/mario.gif";
import {useEffect, useRef, useState} from "react";

function Jogo() {

    const [jumping, setJumping] = useState(false);
    const [isDead, setIsDead] = useState(false);
    const [pontos, setPontos] = useState(0);

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

    //console.log({isDead});

    useEffect(function(){
        const interval = setInterval(function(){
            if(isDead) {
                return;
            }
    
            setPontos(pontos+1);
            console.log({pontos});
        }, 500);
        return() => clearInterval(interval);
        },
        [isDead, pontos]
    );
    

    document.onkeydown = function(){
        setJumping(true);
        setTimeout(function(){setJumping(false)}, 1500);
    }

    let marioClassName = "mario";

    if(jumping){
        marioClassName = "mario mario-pulo";
    }

    //console.log({jumping});

    const marioImage = isDead ? gameover : mario;
    const pararAnimacao = isDead ? "stop-animation" : "";

    return <div className="jogo">
        <img className="nuvens" src={clouds} alt="Nuvens" />
        <img ref={canoRef} className={"canos " + pararAnimacao} src={pipe} alt="Canos" />
        <img ref={marioRef} className={marioClassName} src={marioImage} alt="Mário" />
        <div className="chao"></div>
        <label className="mostraPontos">{pontos}</label>
    </div>
}

export default Jogo;