import React, { useContext} from 'react';
import Switch from 'react-switch';
import { ThemeContext }  from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

import { IoIosMoon, IoIosSunny } from "react-icons/io";

interface Props {
    toggleTheme():void;
}

const Header: React.FC<Props> = ({ toggleTheme }) =>{

    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={<IoIosSunny size="35px" color="#1E202C"></IoIosSunny>}
                uncheckedIcon={<IoIosMoon size="35px" ></IoIosMoon>}
                height={35}
                width={100}
                handleDiameter={35}
                onHandleColor={"#2E78F5"}
                offHandleColor={"#2E78F5"}
                offColor={"#1E202C"}
                onColor={"#EBF6FC"}
            />
        </Container>
    );
};

export default Header