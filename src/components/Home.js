import React, { useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import './Home.css';

const Home = () => {

	useEffect(() => {
		const getPosts = async () => {

			const data = await getDocs(collection(db, "posts"));
			console.log(data);
			console.log(data.docs);
			console.log(data.docs.map((doc) => {return { doc }} ));
			console.log(data.docs.map((doc) => {return doc.data } ));

		}
		getPosts();
	}, []);


	return (
		<div className='homePage'>
			<div className="postContents">
				<div className="postHeader">
					<h1>タイトル</h1>
				</div>
				<div className="postTextContainer">React学習中です。エンジニアとして活躍します、よろしくお願いします。React学習中です。エンジニアとして活躍します、よろしくお願いします。React学習中です。エンジニアとして活躍します、よろしくお願いします。React学習中です。エンジニアとして活躍します、よろしくお願いします。</div>
				<div className="nameAndDeleteButton">
					<h3>@mk</h3>
					<button>削除</button>
				</div>
			</div>
		</div>
	)
}

export default Home;