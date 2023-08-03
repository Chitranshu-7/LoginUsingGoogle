import React from 'react'
import Chitranshu from './Chitranshu'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
// import { isExpired, decodeToken } from "react-jwt";

export default function Home() {

   
    return (
        <div>
            <GoogleOAuthProvider clientId="981480180730-qabnqmpap6d8fch80cptjfst8s0drcns.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        // const myDecodedToken = decodeToken(credentialResponse.credential);
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>

            {/* <Chitranshu/> */}
        </div>
    )
}
