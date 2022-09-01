import { useEffect, useState } from "react";
import "./HighScore.css";

function HighScore(props){

    const [itens, setItens] = useState(undefined);

    useEffect(function(){

        async function carregarPontuacoes(){
            const response = await fetch("http://localhost:3333/pontuacoes", {mode:'no-cors'});
            const body = await response.json();    
            setItens(body);
        }

        carregarPontuacoes();
    }, []);

    console.log(itens);

    const itensCarregando = itens === undefined;

    return (
        <div className="HighScore">
            <div>Você fez <strong>{props.pontos}</strong> pontos.</div>
            <h2>Game Over</h2>

            {itensCarregando ? (
                <div>Carregando...</div>
            ) : (
                <div>
                    {itens.map((item) => (
                        <div key={`score_${index}`}>{item.nome} - {item.pontos} pontos</div>
                    ))}
                </div>
            )}

            
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