import { Link } from "react-router-dom";

export default function ErrorPage () {
    return (
        <main className="error-page">
            <h1 className="error-page__title">404</h1>

            <div className="error-page__text">
                Oups! La page que vous demandez n&apos;existe pas.
            </div>

            <Link to={'/'}>
                <span className="error-page__link">
                    Retourner à la page d&apos;accueil
                </span>
            </Link>
        </main>
    )
}