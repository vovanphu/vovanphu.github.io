import SkillTagCloud from "./SkillTagCloud";
import AnimatedSentence from "./AnimatedSentence";

const Welcome = () => {
	return (
		<div className="lg:flex items-center gap-20 px-10 lg:px-20 pt-10 pb-20">
			<div className="flex flex-col flex-1 justify-center">
				<strong className="text-3xl lg:text-6xl animate__animated animate__fadeInDown">
					<AnimatedSentence>Hi guys,</AnimatedSentence>
					<div className="inline-block">
						<AnimatedSentence>My name is </AnimatedSentence>
					</div>
					<div className="inline-block text-yellow-300">
						<AnimatedSentence>Phu Vo</AnimatedSentence>
					</div>
					<div className="inline-block">
						<AnimatedSentence>,</AnimatedSentence>
					</div>
					<br />
					<div className="inline-block">
						<AnimatedSentence>a </AnimatedSentence>
					</div>
					<div className="inline-block text-yellow-300">
						<AnimatedSentence>Developer</AnimatedSentence>
					</div>
					<div className="inline-block">
						<AnimatedSentence>.</AnimatedSentence>
					</div>
				</strong>
				<p className="mt-4 animate__animated animate__fadeInUp">
					Welcome to my portfolio! I am a driven and detail-oriented
					software developer with a passion for creating innovative
					and user-friendly web applications. With experience in
					full-stack development, I have a strong understanding of
					both front-end and back-end technologies and a talent for
					bringing designs to life.
				</p>
			</div>
			<div className="animate__animated animate__fadeInLeft">
				<SkillTagCloud />
			</div>
		</div>
	);
};

export default Welcome;
