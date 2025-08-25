/** @format */

import Header from "./componens/Header.tsx";
import AlbumCover from "./componens/AlbumCover.tsx";
import ListenButtons from "./componens/ListeningButtons.tsx";
import Footer from "./componens/Footer.tsx";

function App() {
	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
			<Header />
			<AlbumCover />
			<ListenButtons />
			<Footer />
		</div>
	);
}

export default App;
