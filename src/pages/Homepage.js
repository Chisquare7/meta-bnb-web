import React from "react";
import FooterBar from "../components/FooterBar";
import HeaderBar from "../components/HeaderBar";
import metabnb__hero from "../assets/metabnb__hero.png";
import mbtoken from "../assets/mbtoken__logo.png";
import metamask from "../assets/metamask__logo.png";
import opensea from "../assets/opensea__logo.png";
import footInit from "../assets/footinit__img.png";

const Homepage = ({ data }) => {
	return (
		<div className="home__overall">
			<header className="header__container">
				<div className="sect__container">
					<HeaderBar />
				</div>
			</header>
			<section className="hero__section">
				<div className="sect__container">
					<div className="hero__flex">
						<div className="hero__left">
							<h1 className="hero__heading">
								Rent a <span className="inline__text">Place</span> away from{" "}
								<span className="inline__text">Home</span> in the
								<span className="inline__text"> Metaverse</span>
							</h1>
							<div className="hero__subtext">
								<p className="hero__text">
									we provide you access to luxury and affordable houses in the
									metaverse, get a chance to turn your imagination to reality at
									your comfort zone
								</p>
							</div>
							<div className="input__content">
								<input
									type="text"
									placeholder="Search for location"
									className="search__input"
								/>
								<input type="button" value="Search" className="input__action" />
							</div>
						</div>
						<div className="hero__right">
							<img
								src={metabnb__hero}
								alt="Hero icon of metabnb"
								className="hero__image"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="layout__one">
				<div className="sect__container">
					<div className="layout__one-flex">
						<div>
							<img
								src={mbtoken}
								alt="mbtoken icon"
								className="layout__one-img"
							/>
						</div>
						<div>
							<img
								src={metamask}
								alt="metamask icon"
								className="layout__one-img"
							/>
						</div>
						<div>
							<img
								src={opensea}
								alt="opensea icon"
								className="layout__one-img"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="layout__two">
				<div className="sect__container">
					<h2 className="layout__two-headings">
						Inspiration for your next adventure
					</h2>
					<div className="place__container">
						{data &&
							data?.map((item, index) => (
								<div className="place__boxes">
									<div className="place__img">
										<img
											src={item?.placeIcon}
											alt="This is icon of place to stay"
											className="place__icon"
										/>
									</div>
									<div className="place__flex">
										<p className="place__text">{item?.placeName}</p>
										<p className="place__amt">{item?.placeAmount}</p>
									</div>
									<div className="place__flex">
										<p className="place__text place__distance">
											{item?.placeDistance}
										</p>
										<p className="place__text place__period">
											{item?.placePeriod}
										</p>
									</div>
									<div className="rating__content">
										<img
											src={item?.placeRating}
											alt="Rating of each place"
											className="rating__img"
										/>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>
			<section className="layout__three">
				<div className="sect__container">
					<div className="layout__three-flex">
						<div className="layout__three-left">
							<h3 className="layout__three-headings">Metabnb NFTs</h3>
							<div className="layout__three-text">
								<p className="layout__three-subtext">
									Discover our NFT gift cards collection. Loyal customers gets
									amazing gift cards which are traded as NFTs. These NFTs gives
									our cutomer access to loads of our exclusive services.
								</p>
							</div>
							<div className="btn__content">
								<button className="layout__three-btn">Learn more</button>
							</div>
						</div>
						<div className="layout__three-right">
							<img
								src={footInit}
								alt="Hero icon before footer"
								className="layout__three-hero"
							/>
						</div>
					</div>
				</div>
			</section>
			<footer className="sect__footer">
				<div className="sect__container">
					<FooterBar />
				</div>
			</footer>
		</div>
	);
};

export default Homepage;
