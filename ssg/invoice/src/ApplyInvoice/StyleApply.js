import styled from 'styled-components';

export const ApplyScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--background);
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

export const ApplyNavigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--accent);
    height: 10vh;
    width: 100%;
    border-bottom:1px solid #91A3B0;

    .logo1{
        margin-left:94vw;
        width:30px;
        height:30px;
    }
    .logo2{
        margin-left:94vw;
        color:transparent;
        width:30px;
        height:30px;   
        z-index:1; 
    }
    @media(max-width:1024px){
        .logo1{
            margin-left:90vw;
        }
    }
    @media(max-width:1024px){
        .logo2{
            margin-left:90vw;
        }        
    }
`;

export const ApplyNavigationLogo = styled.img`
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

export const ApplyNavigationTitle = styled.h1`
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

export const ApplyNavigationSearch = styled.div`
    width: 100%;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-left:260px;
`;

export const ApplyBackToHome = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 3vw;
    height: 5vh;
    border-radius: 50%;
    background: transparent;
    color: var(--text);
    margin-left: 1vw;
    cursor: pointer;
    border: none;
`;

export const ApplyNavigationNotification = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 3vw;
    height: 5vh;
    border-radius: 50%;
    background: transparent;
    color: var(--text);
    margin-left: 1vw;
    cursor: pointer;
    border: none;
`;

export const ApplyNavigationProfile = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 3vw;
    height: 5vh;
    border-radius: 50%;
    background: transparent;
    color: var(--text);
    margin-left: 1vw;
    cursor: pointer;
    border: none;
    margin-right:2vw;
`;

export const ApplyNavigationProfileToggle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:var(--accent);
    width: 200px;
    height: 40px;
    margin-left: 1vw;
    margin-top: 65px;
    border-radius: 6px;
    position: absolute;
    top: 0;
    right: 1vw;
    z-index: 1;
    border:1px solid #91A3B0;
`;

export const ApplyNavigationProfileEmail = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito Sans', sans-serif;
    font-weight:500;
    font-size: 1em;
    color:white;
`;

export const ApplyContent = styled.div`
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height:100vh;
    width: 100%;
    margin-top:10.1vh;
    position:fixed;
`;

export const ApplyContentTitleDiv = styled.div`
    width: 100%;
    height: 6vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;    
`;

export const Title = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito Sans', sans-serif;
    font-weight:700;
    text-align: center;
    color: var(--text);
    font-size: 3.2vh;
    margin-left: 3vw;
    @media(max-width:450px){
        font-size:1.3em;
    }
`;

export const ApplyMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    height: 90vh;
    width: 100%;
`;

export const ApplyFormContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--sidebar);
    width: 95%;
    height: 75vh;
    overflow-y: auto;
    border-radius: 7px;
    z-index:0;
    border:1px solid #91A3B0;
`;

export const ApplyFormDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 97%;
    height: 100%;
    margin: 1em;
    overflow-y: auto;
    text-decoration:none;
    font-weight:700;\    font-family: 'Nunito Sans', sans-serif;
    font-family: 'Nunito Sans', sans-serif;

`;

export const ApplyFormDetailsName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin-top: 1vh;
    button{
        color:white;
        background-color:var(--primary)
        // border-radius:50%;
    }
`;

export const ApplyFormDetailsNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 95%;
    height: auto;
    margin-top: 5vh;
`;

export const ApplyFormDetailsNameInside = styled.div`
    display: flex;
    flex-direction: row;
    gap:15px;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 7vh;
    background: var(--background);
    border-radius: 6px;
    margin-top: 1.5vh;
    margin-left:2vh;
    padding:1.5vh;
`;


export const ApplyFormButtonContainer = styled.div`
    width: 95%;
    margin-top: 1vh;
    font-family: 'Nunito Sans', sans-serif;
    font-weight:700;
    font-size: 1em;
    color: var(--text);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    z-index: 0;
    h5{
        white-space: nowrap;
    }
`;

export const ApplyFormFirstNextButton = styled.button`
    background: var(--primary);
    color: white;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 5.5vh;
    width: 90px;
    margin-bottom: 2vh;
    margin-right: 2vw;
    z-index: 0;
    transition:0.2s all;
    cursor:pointer;

    &:hover {
        background-color:var(--primary-hover);
    }
    @media (max-width: 1024px){
        font-size: 15px;
        margin-bottom:1.7vh;
        margin-right:2.5vw;
    }
    @media (max-width:450px){
        width: 25vw;
        font-size:3vw;
        margin-right:2.5vw;
    }
`;

export const ApplyFormSubmitButton = styled.button`
    background: var(--primary);
    color: white;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 5.5vh;
    width: 90px;
    margin-bottom: 2vh;
    margin-left:auto;
    transition: 0.2s all;
    cursor:pointer;

    &:hover {
        background-color:var(--primary-hover);

    }
    @media (max-width: 1024px){
        font-size: 15px;
        margin-bottom:1.7vh;
        margin-right:2.5vw;
    }
    @media (max-width:450px){
        width: 25vw;
        font-size:3vw;
        margin-right:2.5vw;
    }
`;

export const ApplyProjectFormDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    height: 97%;
`;

export const ApplyFormDetailsProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    // margin-top: 1vh;
    .flex-row{
        display:flex;
        flex-direction:row;
        gap:10vw;
        font-size:
    }
    @media(max-width:1024px){
        .flex-row{
            flex-direction:column;
            gap:10px;
        }
    }
    overflow-x:hidden;
`;

export const ApplyFormDetailsProjectElementContainer = styled.div`
    display: flex;
    flex-direction:column;
    // align-items: center;
    // justify-content: flex-start;
    width:75%;
    margin-top: 10px;
    
    .inner-flex{
        display:flex;
        flex-direction:column;
        width:75%;
    }
    input{
        font-size:15px;
        border:1px solid #91A3B0;
        padding:8px;
        border-radius:4px;
        background-color:#fafafa;
        &:focus{
            background-color:#eef2f6;
        }   
    }
    .FormControl{
        display:flex;
        flex-direction:row;
    }
    @media(max-width:1024px){
        input{
            width:67vw;
        }
    }
    @media(max-width:600px){
        input{
            width:63.5vw;
        }
    }
`;

export const ApplyFormDetailsProjectMultiLineContainer = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    // justify-content: space-evenly;
    width:75%;
    // height: 10vh;
    // margin-top: 10px;
    input{
        font-size:15px;
        border:1px solid #91A3B0;
        padding:8px;
        border-radius:4px;
        background-color:#fafafa;
    }
    @media(max-width:1024px){
        input{
            width:67vw;
        }
    }
    @media(max-width:600px){
        input{
            width:63.5vw;
        }
    }
    textarea{
        font-size:15px;
        border:1px solid #91A3B0;
        border-radius:4px;
        padding:8px;
        margin-bottom:1vh;
        background-color:#fafafa;
        min-width:98%;
        max-width:98%;
        min-height:40px;
        max-height:150px;
        &:focus{
            background-color:#eef2f6;
        }  
    }
    @media(max-width:600px){
        textarea{
            min-width:93%;
        }
    }
`;  

export const ApplyFormDetailsLabel = styled.label`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.1em;
    font-weight: bold;
    color: var(--text);
    margin-bottom:0.5vh;
`;