
import './App.css';
import Baner from './components/Baner';
import Carrusel from './components/Carrusel';
import Concert from './components/Concerts';
import Market1 from './components/Market1';
import Market2 from './components/Market2';
import Footer from './components/Footer';
import { useEffect, useState } from 'react'
import axios from 'axios'
import TitleConcerts from './components/TitleConcerts';
import Concertmaster from './components/concertmaster';




function App() {
  const [concerts, setConcerts] = useState([])

  useEffect(() => {

    axios.get("./data.json")

      .then((data) => {

        console.log(data)

        setConcerts(data.data.data)
      })
  }, [])


  return (
    <>
      <Carrusel />
      <Market1
        Titulo1="Simplier."
        Titulo2="Happier."
        Titulo3=" Better concerts."
        Paragraph="Lorem ipsum dolor sit, ametconsectetur adipisicing elitPorro in iusto sit cumque quo corporis perferendis sequi deserunt nobis ecusandaedignissimos dolor facilis nemo obcaecati quaerat assumenda Maxime natus ad " />
      <Market2 />

      <TitleConcerts />
      
    
      <div class=" container overflow-x-auto  mx-auto flex md:overflow-visible  px-6 py-6 ">
   
        <div class="  px-6 py-6 shrink-0  snap-center flex sm:grid sm:grid-cols-1  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  ">
          <Concertmaster/>
        </div>
      </div>
     
     
      <Baner />
      <Footer />



    </>
  );
}

export default App;
