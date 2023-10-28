import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css";
import minhaFoto from "assets/minha_foto.jpg";


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Bryan!
            </h3>

            <img 
                className={styles.fotoSobreMim}
                src={minhaFoto}
                alt="Foto do Bryan"
            />

            <p className={styles.paragrafo}>
            Oi, tudo bem?
            </p>

            <p className={styles.paragrafo}>
            Eu sou Bryan, estudante de engenharia mecatrônica e desenvolvedor Full-Stack.
            </p>

            <p className={styles.paragrafo}>
            Na minha área trabalho com React para o Front-end e PHP para o Back-end.
            </p>

        </PostModelo>
    )
}