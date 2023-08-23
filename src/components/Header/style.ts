import styled from "styled-components";
import { mobile } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const StyledAppBar = styled.div`

position: static;
background-color: ${Theme.WHITE_COLOR};
height: 80px;
display: flex;
align-items: center;
justify-content: space-around;
font-weight: bold;
.logosize{
  height: 25px;
}
img{
  height: 34px;
}
`
export const StyledImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;

`

export const Styledbutton = styled.button`

border: none;
background-color: ${Theme.YELLOW};
border-radius: 5px;
padding: 0px 38px;
color: ${Theme.WHITE_COLOR};
margin: 15px 8px;
font-weight: bold;
`