import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import JobCarousel from './components/JobCarousel';
import './App.css';
import logo from './assets/logo.png';

const jobs = [
  {
    title: 'Representante Comercial',
    description: 'Descrição: Desejável experiência com atendimento ao cliente...',
    logo: 'https://yata-apix-a72da87a-7d6e-4d6a-b431-451af7303de8.s3-object.locaweb.com.br/a7a3506ea16c44d69698506c7901f10f.png',
  },
  {
    title: 'Assistente de Suporte Comercial',
    description: 'Descrição: Prestar suporte em controles gerenciais...',
    logo: logo,
  },
  {
    title: 'Analista de Suporte',
    description: 'Descrição: Desejável experiência com atendimento ao cliente...',
    logo: logo,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <h2 className="abc2">RECIFE</h2>
        <h2 className="abc">290 vagas encontradas</h2> <hr className='linha'></hr>
        <JobCarousel jobs={jobs} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
