import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Home } from './Pages/Home';
import { Task } from './Pages/NewTask';
import { ErrorScreen } from './Pages/ErrorScreen';
import { TaskForms } from './Pages/NewTask/components/TaskForms';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path='/task' element={<Task />} />
                <Route path='/task/:id' element={<TaskForms />} />
                <Route path='*' element={<ErrorScreen />} />
            </Route>
        </Routes>
    );
}