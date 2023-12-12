import { Link, Outlet, useLocation, useParams } from 'react-router-dom'


export default function Navigation () {
    // Current location
    const location = useLocation()

    // Url parameter
    const { accomodationId } = useParams()

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
                            <Link to={'/'}>
                                <span className={location.pathname === '/' || location.pathname === `/accomodation/${accomodationId}` ?'navigation__link__first color-primary navigation-text-decoration':'navigation__link__first color-primary'}>
                                    Accueil
                                </span>
                            </Link>
                        </li>

                        <li>
                            <Link to={'a-propos'}>
                                <span className={location.pathname === '/a-propos'?'navigation__link__second color-primary navigation-text-decoration' :'navigation__link__second color-primary'}>
                                    A Propos
                                </span>
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