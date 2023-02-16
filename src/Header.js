const Header = () => {
	return (
		<header className="app-header sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-300 lg:z-50 lg:border-b lg:border-slate-900/10 border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 bg-slate-900/75">
			<div className="py-4 border-b lg:px-8 lg:border-0 border-slate-300/10 mx-4 lg:mx-0">
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
	);
};

export default Header;
