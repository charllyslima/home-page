import styles from './style.module.scss';

const Loader = () => {
    return (
        <div className={styles.ring}>
            Loading
            <span className={styles.circle}></span>
        </div>
    );
};

export default Loader;
