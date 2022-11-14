import { React, useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom'
import metabnb_logo from '../assets/metabnb__logo.png'
import modal__metatask from '../assets/modal__metatask.png'
import modal__rightarrow from '../assets/modal__rightarrow.png'
import modal__wallet from '../assets/modal__wallet.png'
import X from '../assets/x.png'

const Header = () => {


    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    }

  return (
		<div className="for__modal">
			<div className="header__flex">
				<div className="main__logoContainer">
					<Link>
						<img
							src={metabnb_logo}
							alt="main metabnb logo"
							className="metabnb__logo"
						/>
					</Link>
				</div>
				<div className="menu__content">
					<MenuIcon className="menu__icon" onClick={showMenu} />
				</div>
				<nav className={active ? "slider active" : "slider"}>
					<ul>
						<div className="nav__middle">
							<div className="close__content">
								<CloseIcon className="close__icon" onClick={showMenu} />
							</div>
							<li className="nav__items">
								<Link className="nav__text">Home</Link>
							</li>
							<li className="nav__items">
								<Link className="nav__text" to="/Placepage">
									Place to stay
								</Link>
							</li>
							<li className="nav__items">
								<Link className="nav__text">NFTs</Link>
							</li>
							<li className="nav__items">
								<Link className="nav__text">Community</Link>
							</li>
						</div>
						<div className="btn__container">
							<li className="nav__items">
								<Link>
									<button className="btn__connect">Connect wallet</button>
								</Link>
							</li>
						</div>
					</ul>
				</nav>
			</div>
			<div className="modal__container">
				<div className="modal__section">
					<div className="modal__popup">
						<div className="modal__content-top">
							<div className="modal__content-center">
								<div className="modal__flex">
									<h1 className="modal__heading">Connect Wallet</h1>
									<img src={X} alt="close icon" className="modal__close" />
								</div>
							</div>
						</div>
						<div className="modal__content-bottom">
							<div className="modal__content-center">
								<div className="modal__subtext">
									<p className="modal__subhead">
										Choose your preferred wallet:
									</p>
								</div>
								<div className="modal__link-box">
									<div className="modal__link-flex">
										<div className="modal__box-flex">
											<img
												src={modal__metatask}
												alt="modal metatask icon"
												className="modal__icons"
											/>
											<p className="modal__text">Metamask</p>
										</div>
										<div className="modal__arrow-content">
											<img
												src={modal__rightarrow}
												alt="modal right arrow"
												className="modal__arrow"
											/>
										</div>
									</div>
								</div>
								<div className="modal__link-box">
									<div className="modal__link-flex">
										<div className="modal__box-flex">
											<img
												src={modal__wallet}
												alt="modal wallet connect"
												className="modal__icons"
											/>
											<p className="modal__text">WalletConnect</p>
										</div>
										<div className="modal__arrow-content">
											<img
												src={modal__rightarrow}
												alt="modal right arrow"
												className="modal__arrow"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header
