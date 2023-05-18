import './App.css';
import Input from './components/Input';
import List from './components/List';

const App = () => {
  return (
    <>
      <div className='part-1'>
        <h1 className='pb-3 text-center'>My Todos</h1>
        <Input />
      </div>
      <List />
    </>
  )
}

export default App;
