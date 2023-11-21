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
`;

export const ApplyNavigationLogo = styled.img`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 5vh;
    width: 5vw;
    margin-left: 1vw;
`;

export const ApplyNavigationTitle = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: centre;
    justify-content: centre;
    font-size: 1em;
    font-family: 'Arial Narrow', 'san-serif';
    margin-left: 1vw;
`;

export const ApplyNavigationSearch = styled.div`
    width: 65vw;
    margin-left: 2vw;
    margin-right: 2vw;
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
`;

export const ApplyNavigationProfileToggle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--accent);
    width: 30vw;
    height: 10vh;
    margin-left: 1vw;
    margin-top: 12vh;
    border-radius: 1em;
    position: absolute;
    top: 0;
    right: 1vw;
    z-index: 1;
`;

export const ApplyNavigationProfileEmail = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Arial Narrow', 'san-serif';
    font-size: 2em;
    color: var(--text);
`;

export const ApplyContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height: 85vh;
    width: 100%;
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
    font-family: 'Arial Narrow', 'san-serif';
    text-align: center;
    color: var(--text);
    font-size: 3.2vh;
    margin-left: 3vw;
    letter-spacing: .1em
`;

export const ApplyMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
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
    text-decoration:underline;
    font-weight:500;
`;

export const ApplyFormDetailsName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin-top: 1vh;
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
    background: var(--accent);
    border-radius: 6px;
    margin-top: 1.5vh;
    margin-left:2vh;
    padding:1.5vh;
`;


export const ApplyFormButtonContainer = styled.div`
    width: 95%;
    margin-top: 1vh;
    font-family: 'Arial Narrow', 'san-serif';
    font-size: 1em;
    color: var(--text);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    z-index: 0;
`;

export const ApplyFormFirstNextButton = styled.button`
    background: var(--primary);
    color: white;
    font-family: inherit;
    font-size: 2.5vh;
    font-weight: 500;
    border-radius: 6px;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 6vh;
    width: 12vh;
    margin-bottom: 2vh;
    margin-right: 2vw;
    z-index: 0;
    transition:0.2s all;

    &:hover {
        transform: translate(-0.05em, -0.05em);
        box-shadow: 0.15em 0.15em 0.25em #5566c2;
    }

    &:active {
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em  #5566c2;
    }
`;

export const ApplyFormSubmitButton = styled.button`
    background: var(--accent);
    color: var(--text);
    font-family: inherit;
    font-size: 2.5vh;
    font-weight: 500;
    border-radius: 6px;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 6vh;
    width: 12vh;
    margin-bottom: 2vh;
    margin-left: 2vw;
    transition: 0.2s all;

    &:hover {
        transform: translate(-0.05em, -0.05em);
        box-shadow:0.15em 0.15em 0.25em gray;

    }

    &:active {
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em #5566c2;
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
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin-top: 1vh;
`;

export const ApplyFormDetailsProjectElementContainer = styled.div`
    // display: flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: space-evenly;
    width: 89%;
    // height: 18vh;
    margin-top: 10px;
`;

export const ApplyFormDetailsProjectMultiLineContainer = styled.div`
    // display: flex;
    // flex-direction: row;
    // align-items: flex-start;
    // justify-content: space-evenly;
    width:89%;
    height: 10vh;
    margin-top: 10px;
`;

export const ApplyFormDetailsLabel = styled.label`
    font-family: inherit;
    font-size: 1.1em;
    font-weight: bold;
    color: var(--text);
    letter-spacing: .1em;
    margin-left: 1vw;
    margin-right: 1vw;
    margin-bottom:1vw;
`;