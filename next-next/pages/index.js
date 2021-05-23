import Head from 'next/head';
import React from "react";
import Menu from '../components/Menu';
import {Jumbotron,Container} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
library.add(fas)

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Aline</title>
        <meta name='description' content="Site next-app"/>
        <meta name='author' content="Aline"/>
      </Head>
      <Menu/>
      <Jumbotron fluid className="servicos">
        <style>{`
          .servicos{
            padding-top:80px;
            padding-bottom: 80px;
            background-color:#000000;
            color:#C0C0C0 ;
          }
          .circulo{
            width:140px;
            height:140px;
            background-color:#fed136;
            font-size:52px;
            padding-top: 24px;
          }
          .centralizar{
            margin: 0 auto;
          }
        `}
        </style>
        <Container className="text-center">
          <h1 className='display-4'>Serviços para empresas</h1>
          <p className='lead pb-4'>Temos a solução que a sua empresa precisa.</p>
          <div class="row">
            <div class="col-lg-4">
              <div className='rounded-circle circulo centralizar'><FontAwesomeIcon icon='dolly'></FontAwesomeIcon></div>
              <h2 className='mt-4 mb-4'>Serviços 1</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            <div class="col-lg-4">
              <div className='rounded-circle circulo centralizar'> <FontAwesomeIcon icon='caravan'></FontAwesomeIcon></div>
              <h2 className='mt-4 mb-4'>Serviços 2</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            </div>
            <div class="col-lg-4">
              <div className='rounded-circle circulo centralizar'> <FontAwesomeIcon icon='car-side'></FontAwesomeIcon></div>
              <h2 className='mt-4 mb-4'>Serviços 3</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  )
}
