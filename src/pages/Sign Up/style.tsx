import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import { table } from "console";

export const ParentFlex = styled.div`

display: flex;
align-items: center;
justify-content: space-around;




`

export const FlexChild1 = styled.div`

width: 50%;

img{
    width: 100%;

}

${mobile`

    display: none;


`}

${tablet`

    display: none;
`}

`

export const FlexChild2 = styled.div`

width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;

.validation-message{
    color: red;
    margin-top: 0px;
}

button{
    border: none;
    border-radius: 11px;
    padding: 15px 20px;
    background-color: ${Theme.WHITE_COLOR};
    color: ${Theme.BLACK_COLOR};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 15px 0px;
    font-size: larger;
    font-weight: bold;

}

.shadow{
    box-shadow: ${Theme.BOX_SHADOW} ;

}
.custombutton{
    background-color: ${Theme.YELLOW};
}
h1{
    margin: 0px 0px -15px -190px;
    color: ${Theme.CHANNEL_BLACK};

}

label{
    font-size: large;
}
input{
    width: 100%;
    border: 1px solid ${Theme.CHANNEL_BLACK};
    border-radius: 10px;
    font-size: large;
    padding: 10px;
}



${mobile`
span{
    display: none;
}
width: 100%

`}

${tablet`
span{
    display: none;
}
width: 100%

`

}

`

export const StyledButton = styled.button`

border: none;
background-color: ${Theme.YELLOW};
border-radius: 5px;
padding: 0px 18px;
color: ${Theme.WHITE_COLOR};
margin: 0px 8px;
font-weight: bold;
box-shadow: none;
`