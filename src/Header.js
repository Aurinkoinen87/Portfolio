import s from './Header.module.css'
import CodeIcon from '@mui/icons-material/Code';
export function Header() {










    return (
        <header className={s.header}>

            <div className={s.header_text} >My Webpage</div>

            <div>
            <CodeIcon color="disabled" fontSize="large"/>
            </div>

            <nav className={s.header_navbar}>
                <a className={`${s.header_nav_link} ${s.nav_link_active}`} activeClassName={s.nav_link_active} href='#'>Main</a>
                <a className={s.header_nav_link} href='#'>My projects</a>
                <a className={s.header_nav_link} href='#'>Contacts</a>
            </nav> 
            
        </header>
    )
}