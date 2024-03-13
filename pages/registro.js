// Next imports
import Head from "next/head";
import Image from "next/image";

// Components
import Header from "@/components/Header";

// Image imports
import img from "@/public/images/img.png";

// Styles
import styles from "@/styles/Registro.module.css";

const Registro = () => {
	return (
		<>
			<Head>
				<title>Cáritas de Monterrey</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header />
			<main>
				<section className={styles.registroSection}>
					<div className={styles.content}>
						<h1>¡Únete como Voluntario!</h1>
						<p className={styles.description}>
							Ser voluntario en el Banco de Alimentos Cáritas de Monterrey es
							una oportunidad única para marcar la diferencia en la comunidad.
							Tu tiempo y esfuerzo contribuirán directamente a combatir el
							hambre y mejorar la calidad de vida de las personas más
							necesitadas en Nuevo León.
						</p>
						<h3>¿Como puedes apoyar?</h3>
						<ol>
							<li>
								<h4>Clasificación y Distribución de Alimentos:</h4>
								<p>
									Ayuda en la clasificación y empaquetado de alimentos para su
									distribución a familias y comunidades necesitadas.
								</p>
							</li>
							<li>
								<h4>Apoyo Logístico:</h4>
								<p>
									Colabora en tareas de logística para asegurar que los
									alimentos lleguen a quienes más los necesitan de manera
									eficiente y oportuna.
								</p>
							</li>
							<li>
								<h4>Sensibilización y Eventos:</h4>
								<p>
									Participa en eventos de sensibilización y promoción para
									aumentar la conciencia sobre el hambre y recaudar fondos para
									apoyar nuestras operaciones.
								</p>
							</li>
						</ol>
						<h3>¿Cómo puedo registrarme?</h3>
						<p className={styles.desc2}>
							¡Es fácil unirse como voluntario! Simplemente completa nuestro
							formulario de registro en línea y nos pondremos en contacto
							contigo para coordinar tu participación.
						</p>
						<a
							className={styles.btn}
							href="https://docs.google.com/forms/d/e/1FAIpQLSeXHPVgXnz0Btv-RJR_2tn9mVQ48uwtUy8iw2sRZ2i278n80Q/viewform?usp=sf_link"
							target="_blank"
						>
							¡Quiero ayudar!
						</a>
					</div>
					<div className={styles.imgContainer}>
						<Image src={img} alt="Image" className={styles.img} />
					</div>
				</section>
			</main>
		</>
	);
};

export default Registro;
