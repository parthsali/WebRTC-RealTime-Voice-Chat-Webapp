import React from "react";
import Button from "../../../components/shared/Button/Button";

const StepPhoneEmail = ({onNext}) => {
	return (
		<>
			<div>StepPhoneEmail</div>
			<Button onClick={onNext} text='Next'></Button>
		</>
	);
};

export default StepPhoneEmail;
