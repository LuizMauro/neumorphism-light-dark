import React, { useContext} from 'react';


import { Container } from './styles';
import { DiReact } from "react-icons/di";


const Card: React.FC = () =>{

    return (
        <Container>
          <DiReact size="200px"/>
        </Container>
    );
};

export default Card