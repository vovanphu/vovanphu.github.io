import { useState } from "react";

const ClassHover = (props) => {
    const [ className, setClassName ] = useState('');

	const handleMouseEnter = () => {
		setClassName(props.className);
        setTimeout(() => setClassName(''), 1500);
	};

	return (
		<div
			onMouseEnter={handleMouseEnter}
            className={className}
		>
			{props.children}
		</div>
	);
};

export default ClassHover;