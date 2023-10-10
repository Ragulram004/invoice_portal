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

export const HomePageActionButtons = styled.button`
    font-family: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 10vw;
    height: 90%;
    line-height: 2.5em;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--primary);
    margin-top: .5vh;
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--text);
    background: var(--accent);
    cursor: pointer;
    margin-left: 23vw;

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
    height: 80vh;
    width: 95%;
    margin-top: 2vh;
`;

export const HomePageActionTabs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height: 8vh;
    width: 100%;
`;

export const HomePageActionTabsInput = styled.input`
    width: 5vh;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--text);
    font-size: 20px;
    font-weight: 600;
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

export const HomePageActionTabsLabel = styled.label`
    width: 15vw;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--text);
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: color .5s;
    display: flex;
    align-items: center;
    justify-content: center;
`;
