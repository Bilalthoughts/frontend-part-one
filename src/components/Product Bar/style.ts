import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const StyledAppBar = styled.div`

position: static;
background-color: ${Theme.YELLOW};
height: 30px;
display: flex;
align-items: center;
justify-content: space-around;
font-size: smaller;

${mobile`

background-color: white;
`}

${tablet`

background-color: white;
`}
`