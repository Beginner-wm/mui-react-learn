import classes from './index.module.css'
import logo from '@/assets/logo.png'
import { Outlet } from 'react-router-dom'
export const Layout = () => {
    return (
        <>
         <nav className={classes.navigation}>
            <header className={classes.header}>
            <section className={classes.logo}>
                <img src={logo} className={classes.logoIcon} alt="" />
            </section>
            <section className={classes.helpWrapper}>
                <div>help</div>
            </section>
            </header>
           
        </nav>
        <div className={classes.content}>
        <Outlet />
      </div>

        </>
       
    )
}