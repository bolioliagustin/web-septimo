import 'bootstrap/dist/css/bootstrap.min.css'
import Lastnoticias from "../Components/allNoticias";
import axios from 'axios';

export default function ({ value }) {
  const getArticle = async () => {
    const resultado = await axios.get(
      "http://localhost:1337/api/noticias?populate=*"
    );
    console.log(resultado.data.data[0].attributes.image.data.attributes.url);
  };
  getArticle();


  return (
    <>
      <div className="container-flex title center">
        <div className=" title center">Noticias</div>
        <div className="line" />
      </div>
      <Lastnoticias value={value} />
    </>
  )
}

export async function getServerSideProps() {
  const postRes = await axios.get("http://localhost:1337/api/noticias?populate=*");
  return {
    props: {
      value: postRes.data.data
    },
  };
}