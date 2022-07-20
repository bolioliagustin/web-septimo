import Carousel from '../Components/carousel'
import {Cards1} from '../Components/cards';
import Parallax from '../Components/parallax';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <>
        <div className='section' >
          <Carousel />
          <div className="container-fluid center">
            <h1 className="bold title mt-5">
              Sobre el Grupo
            </h1>
            <div className="line" />
            <h3 className="medium subtitle">
              Desde 1964 nuestro grupo participa de las iniciativas del Escultismo.
            </h3>
          </div>
          <Cards1 />
        </div>
        <Parallax />
    </>
  )
}
