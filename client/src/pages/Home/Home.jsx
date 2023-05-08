import React from "react";
import styles from "./Home.module.css";
import {Link} from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";
import {useNavigate} from "react-router-dom";

const Home = () => {
	const signInLinkStyle = {
		marginLeft: "5px",
		color: "#0077ff",
		fontWeight: "bold",
		textDecoration: "none",
	};
	const navigate = useNavigate();
	function startRegister() {
		console.log("start register");
		navigate("/register");
	}

	return (
		<div className={styles.cardWrapper}>
			<Card title='Welcome to CodersHouse' icon='logo'>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Optio architecto
					molestiae explicabo eaque odio, hic
					soluta ipsum id iusto aliquid, et
					praesentium laudantium.
				</p>
				<div>
					<Button
						onClick={startRegister}
						text='Get your username'
					/>
				</div>
				<div className={styles.signinWrapper}>
					<span className={styles.hasInvite}>
						Have an Invite
					</span>
					<Link
						style={signInLinkStyle}
						to='/login'>
						Sign in
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default Home;
