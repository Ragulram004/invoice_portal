import styled from 'styled-components';

export const ApplyScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--background);
    height: 100vh;
    width: 100vw;
`;

export const ApplyNavigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--accent);
    height: 15vh;
    width: 100%;
`;

export const ApplyNavigationLogo = styled.img`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 10vh;
    width: 10vw;
    margin-left: 1vw;
`;

export const ApplyNavigationTitle = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: centre;
    justify-content: centre;
    font-size: 1.8em;
    font-family: 'Arial Narrow', 'san-serif';
    margin-left: 1vw;
`;

export const ApplyNavigationSearch = styled.div`
    --input-text-color: #808080;
    --input-text-hover-color: transparent;
    --input-border-hover-color: #808080;
    --border-radius: 10em;
    --transition-cubic-bezier: 150ms cubic-bezier(0.4,0,0.2,1);
`;

export const ApplyNavigationSearchBox = styled.div`
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

export const ApplyNavigationSearchField = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    left: -5px;
    border: 0;
`;

export const ApplyNavigationSearchInput = styled.input`
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

export const ApplyNavigationDN = styled.label`
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

export const ApplyNavigationDNInput = styled.input`
    display: none;
`;

export const ApplyNavigationNotification = styled.button`
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

export const ApplyNavigationProfile = styled.button`
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
    height: 8vh;
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
    font-size: 2em;
    margin-left: 3vw;
    letter-spacing: .1em
`;

export const ApplyMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const ApplyFormContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--sidebar);
    width: 95%;
    height: 95%;
    overflow-y: auto;
`;

export const ApplyFormNameContainer = styled.div`
    width: 90%;
    height: 90%;
    margin-top: 2vh;
    font-family: 'Arial Narrow', 'san-serif';
    font-size: 1.2em;
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const ApplyFormButtonContainer = styled.div`
    width: 95%;
    margin-top: 2vh;
    font-family: 'Arial Narrow', 'san-serif';
    font-size: 1.2em;
    color: var(--text);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const ApplyFormFirstNextButton = styled.button`
    background: var(--primary);
    color: white;
    font-family: inherit;
    font-size: 1.1em;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 7vh;
    width: 10vw;
    margin-bottom: 2vh;
    margin-right: 2vw;

    &:hover {
        transform: translate(-0.05em, -0.05em);
        box-shadow: 0.15em 0.15em #5566c2;
    }

    &:active {
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em #5566c2;
    }
`;

export const ApplyFormSubmitButton = styled.button`
    background: var(--accent);
    color: var(--text);
    font-family: inherit;
    font-size: 1.1em;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 7vh;
    width: 10vw;
    margin-bottom: 2vh;
    margin-left: 2vw;

    &:hover {
        transform: translate(-0.05em, -0.05em);
        box-shadow: 0.15em 0.15em var(--accent);
    }

    &:active {
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em #5566c2;
    }
`;

export const ApplyFormDetailsConstainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 18vh;
    margin-top: 2vh;
`;

export const ApplyFormDetailsLabel = styled.label`
    font-family: inherit;
    font-size: 1em;
    font-weight: bold;
    color: var(--text);
    letter-spacing: .1em;
`;