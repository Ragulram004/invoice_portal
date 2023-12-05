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
`;

export const DashBoardMultibox = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap:6.3vw;
`;
export const DashBoardBox1 =  styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
background-color: var(--accent);
height: 13vw;
width: 17vw;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox2 =  styled.div`
background-color: var(--accent);
height: 13vw;
width: 17vw;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox3 =  styled.div`
background-color: var(--accent);
height: 13vw;
width: 17vw;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox4 =  styled.div`
background-color: var(--accent);
height: 13vw;
width: 17vw;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox5 =  styled.div`
background-color: var(--accent);
height: 13vw;
width: 17vw;
border-radius:6px;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox6 =  styled.div`
background-color: var(--accent);
height: 13vw;
width: 17vw;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox7 =  styled.div`
background-color: var(--accent);
height: 13vw;
width: 17vw;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;
export const DashBoardBox8 =  styled.div`
background-color: var(--accent);
height: 13vw;
width: 17vw;
border-radius:6px  ;
// margin-bottom:2.5vh;
margin-top:3vh;
border:1px solid #91A3B0;
`;

export const DashBoardGraphContant = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--accent);
    // height:30vh;
    // width: 90%;
    border-radius:6px  ;
    margin-bottom:2.5vh;
    margin-top:3vh;
    border:1px solid #91A3B0;
`;
export const HomeDashBoard = styled.div`
    position:relative;
    top:20px;
    font-size:2em;
    color:var(--text);
    font-family: 'Nunito Sans', sans-serif;
    font-weight:900;
    display:flex;
    @media (max-width: 1024px){
        font-size:1.5em;
    }
`;

export const DashBoardActionTabs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height: 8vh;
    width: 100%;
    @media (max-width: 1024px){
        height: 8vh;
    }
    .with-home{
        margin-bottom:3.5vh;
    }
`;

export const DashBoardActionTabsInput = styled.input`
    width: 5vw;
    height: auto;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--text);
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1em;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    transition: color .5s;
    display: none;
    align-items: center;
    justify-content: center;
    transition: background-color .5s ease-in-out;
    &:checked + label {
        background-color: var(--tab-active);
        transition: background-color .5s ease-in-out;
        border-bottom: 2px solid var(--primary);
}
`;

export const DashBoardActionTabsLabel = styled.label`
    width: 110px;
    padding:12px;
    border: none;
    margin-top:0.9vh;
    margin-bottom:0.9vh;
    outline: none;
    background-color: var(--accent);
    color: var(--text);
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1em;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    transition: color .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width:450px){
        font-size:3.2vw;
    }
`;

export const DashBoardTabContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height: 72vh;
    width: 100%;
    overflow:scroll;
`;



// For Component: HomeLink

export const HomeLinkContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x:hidden;

`;

export const HomeLinkTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    grid-template-rows: auto;
    gap: .5vw;
    width: 100%;
    background-color: var(--grid-header);
    border-top: 1px solid #91A3B0;
    border-bottom:1px solid #91A3B0;
    // @media(min-width:1024px){
    //     .grid-prog{
    //         margin-left:30px;
    // }
    // @media(min-width:1024px){
    //     .with-grid-prog{
    //         margin-left:19vw;
    //     }
    // }
    // @media(max-width:1024px){
    //     .with-grid-prog{
    //         margin-left:40vw;
    //     }
    // }
`;

export const HomeLinkTableHeaderTitle = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    font-family: 'Nunito Sans', sans-serif;
    margin: 1vw;
    font-weight:800;
    white-space: nowrap;
    color: var(--text);
    @media(max-width:364px){
        font-size:0.8em;
    }
`;

export const HomeLinkInvoicesTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    grid-template-rows: auto;
    gap: .5vw;
    width: 100%;
    height:auto;
    padding: .1vh 0vh .1vh 0vh;
    border-bottom:1px solid #d4d4d4;
`;

export const HomeLinkInvoicesTableHeader = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-family: 'Nunito Sans', sans-serif;
    margin: 1vw;
    font-weight:700;
    color: var(--text);
    height:auto;
    word-break: break-all;
    @media(max-width:450px){
        font-size:0.8em;
    }
`;

export const HomeLinkInvoicesButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:px;
    width: 100%;
    height: auto;
    @media(max-width:450px){
        button{
            font-size:2.5vw;
        }
    
    }
    
    
`;

export const HomeLinkModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height:10vh;
`;

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 6vh;
    background-color:var(--background);
    border-radius:6px 6px 0px 0px;
    border-bottom:1px solid #91A3B0;
`;

export const ModalHeaderTitle = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-family: 'Nunito Sans', sans-serif;
    color: var(--text);
    font-weight:700;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height:auto;
    font-family: 'Nunito Sans', sans-serif;
    font-weight:700;
    border-radius:0px 0px 6px 6px;
    background-color:var(--background);

`;

export const ModalContentSection1 = styled.div`
    // place-items: center;
    width: 100%;
    height: 5vh;
    margin-top: 2vh;
    // margin-left: 2vh;
    .grid1{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
    .stu-grid{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        place-items:center;
        // background-color:black;
    }
    .grid2{
        display:grid;
        grid-template-columns: 10vw 1fr;
    }
    
`;

export const ModalContentElementsSection1 = styled.h2`
    // display: flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: flex-start;
    font-size: 1em;
    font-family: 'Nunito Sans', sans-serif;
    margin-left: 1vw;
    // letter-spacing: 1px;
    span{
        font-weight: 800;
    }
`;

export const ModalContentSection2 = styled.div`
    width: 100%;
    height: 5vh;
    width: 100%;
    height: auto;
    margin-top: 130px;
    span{
        font-weight: 800;
    }
    
    .stu-grid{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
        place-items:center;
        // background-color:black;
        }
    .student{
        border:1px solid black;
        padding
    }
`;

export const ModalContentElementsSection2 = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.2em;
    font-family: 'Nunito Sans', sans-serif;
    color: var(--text);
    margin-left: 1vw;
    letter-spacing: 1px;
    font-weight: 700;
`;

export const ModalButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 10vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
`;


//For Component: TAC

export const TACLinkContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`;

export const TACLinkTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 4fr;
    grid-template-rows: auto;
    gap: .1vw;
    width: 100%;
    height: 6vh;
    background-color: var(--grid-header);
    border-top: 1px solid #91A3B0;
    border-bottom:1px solid #91A3B0;
`;

export const TACLinkTableHeaderTitle = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    font-family: 'Nunito Sans', sans-serif;
    margin: 1vw;
    font-weight:800;
    white-space: nowrap;
    color: var(--text);
    @media(max-width:364px){
        font-size:0.8em;
    }
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