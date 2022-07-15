import Container from '../Container/Container';
import styles from './NavBar.module.scss'


const NavBar = () => {

    return (
        <nav className={styles.navBar}>
            <Container>
                <div className={styles.navWrapper}>
                
            <div className={styles.icon}>
                <span className={'fa fa-tasks'} />
            </div>
            <ul className={styles.menuList}>
            <li><a href="/">Home</a></li>
            <li><a href="/favorite">Favorite</a></li>
            <li><a href="/about">About</a></li>
            </ul>
            </div>
            </Container>
        </nav>

    );
};

export default NavBar;