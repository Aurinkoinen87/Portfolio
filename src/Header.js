import s from './Header.module.css'
import CodeIcon from '@mui/icons-material/Code';
export function Header() {
    return (
        <header className={s.header}>

            <div className={s.header_text} >My Webpage</div>

            <div>
            <CodeIcon />
            </div>

            <nav className={s.header_navbar}>
                <a href='#'>Main</a>
                <a href='#'>My projects</a>
                <a href='#'>Contacts</a>
                <a href='#'></a>
            </nav> 
            
        </header>
    )
}