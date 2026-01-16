import React, {UseState} from 'react';

function Score(props) {

    const [ score, setScore ] = UseState(0)

    // La fonction click met à jour le state du composant click sur le p 
    function click(){
        // En parramètre de la fonction setScore on lui donne le score en ajoutant 1 
        setScore( score + 1)
    }


    return (
        // les accolades permets la concatenation de la string avec la variable score
       <p onClick={Click}>Mon score est de {score}</p>
    )
}

export default Score;
