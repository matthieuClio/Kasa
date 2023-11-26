import { Link, Outlet } from 'react-router-dom'

export default function Navigation () {
    return (
        <>
            <header>
                <nav className="navigation">
                    {/* Logo */}
                    <div className="navigation__logo">
                        K<img src="/image/house.svg" className="navigation__logo__house" alt="maison" />sa
                    </div>

                    {/* Link */}
                    <ul className="navigation__link">
                        <li>
                            <Link to={'/'} className="navigation__link__first color-primary">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to={'a-propos'} className="navigation__link__second color-primary">
                                A Propos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Outlet will be the page contain */}
            <Outlet />
        </>
    )
}