import './App.css';
import Input from './components/Input';
import List from './components/List';
import { useEffect, useState, ReactNode } from "react";
import axios from 'axios';
import { DataProps } from './type';

const App = () : ReactNode => {
  const [data, setData] = useState<DataProps[]>([]);
  const [togle, setTogle ] = useState<boolean>(true);
  useEffect(() => {
    axios.get("http://localhost:3000/list")
      .then(res => setData(res.data.reverse()))
      .catch(err => console.log(err));
  }, [togle])
  return (
    <>
      <div className='part-1'>
        <h1 className='pb-3 text-center'>My Todos</h1>
        <Input setTogle={setTogle} togle={togle}/>
      </div>
      <List data={data} setTogle={setTogle} togle={togle}/>
    </>
  )
}

export default App;
