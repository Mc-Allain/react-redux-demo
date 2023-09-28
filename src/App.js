import './App.css';
import AppContainer from './components/AppContainer';
import AppBody from './components/AppContainer/AppBody';
import AppHeader from './components/AppContainer/AppHeader';
import Home from './components/pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppContainer>
                    <AppHeader />
                    <AppBody>
                        <Home />
                    </AppBody>
                </AppContainer>
            </div>
        </Provider>
    );
}

export default App;
