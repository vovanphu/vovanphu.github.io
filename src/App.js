import SkillTagCloud from "./SkillTagCloud";
import "./App.css";
import AnimatedSentence from "./AnimatedSentence";

function App() {
	return (
		<div className="app antialiased text-slate-300 dark:text-slate-400 bg-white dark:bg-slate-900">
			<div className="min-h-screen">
				<header className="app-header sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-300 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
					<div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
						<div className="flex items-center">
							<h1 className="text-3xl font-bold underline text-yellow-300">
								<a href="/">PhuVo.dev</a>
							</h1>
							<a className="ml-auto text-yellow-300" href="/">
								Resume
							</a>
						</div>
					</div>
				</header>
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
							Welcome to my portfolio! I am a driven and
							detail-oriented software developer with a passion
							for creating innovative and user-friendly web
							applications. With experience in full-stack
							development, I have a strong understanding of both
							front-end and back-end technologies and a talent for
							bringing designs to life.
						</p>
						{/* <div className="mt-8 opacity-50">
							<iframe
								title="Engraving"
								style={{ borderRadius: 12 }}
								src="https://open.spotify.com/embed/track/6fwWMZ8ComjwCUepX117Ct?utm_source=generator&theme=0"
								width="100%"
								height="100"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</div> */}
					</div>
					<div className="animate__animated animate__fadeInLeft">
						<SkillTagCloud />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

// tailwindcss margin right 1em
