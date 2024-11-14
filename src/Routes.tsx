import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Home } from './Pages/Home';
import { NewTask } from './Pages/NewTask';
import { ErrorScreen } from './Pages/ErrorScreen';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/newtask' element={<NewTask />} />
            </Route>
            <Route path='/errorscreen' element={<ErrorScreen />} />
        </Routes>
    );
}