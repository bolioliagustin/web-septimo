import 'bootstrap/dist/css/bootstrap.min.css'
import AllNoticias from "../Components/allNoticias";
import axios from 'axios';

export default function ({ value }) {


  return (
    <>
      <div className="container-flex title center">
        <div className=" title center">Noticias</div>
        <div className="line" />
      </div>
      <AllNoticias value={value} />
    </>
  )
}

export async function getServerSideProps() {
  const postRes = await axios.get("https://secret-springs-41816.herokuapp.com/api/noticias?populate=*");
  return {
    props: {
      value: postRes.data.data
    },
  };
}