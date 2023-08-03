import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
export default function Chitranshu() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
      
  

    return (

        // <div onClick={() => login()}>
        //  Hello
        // </div>

        <>
            <GoogleOAuthProvider clientId="981480180730-qabnqmpap6d8fch80cptjfst8s0drcns.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                      
                />
        
            </GoogleOAuthProvider>
        </>
    )
}
