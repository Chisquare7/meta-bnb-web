import React from 'react'
import modal__metatask from "../assets/modal__metatask.png";
import modal__rightarrow from "../assets/modal__rightarrow.png";
import modal__wallet from "../assets/modal__wallet.png";
import X from "../assets/x.png";

const Modal = ({ open, onClose }) => {
    if (!open) return null

  return (
				<div className="modal__overlay" onClick={onClose}>
					<div className="modal__popup" onClick={(e) => {e.stopPropagation()}}>
						<div className="modal__content-top">
							<div className="modal__content-center">
								<div className="modal__flex">
									<h1 className="modal__heading">Connect Wallet</h1>
									<img src={X} alt="close icon" className="modal__close" onClick={onClose} />
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
	);
}

export default Modal
