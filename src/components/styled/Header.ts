import styled from 'styled-components'
import {DefaultTheme} from "styled-components";

interface HeaderProps {
    theme:DefaultTheme

}

const Header = styled.h1<HeaderProps>`
font-size:3em;
margin:0px 32px;
color:${({theme})=>theme.colors.grey};
text-shadow: 3px 3px black;



`

export default Header;