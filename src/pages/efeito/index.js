import {useState} from 'react';

export default function PaginaMedia () {
    const {media, setMedia} = useState(0);
    const {situacao, setSituacao} = useState("---");
    
    function verificarMedia (media) {
        if (media >= 5 ) {
            setSituacao('ALUNO PASSOU');
        }

        else if (media < 5 ) {
            setSituacao('ALUNO ESTÁ DE RECUPERAÇÃO');

        }

        else if (media < 3){
            setSituacao('ALUNO NÃO PASSOU');

        }
    } 


    return(
        <section>
            <div>
                <h1>
                    Média
                </h1>
                <input type="number" value={media} onChange={e => setMedia(Number(e.target.value))} />

                <div> {situacao} </div>

                <button onClick={verificarMedia}>Calcular</button>
            </div>
        </section>
    )
}