import React from 'react'
import { Link } from 'react-router-dom'
import metabnb__foot from '../assets/metabnb__foot.png'
import Facebook from '../assets/facebook__icon.png'
import Instagram from '../assets/instagram__icon.png'
import Twitter from '../assets/twitter__icon.png'
import Copyright from '../assets/copyright__icon.png'

const FooterBar = () => {
  return (
		<div className="footer__flex">
			<div className="top__foot">
				<div className="each__footContainer">
					<div className="footer__img">
						<img
							src={metabnb__foot}
							alt="Meta BNB footer logo"
							className="footer__logo"
						/>
					</div>
					<div className="social__contents">
						<img
							src={Facebook}
							alt="Facebook icon"
							className="social__icons"
						/>
						<img
							src={Instagram}
							alt="Instagram icon"
							className="social__icons"
						/>
						<img
							src={Twitter}
							alt="Twitter icon"
							className="social__icons"
						/>
					</div>
				</div>
				<div className="each__footContainer">
					<h3 className="foothead">Community</h3>
					<Link className="footlinks">NFT</Link>
					<Link className="footlinks">Tokens</Link>
					<Link className="footlinks">Landlords</Link>
					<Link className="footlinks">Discord</Link>
				</div>
				<div className="each__footContainer">
					<h3 className="foothead">Places</h3>
					<Link className="footlinks">Castle</Link>
					<Link className="footlinks">Farms </Link>
					<Link className="footlinks">Beach</Link>
					<Link className="footlinks">Learn more</Link>
				</div>
				<div className="each__footContainer">
					<h3 className="foothead">About us</h3>
					<Link className="footlinks">Road map</Link>
					<Link className="footlinks">Creators</Link>
					<Link className="footlinks">Career</Link>
					<Link className="footlinks">Contact us</Link>
				</div>
			</div>
			<div className="bottom__foot">
				<img
					src={Copyright}
					alt="copyright icon"
					className="copy__icon"
				/>
				<p className="copyright__text">2022 Metabnb</p>
			</div>
		</div>
	);
}

export default FooterBar
