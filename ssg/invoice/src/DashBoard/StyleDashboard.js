import styled from "styled-components";

export const DashBoardScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--background);
    height: 100%;
    width: 100%;
`;

export const DashBoardContent = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding:10vh;
    width:60%;
`;

export const DashBoardMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color:var(--accent);
    height: auto;
    border-radius:6px;
    overflow-x:hidden;
    border:1px solid var(--border);
    padding:2vw;
    
    .Multi-box{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      column-gap:2vw;
      background-color:var(--background);
    }
    @media(max-width:950px){
        .Multi-box{
            grid-template-columns:1fr 1fr 1fr 1fr;
        }
    }
    @media(max-width:650px){
        .Multi-box{
            grid-template-columns:1fr 1fr ;
        }
    }
    .Multi-box{
        border:1px solid var(--border);
        padding:0vw 20px 20px 20px;
        border-radius:6px;
    }
`;

// export const DashBoardMultibox = styled.div`
//     display:grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     column-gap:6.3vw;
    
// `;
export const DashBoardBox1 =  styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
background-color: var(--accent);
height: 150px;
width: 150px;
border-radius:3px;
margin-top:3vh;
border:1px solid #91A3B0;
transition: .2s all;
&:hover{
    transform:scale(1.1);
}
span{
    color:blue;
    font-size: 5em;
    margin-right:15px;
}
p{
    font-family: 'Nunito Sans', sans-serif;
    color:var(--text);
}
@media(max-width:600px){
    height:100px;
    width:100px;
    span{
        font-size:2em;
    }
}
`;
export const DashBoardBox2 =  styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
background-color: var(--accent);
height: 150px;
width: 150px;
border-radius:3px;
margin-top:3vh;
border:1px solid #91A3B0;
transition: .2s all;
&:hover{
    transform:scale(1.1);
}
span{
    color:red;
    font-size: 5em;
    margin-right:15px;
}
p{
    font-family: 'Nunito Sans', sans-serif;
    color:var(--text);
}
@media(max-width:600px){
    height:100px;
    width:100px;
    span{
        font-size:2em;
    }
}
`;
export const DashBoardBox3 =  styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
background-color: var(--accent);
height: 150px;
width: 150px;
border-radius:3px;
margin-top:3vh;
border:1px solid #91A3B0;
transition: .2s all;
&:hover{
    transform:scale(1.1);
}
span{
    color:green;
    font-size: 5em;
    margin-right:15px;
}
p{
    font-family: 'Nunito Sans', sans-serif;
    color:var(--text);
}
@media(max-width:600px){
    height:100px;
    width:100px;
    span{
        font-size:2em;
    }
}
`;
export const DashBoardBox4 =  styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
background-color: var(--accent);
height: 150px;
width: 150px;
margin-top:3vh;
border-radius:3px;
border:1px solid #91A3B0;
transition: .2s all;
&:hover{
    transform:scale(1.1);
}
span{
    color:red;
    font-size: 5em;
    margin-right:15px;
}
p{
    font-family: 'Nunito Sans', sans-serif;
    color:var(--text);
}
@media(max-width:600px){
    height:100px;
    width:100px;
    span{
        font-size:2em;
    }
}
`;
export const DashBoardBox5 =  styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
background-color: var(--accent);
height: 150px;
width: 150px;
border-radius:3px;
margin-top:3vh;
border:1px solid #91A3B0;
transition: .2s all;
&:hover{
    transform:scale(1.1);
}
span{
    color:lightgreen;
    font-size: 5em;
    margin-right:15px;
}
p{
    font-family: 'Nunito Sans', sans-serif;
    color:var(--text);
}
@media(max-width:600px){
    height:100px;
    width:100px;
    span{
        font-size:2em;
    }
}
`;
export const DashBoardBox6 =  styled.div`
background-color: var(--accent);
height: 200px;
width: 280px;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox7 =  styled.div`
background-color: var(--accent);
height: 200px;
width: 280px;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox8 =  styled.div`
background-color: var(--accent);
height: 200px;
width: 280px;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;

export const TitleDashBoard = styled.div`
position:relative;
font-size:2em;
color:var(--text);
font-family: 'Nunito Sans', sans-serif;
font-weight:900;
text-wrap:nowrap;
z-index:0;
@media (max-width: 700px){
    font-size:1.5em;
    margin-bottom:2vh;
}
`;

export const DashBoardGraph = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--accent);
    border-radius:6px ;
    width:80vw;
    margin-top:3vh;
    border:1px solid #91A3B0;
`;

export const DashBoardGraphContent = styled .div`
    display:flex:
    flex:direction:column;
    flex-direction:flex-start;
    margin-top:3vh;
    .dashboard-date{
        background-color:var(--accent);
        border-radius:6px;
    }
`;

export const DashBoardDate = styled .div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:180px;
    height:3vh;
    background-color:var(--accent);
    border:1px solid #91A3B0;
    border-radius:6px;
    padding:7px;
    margin-right:3px;
    .cal-icon{
        color:red;
        cursor:pointer;
    }
    .pop-cal{
        margin-left:10vw;
    }
`;

export const FieldDate = styled.div`
    border-right:1px solid #91A3B0;
    padding-right:65px;
    margin-right:10px;
`;

export const LogoutBoxButton = styled.div`
    width: 100%;
    height: 6vh;
    margin-bottom: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LogoutBoxHighlight = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transition: 0.5s;;
    border-radius:3px;

    &:hover{
        background-color:var(--primary);
    }
    &:active{
            background-color:var(--primary);
    }
`;