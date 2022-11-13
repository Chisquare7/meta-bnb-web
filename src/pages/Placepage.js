import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Placepage = ({ items }) => {
  return (
		<div>
			<header className="header__container">
				<div className="sect__container">
					<Header />
				</div>
			</header>
			<section className="placetop__section">
				<div className="sect__container">
					<div className="placetop__flex">
						<Link className="placetop__links">Restaurant</Link>
						<Link className="placetop__links">Cottage</Link>
						<Link className="placetop__links">Castle</Link>
						<Link className="placetop__links">fantasy city</Link>
						<Link className="placetop__links">beach</Link>
						<Link className="placetop__links">Carbins</Link>
						<Link className="placetop__links">Off-grid</Link>
						<Link className="placetop__links">Farm</Link>
						<input type="text" placeholder="Location" />
					</div>
				</div>
			</section>
			<section className="placemiddle__section">
				<div className="sect__container">
					<div className="place__container">
						{items &&
							items?.map((place, index) => (
								<div className="place__boxes">
									<div className="place__img">
										<img
											src={place?.placeIcon}
											alt="This is icon of place to stay"
											className="place__icon"
										/>
									</div>
									<div className="place__flex">
										<p className="place__text">{place?.placeName}</p>
										<p className="place__amt">{place?.placeAmount}</p>
									</div>
									<div className="place__flex">
										<p className="place__text">{place?.placeDistance}</p>
										<p className="place__text">{place?.placePeriod}</p>
									</div>
									<div className="rating__content">
										<img
											src={place?.placeRating}
											alt="Rating of each place"
											className="rating__img"
										/>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>
			<footer className="sect__footer">
				<div className="sect__container">
					<Footer />
				</div>
			</footer>
		</div>
	);
}

export default Placepage
