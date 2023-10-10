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
    justify-content: flex-start;
    background-color: transparent;
    height: 85vh;
    width: 83vw;
`;

export const HomePageAction = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: transparent;
    height: 10vh;
    width: 100%;

`;

export const HomePageActionButtons = styled.button`
    font-family: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--primary);
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--text);
    background: var(--background);
    cursor: pointer;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        background: var(--primary);
        height: 150px;
        width: 200px;
        border-radius: 50%;
    }

    &:hover {
        color: var(--text);
    }

    &:before {
        top: 100%;
        left: 100%;
        transition: all .7s;
    }

    &:hover:before {
        top: -30px;
        left: -30px;
    }
    
    &:active:before {
        background: var(--background));
        transition: background 0s;
    }
`;

export const HomePageActionContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--accent);
    height: 72vh;
    width: 95%;
`;

export const HomePageActionTabs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    border-bottom: 2px solid var(--primary);
    height: 8vh;
    width: 100%;
`;

export const HomePageTabConatainer = styled.div`
    &input[type="radio"] {
        display: none;
    }
`;

export const HomePageTab = styled.div`
    display: flex;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
    padding: 0.75rem;
    border-radius: 99px;

    * {
        z-index: 2;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 50px;
    font-size: .8rem;
    color: black;
    font-weight: 500;
    border-radius: 99px;
    cursor: pointer;
    transition: color 0.15s ease-in;
`;