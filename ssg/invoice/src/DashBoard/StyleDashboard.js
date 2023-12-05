import styled from "styled-components";

export const DashBoardScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--background);
    height: 100vh;
    width: 100vw;
`;

export const DashBoardNavigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--accent);
    height: 10vh;
    z-index:1;
    width: 100%;
    border-bottom:1px solid #91A3B0;
    position:fixed;
    
    .logo1{
        margin-left:94vw;
        width:30px;
        height:30px;
    }
    .logo2{
        margin-left:90.5vw;
        width:30px;
        height:30px;
    }
    @media(max-width:1024px){
        .logo1{
            margin-left:90vw;
        }
    }
`;
export const DashBoardThreeDash = styled.div`
    @media (max-width: 1024px){
        .sidebarIconToggle {
            transition: all 0.3s;
            box-sizing: border-box;
            cursor: pointer;
            position: absolute;
            z-index: 99;
            height: 100%;
            width: 100%;
            top: 4vh;
            left: 4vw;
            height: 22px;
            width: 22px;
            
        }
        .spinner {
            transition: all 0.3s;
            box-sizing: border-box;
            position: absolute;
            height: 3px;
            width: 100%;
            background-color:#4C5866;
        }
        .horizontal {
            transition: all 0.3s;
            box-sizing: border-box;
            position: relative;
            float: left;
            margin-top: 3px;
        }
        .diagonal.part-1 {
            position: relative;
            transition: all 0.3s;
            box-sizing: border-box;
            float: left;
           
        }
        .diagonal.part-2 {
            transition: all 0.3s;
            box-sizing: border-box;
            position: relative;
            float: left;
            margin-top: 3px;
        }
        &:
    }
`;

export const DashBoardNavigationLogo = styled.img`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 5vh;
    width: 45px;
    position:fixed;
    margin-left: 12px;
`;

export const DashBoardNavigationTitle = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: centre;
    justify-content: centre;
    font-size: 3.5vh;
    font-family: 'Nunito Sans', sans-serif;
    margin-left: 70px;
    color:#4C5866;
    position:fixed;
    font-weight:700;
    @media(max-width:1024px){
        font-size:3vh;
    }
    @media(max-width:450px){
        font-size:1.2em;
        margin-left: 13vw;

    }

`;

export const DashBoardNavigationSearch = styled.div`
    width: 100%;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-left:260px;
    @media(max-width:450px){
        margin-left:45vw;
    }
    // @media(max-width:820px){
    //     margin-left:37vw;
    // }
`;
export const Logoseparation = styled.div`
    
`;


export const DashBoardNavigationDN = styled.label`
    background-color: var(--accent);
    height: 5vh;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    line-height: 1;
    position:sticky;
    margin-left:87vw;
    
`;

export const DashBoardNavigationDNInput = styled.input`
    display: none;
`;

export const DashBoardNavigationNotification = styled.button`
    width: 45px;
    height: 80px;       
    border-radius: 50%;
    background: transparent;
    color: var(--text);
    margin-left: 10px;
    cursor: pointer;
    border: none;
`;

export const DashBoardNavigationProfile = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 5vh;
    width: 45px;
    position:fixed;
    margin-left: 100px;
`;

export const DashBoardContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height:100vh;
    width: 100%;
    margin-top:10.1vh;
    overflow-y:scroll;
    overflow-x:hidden;
`;

export const DashBoardSideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--sidebar);
    height: 90vh;
    min-width: 250px;
    border-right:1px solid #91A3B0;
    position:fixed;
`;

export const DashBoardSideBarSeperation = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color:transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const DashBoardSideBarSeperationBottom = styled.button`
    width: 100%;
    height: 50vh;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const DashBoardSideBarButton = styled.button`
    width: 100%;
    height: 8vh;
    border-radius:6px;
    border:none;
    outline: none;
    margin-top:3px;
    margin-bottom:3px;
    background-color:transparent;
    color: #4C5866;
    font-family: 'Nunito Sans', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start-flex;
    padding-left:70px;
    cursor: pointer;
    transition: background-color .5s ease-in-out;
    font-size: 2.1vh;
    font-weight:700;
    &:hover{
        background-color: var(--sidebar-focus);
        width: 100%;
    }
    &:focus {
        background-color: var(--sidebar-focus);
        width: 100%;
        transition: background-color .5s ease-in-out;
    }
`;

export const DashBoardMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color:var(--background);
    height: auto;
    width: 100vw;
    margin-left:250px;
    overflow:hidden;
    .Multi-box{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap:2vw;
    }
    @media(max-width:1024px){
      margin-left:0px;
    }
    @media(max-width:1300px){
        .Multi-box{
            grid-template-columns:1fr 1fr 1fr;
        }
    }
    @media(max-width:1200px){
        .Multi-box{
            grid-template-columns:1fr 1fr ;
        }
    }
    @media(max-width:1024px){
        .Multi-box{
            grid-template-columns:1fr 1fr 1fr;
        }
    }
    @media(max-width:950px){
        .Multi-box{
            grid-template-columns:1fr 1fr;
        }
    }
    @media(max-width:650px){
        .Multi-box{
            grid-template-columns:1fr ;
        }
    }
`;

// export const DashBoardMultibox = styled.div`
//     display:grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     column-gap:6.3vw;
    
// `;
export const DashBoardBox1 =  styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
background-color: var(--accent);
height: 200px;
width: 280px;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox2 =  styled.div`
background-color: var(--accent);
height: 200px;
width: 280px;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox3 =  styled.div`
background-color: var(--accent);
height: 200px;
width: 280px;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox4 =  styled.div`
background-color: var(--accent);
height: 200px;
width: 280px;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox5 =  styled.div`
background-color: var(--accent);
height: 200px;
width: 280px;
border-radius:6px;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
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
top:20px;
font-size:2em;
color:var(--text);
font-family: 'Nunito Sans', sans-serif;
font-weight:900;
display:flex;
@media (max-width: 1024px){
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
    height:40vh;
    width: 70vw;
    border-radius:6px  ;
    margin-bottom:2.5vh;
    margin-top:3vh;
    border:1px solid #91A3B0;
    @media(max-width:450px){
        width:90vw;
    }
`;

export const DashBoardGraphContent = styled .div`
    display:flex:
    flex:direction:column;
    margin-top:3vh;
    .dashboard-date{
        background-color:var(--accent);
        border-radius:6px;
        max-width:200px;
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
    &:active{cd 
            background-color:var(--primary);
    }
`;

// sty