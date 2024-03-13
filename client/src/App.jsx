import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetch from './hooks/useFetch';
import TableComponent from './components/Table/Table';
import ListButton from './components/Button/ListButton';
import DetailedFilesButton from './components/Button/DetailedFilesButton';
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
        <ListButton />
        <DetailedFilesButton />
      </footer>
    </div>
  );
}

export default App;
