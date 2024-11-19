import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Home } from './Pages/Home';
import { Task } from './Pages/NewTask';
import { ErrorScreen } from './Pages/ErrorScreen';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path='/task' element={<Task />} />
                <Route path='/task/:id' element={<Task />} />
                <Route path='*' element={<ErrorScreen />} />
            </Route>
        </Routes>
    );
}