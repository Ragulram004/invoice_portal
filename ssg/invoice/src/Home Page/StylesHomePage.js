import styled from "styled-components";

export const HomePageScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--background);
    height: 100vh;
    width: 100vw;
`;

export const HomePageNavigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--accent);
    height: 15vh;
    width: 100%;
`;

export const HomePageContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height: 85vh;
    width: 100%;
`;

export const HomePageSideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--sidebar);
    height: 85vh;
    width: 17vw;
`;

export const HomePageMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 85vh;
    width: 83vw;
`;