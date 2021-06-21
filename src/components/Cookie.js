import React from 'react';
import CookieConsent from "react-cookie-consent";


const Cookie = () => {
    return (
        <div>
            <CookieConsent
            location="bottom"
            buttonText="Sure man!!"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}>This website uses cookies to enhance the user experience.</CookieConsent>
        </div>
    )
}

export default Cookie
