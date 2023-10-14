import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENTID;

function Logout() {

    const onSuccess = () => {
        alert("Logout made successfully");
        window.location.href = "/";
    };

    const onFailure = () => {
        console.log("Handle failure cases");
        alert("Logout failed");
    };


    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={() => onSuccess()}
                onFailure={() => onFailure()}
                className="GoogleSignin"
            />
        </div>
    );
}

export default Logout;
