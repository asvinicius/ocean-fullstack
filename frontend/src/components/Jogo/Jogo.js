import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import pipe from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";

function Jogo() {
    return <div className="jogo">
        <img className="nuvens" src={clouds} alt="Nuvens" />
        <img className="canos" src={pipe} alt="Canos" />
        <img className="mario" src={mario} alt="Mario" />
    </div>
}

export default Jogo;