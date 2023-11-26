// Component
import Background from '../component/Background'

export default function About () {
    const urlPicture = '/image/about_background.jpg'
    return (
        <>
            <main className="about">
                <Background imagePath={urlPicture}/>
                <div>A propos page</div>
            </main>
        </>
    )
}