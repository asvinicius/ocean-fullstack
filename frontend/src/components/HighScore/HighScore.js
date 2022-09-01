import "./HighScore.css";

function HighScore(props){

    fetch("http://localhost:3333/pontuacoes").then(console.log);

    return (
        <div className="HighScore">
            <div>Você fez <strong>{props.pontos}</strong> pontos.</div>
            <h2>Game Over</h2>
            <div>Paul - 90 pontos</div>
            <div>Ana - 82 pontos</div>
            <div>João - 77 pontos</div>
            <div>
                <h4>Informe seu nome</h4>
                <form>
                    <input type="text" />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    )
}

export default HighScore;