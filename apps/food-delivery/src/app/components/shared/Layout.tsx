import { Outlet } from 'react-router-dom';

import styles from '../../app.module.scss';
import { Header } from './Header';

export const Layout = () => {
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};
