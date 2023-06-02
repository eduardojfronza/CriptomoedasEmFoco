import './App.css';
import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';
import Content from './components/Content/Content';

function App() {
  return (
    <>
      <section className='container'>
        <section className='sidenav'>
          <Sidenav />
        </section>

        <section className='header'>
          <Header />
        </section>

        <section className='content '>
          <Content />
        </section>

        <section className='footer'>

        </section>
      </section>
    </>
  );
}

export default App;
