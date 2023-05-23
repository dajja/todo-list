import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Update from './components/Update';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path=':id' element={<Update />} />
            </Routes>
        </BrowserRouter>
    )
}
