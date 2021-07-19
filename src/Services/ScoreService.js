import React from 'react';
import Sem7 from '../Scores/Sem7.pdf';
import Sem8 from '../Scores/Sem8.pdf';
import Sem9 from '../Scores/Sem9.pdf';

function ScoreService(text, semester){
    return ( <a href ={(semester == 7)? Sem7:(semester == 8)? Sem8:(semester == 9)? Sem9:'#'} target = "_blank">{text}</a> )
}

export default ScoreService;
