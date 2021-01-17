import logo from '../../assets/images/logo.svg';

function Header() {
	return (
		<header className="page-section page-header">
			<div className="page-wrapper"><div className="page-container">

				<a href="https://github.com/" className="logo">
					<img src={logo} className="logo__image" alt="logo" />
				</a>
				<h1 className="app-name">Github search app</h1>

			</div></div>
		</header>
	)
}

export default Header;