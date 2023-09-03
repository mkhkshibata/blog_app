import { signOut } from "firebase/auth";
import React from 'react'
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
	const navigate = useNavigate();
	const logout = () => {
		//ログアウト
		signOut(auth).then(() => {
				//ローカルストレージから削除
				localStorage.clear();
				setIsAuth(false);

				//ホームへリダイレクトする
				navigate('/login');
		})
		.catch((error) => {
			console.log(error);
		})
	};

	return (
		<div>
			<p>ログアウトする</p>
			<button onClick={logout}>ログアウト</button>
		</div>
	)
}

export default Logout;