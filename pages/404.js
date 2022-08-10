import Head from 'next/head';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Custom404() {
    
    return (
        <div className={styles.container}>
            <Head>
                <h2 id="pagenotfound" className={utilStyles.heading2Xl}>404 - Page Not Found </h2>
            </Head>
        </div>
    );
}