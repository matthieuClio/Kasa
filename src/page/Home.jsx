import { Link, useLoaderData } from 'react-router-dom'

// Component
import Background from '../component/Background'
import Thumbnail from '../component/Thumbnail'

// Variables for Background component
const mainTitle = 'Chez vous, partout et ailleurs'
const pathUrl = './image/home_background.png'

export default function Home () {
  const data  = useLoaderData();

  return (
    <>
      <main className="home">
        {/* Image background */}
        <Background title={mainTitle} imagePath={pathUrl} />
        
        {/* Picture cover */}
        <div className="home__container">
          <div className="home__container__accomodations">
            {
              data.map((element) => (
                <Link to={`accomodation/${element.id}`} key={element.id}>
                  <Thumbnail
                  coverImage={element.cover}
                  title={element.title}
                />
                </Link>
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}
