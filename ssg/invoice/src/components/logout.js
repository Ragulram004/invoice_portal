import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENTID;

function Logout() {

    const onSuccess = () => {
        alert("Logout made successfully");
        window.location.href = "/";
    };

    const onFailure = () => {
        console.log("Handle failure cases");
    };


    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={() => onSuccess()}
                onFailure={() => onFailure()}
            />
        </div>
    );
}

export default Logout;
