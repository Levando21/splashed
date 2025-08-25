/** @format */

import { FaSpotify, FaYoutube, FaSoundcloud, FaApple } from "react-icons/fa";

function ListenButtons() {
	const services = [
		{
			name: "Spotify",
			icon: <FaSpotify />,
			id: "spotify",
			link: "https://open.spotify.com/intl-de/album/4oEwTuDC9mT3gLLk9CzRQh",
		},
		{
			name: "YouTube Music",
			icon: <FaYoutube />,
			id: "youtube",
			link:
				"https://music.youtube.com/playlist?list=OLAK5uy_mWV6AZkfPonarBPRWT7ozzzAjfnk4rx64",
		},
		{
			name: "SoundCloud",
			icon: <FaSoundcloud />,
			id: "soundcloud",
			link: "https://soundcloud.com/user-809355084/sets/to-be-splashed",
		},
		{
			name: "Apple Music",
			icon: <FaApple />,
			id: "apple",
			link: "https://music.apple.com/ua/album/to-be-splashed/1833436745",
		},
	];

	return (
		<div className="stream-buttons">
			{services.map((service) => (
				<a
					key={service.name}
					href={service.link}
					target="_blank"
					rel="noopener noreferrer"
					className={`stream-button ${service.id}`}>
					{service.icon}
					<span>{service.name}</span>
				</a>
			))}
		</div>
	);
}

export default ListenButtons;
