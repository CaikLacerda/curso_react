import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Importei um componente pelo HelloWorld!</p>
        </div>
    )
}

export default Frase