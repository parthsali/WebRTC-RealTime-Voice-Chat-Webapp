import React from "react";
import Styles from "./Card.module.css";

const Card = ({title, icon, children}) => {
	return (
		<div className={Styles.card}>
			<div className={Styles.headingWrapper}>
				<img
					className={Styles.img}
					src={`/images/${icon}.png`}
					alt='logo'
				/>
				<h1 className={Styles.heading}>{title}</h1>
			</div>
			{children}
		</div>
	);
};

export default Card;
