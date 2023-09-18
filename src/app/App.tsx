import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useState } from 'react';

function App() {
    const { theme } = useTheme();
    const [showModal, setShowModal] = useState(false);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar showModal={showModal} setShowModal={setShowModal} />
            <div>
                <Sidebar showModal={showModal} setShowModal={setShowModal} />
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
