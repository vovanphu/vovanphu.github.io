import ClassHover from "./ClassHover";

const AnimatedSentence = (props) => {
	let text = "";

	if (typeof props.children === "object") {
		text = props.text;
	} else {
		text = props.children;
	}

	const characters = text.split("");

	return (
		<div className="flex my-1">
			{characters.map((character, index) => {
				return (
					<ClassHover key={`${character}.${index}`} className="animate__animated animate__heartBeat">
						{character.trim() === "" ? (
							<span className="mr-2"></span>
						) : (
							<span className="hover:text-green-500">{character}</span>
						)}
					</ClassHover>
				);
			})}
		</div>
	);
};

export default AnimatedSentence;

// react remove unique key warning without using key
