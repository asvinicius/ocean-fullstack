import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import pipe from "../../assets/pipe.png";
import gameover from "../../assets/game-over.png";
import mario from "../../assets/mario.gif";

function Jogo() {
    return <div className="jogo">
        <img className="nuvens" src={clouds} alt="Nuvens" />
        <img className="canos" src={pipe} alt="Canos" />
        <img className="mario" src={mario} alt="Mário" />
        <div className="chao"></div>
    </div>
}

export default Jogo;