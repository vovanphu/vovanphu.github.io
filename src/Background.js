import { useEffect, useRef, useState } from "react";

const randomNumber = (n) => {
	return Math.floor(Math.random() * (n + 1));
};

const generateBoxShadow = (count, max1, max2) => {
	let result = "";

	for (let i = 0; i < count; i++) {
		const x = randomNumber(max1);
		const y = randomNumber(max2);

		if (result.length !== 0) result += ", ";
		result += `${x}px ${y}px #666`;
	}

	return result;
};

const Star = (props) => {
	return (
		<div
			className="absolute"
			style={{
				width: props.level,
				height: props.level,
				borderRadius: "50%",
				background: "transparent",
				boxShadow: props.boxShadow,
                animationName: 'StarAnimation',
                animationIterationCount: 'infinite',
                animationDuration: `${150 * props.level}s`,
                animationTimingFunction: 'linear',
			}}
		></div>
	);
};

const Background = () => {
	const ref = useRef(null);
	const [boxShadow, setBoxShadow] = useState(["", "", ""]);

	useEffect(() => {
		const newBoxShadow = [...boxShadow];
		newBoxShadow[0] = generateBoxShadow(
			2 * ref.current.offsetWidth,
			2 * ref.current.offsetWidth,
			10 * ref.current.offsetHeight
		);
		newBoxShadow[1] = generateBoxShadow(
			1.5 * ref.current.offsetWidth,
			2 * ref.current.offsetWidth,
			10 * ref.current.offsetHeight
		);
		newBoxShadow[2] = generateBoxShadow(
			1 * ref.current.offsetWidth,
			2 * ref.current.offsetWidth,
			10 * ref.current.offsetHeight
		);

		setBoxShadow(newBoxShadow);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			ref={ref}
			className="absolute top-0 right-0 bottom-0 left-0 z-0"
		>
			<Star level={1} boxShadow={boxShadow[0]} />
			<Star level={2} boxShadow={boxShadow[1]} />
			<Star level={3} boxShadow={boxShadow[2]} />
		</div>
	);
};

export default Background;
