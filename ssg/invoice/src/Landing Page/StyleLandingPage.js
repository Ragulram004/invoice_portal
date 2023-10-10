import styled from "styled-components";

export const LandingPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    width: 32vw;
    height: 80vh;
    background-color: var(--accent);
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const LoginBoxHeader = styled.div`
    width: 100%;
    height: 8vh;
    border-radius: 1em 1em 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
`;

export const LoginBoxBody = styled.img`
    width: 22vw;
    height: 30vh;
    margin-top: 3vh;
`;

export const LoginBoxTitle = styled.div`
    width: 100%;
    height: 8vh;
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginBoxButton = styled.div`
    width: 100%;
    height: 10vh;
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginBoxHighlight = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transition: 0.5s;

    &:hover {
        background-color: var(--primary);
        transition: 0.5s;
    }
`;

export const LoginBoxFooter = styled.div`
    width: 100%;
    height: 8vh;
    margin-top: 1vh;
    border-radius: 0 0 1em 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;