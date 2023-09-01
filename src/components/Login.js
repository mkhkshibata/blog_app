import React from 'react'
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
	const loginWithGoogle = () => {
		//Googleでログイン
		signInWithPopup(auth, provider)
			.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// IdP data available using getAdditionalUserInfo(result)
			// ...
		})
	};

	return (
		<div>
			<p>ログインして始める</p>
			<button onClick={loginWithGoogle}>Googleでログイン</button>
		</div>
	)
}

export default Login;