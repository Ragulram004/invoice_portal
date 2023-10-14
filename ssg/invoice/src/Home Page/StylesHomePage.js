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
    justify-content: flex-start;
    background-color: var(--accent);
    height: 15vh;
    width: 100%;
`;

export const HomePageNavigationLogo = styled.img`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 10vh;
    width: 10vw;
    margin-left: 1vw;
`;

export const HomePageNavigationTitle = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: centre;
    justify-content: centre;
    font-size: 1.8em;
    font-family: 'Arial Narrow', 'san-serif';
    margin-left: 1vw;
`;

export const HomePageNavigationSearch = styled.div`
    --input-text-color: #808080;
    --input-text-hover-color: transparent;
    --input-border-hover-color: #808080;
    --border-radius: 10em;
    --transition-cubic-bezier: 150ms cubic-bezier(0.4,0,0.2,1);
`;

export const HomePageNavigationSearchBox = styled.div`
    width: 20vw;
    height: 5vh;
    margin-left: 10vw;
    border: 1px solid var(--text);
    border-radius: var(--border-radius);
    padding: 5px 15px;
    background: var(--accent);
    transition: var(--transition-cubic-bezier);

    &:hover {
        border-color: var(--input-border-hover-color);
    }
`;

export const HomePageNavigationSearchField = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    left: -5px;
    border: 0;
`;

export const HomePageNavigationSearchInput = styled.input`
    width: calc(100% - 29px);
    height: 100%;
    border: 0;
    border-color: transparent;
    font-size: 1rem;
    padding-right: 0px;
    color: var(--text);
    background: var(--input-bg-color);
    border-right: 2px solid var(--input-border-color);
    outline: none;

    &::-webkit-input-placeholder {
        color: var(--input-text-color);
    }

    &::-moz-input-placeholder {
        color: var(--input-text-color);
    }

    &::-ms-input-placeholder {
        color: var(--input-text-color);
    }

    &:focus::-webkit-input-placeholder {
        color: var(--input-text-hover-color);
    }

    &:focus::-moz-input-placeholder {
        color: var(--input-text-hover-color);
    }

    &:focus::-ms-input-placeholder {
        color: var(--input-text-hover-color);
    }
`;

export const HomePageNavigationDN = styled.label`
    background-color: var(--accent);
    width: 4vw;
    height: 6vh;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    line-height: 1;
    margin-left: 20vw;
`;

export const HomePageNavigationDNInput = styled.input`
    display: none;
`;

export const HomePageNavigationNotification = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 4vw;
    height: 6vh;
    border-radius: 50%;
    background: transparent;
    color: var(--text);
    margin-left: 1vw;
    cursor: pointer;
    border: none;
`;

export const HomePageNavigationProfile = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 4vw;
    height: 6vh;
    border-radius: 50%;
    background: transparent;
    color: var(--text);
    margin-left: 1vw;
    cursor: pointer;
    border: none;
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
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--sidebar);
    height: 85vh;
    width: 15vw;
`;

export const HomePageSideBarSeperation = styled.button`
    width: 100%;
    height: 50vh;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const HomePageSideBarSeperationBottom = styled.button`
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

export const HomePageSideBarButton = styled.button`
    width: 100%;
    height: 10vh;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--text);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: background-color .5s ease-in-out;
    font-size: 1.5em;

    &:focus {
        background-color: var(--sidebar-focus);
        width: 100%;
        transition: background-color .5s ease-in-out;
    }
`;

export const HomePageMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    height: 85vh;
    width: 85vw;
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
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--accent);
    height: 80vh;
    width: 95%;
    margin-top: 2vh;
    overflow-y: auto;
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

export const HomePageTabContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height: 72vh;
    width: 100%;
    margin-top: 2vh;
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
`;

export const HomeLinkTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 4fr;
    grid-template-rows: auto;
    gap: .1vw;
    width: 100%;
    height: 10vh;
    background-color: var(--grid-header);
`;

export const HomeLinkTableHeaderTitle = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-family: 'Arial Narrow', 'san-serif';
    margin: 1vw;
    color: var(--text);
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
    height: 10vh;
    background-color: var(--grid-header);
`;

export const TACLinkTableHeaderTitle = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-family: 'Arial Narrow', 'san-serif';
    margin: 1vw;
    color: var(--text);
`;



//For Component: Other

export const OtherLinkContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`;

export const OtherLinkTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 4fr;
    grid-template-rows: auto;
    gap: .1vw;
    width: 100%;
    height: 10vh;
    background-color: var(--grid-header);
`;

export const OtherLinkTableHeaderTitle = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-family: 'Arial Narrow', 'san-serif';
    margin: 1vw;
    color: var(--text);
`;