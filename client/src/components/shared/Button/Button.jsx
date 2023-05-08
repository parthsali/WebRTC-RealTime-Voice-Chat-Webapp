import React from "react";
import Styles from "./Button.module.css";

const Button = ({text, onClick}) => {
	return (
		<button onClick={onClick} className={Styles.button}>
			<span>{text}</span>
			<img
				className={Styles.arrow}
				src='/images/arrow-forward.png'
				alt='arrow'
			/>
		</button>
	);
};

export default Button;
