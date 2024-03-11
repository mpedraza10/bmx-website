// Next imports
import Image from "next/image";
import Link from "next/link";

// React imports
import { useState } from "react";

// Image imports
import logo from "../public/images/logo.png";

// Styles
import styles from "@/styles/Header.module.css";

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false);

	const toggleMenu = () => setMenuOpened(!menuOpened);

	return (
		<header className={styles.header}>
			<div className={styles.rectangle}>
				<Image src={logo} alt="Logo" className={styles.logo} />
				<nav className={`${styles.menu} ${menuOpened ? styles.show : ""}`}>
					<ul>
						<li>
							<Link href={"/capacitacion"}>Capacitación</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.hamburgerMenu} onClick={toggleMenu}>
					<div
						className={`${styles.bar} ${menuOpened ? styles.change : ""}`}
					></div>
					<div
						className={`${styles.bar} ${menuOpened ? styles.change : ""}`}
					></div>
					<div
						className={`${styles.bar} ${menuOpened ? styles.change : ""}`}
					></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
