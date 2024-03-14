import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetch from './hooks/useFetch';
import TableComponent from './components/Table/Table';
import ButtonComponent from './components/Button/Button';
import './styles/App.css'

function App() {
  /*eslint-disable-next-line*/
  const { data, loading } = useSelector((state) => state);

  const fetchFunction = useFetch('/data')

  useEffect(() => {
    fetchFunction();
    /*eslint-disable-next-line*/
  }, [])

  return (
    <div className="app">
      <header className="header">
        <h1>React Test App</h1>
      </header>
      <section className='table-container'>
        {loading ? <div>Loading..</div> : <TableComponent filesData={data} />}
      </section>
      <footer className='footer'>
        <ButtonComponent url={'/list'} variant='secondary'>
          <span>View list of files</span>
        </ButtonComponent>
        <ButtonComponent url={'/data'} variant='primary'>
          <span>View files</span>
        </ButtonComponent>
      </footer>
    </div>
  );
}

export default App;
