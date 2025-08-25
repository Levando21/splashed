/** @format */
import albumCover from "../../public/assets/img.png";
function AlbumCover() {
	return (
		<div className="mb-8 text-center">
			<img
				src={albumCover}
				alt="Album Cover"
				className="album-cover"
			/>
		</div>
	);
}

export default AlbumCover;
