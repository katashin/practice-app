import Head from 'next/head';
import About from '../components/About/Myabout';
import Skills from '../components/Skills/Myskill';

export default function Home() {
  return (
    <>
      <div className='container m-5'>
        <About />
        <Skills />
      </div>
    </>
  );
}
