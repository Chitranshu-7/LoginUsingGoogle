import React from 'react'
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";


export default function Vaishali() {
  return (
    <div>
        <LoginSocialGoogle
        client_id={"981480180730-qabnqmpap6d8fch80cptjfst8s0drcns.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
   
  )
}
