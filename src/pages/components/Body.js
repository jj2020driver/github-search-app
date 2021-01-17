import Sidebar from "./Sidebar";
import Main from "./Main";

function Body() {
	return (
		<section className="page-section page-section--search">
			<div className="page-wrapper"><div className="page-container">
			
				<Sidebar />
				<Main />

			</div></div>
		</section>
	);
}

export default Body;