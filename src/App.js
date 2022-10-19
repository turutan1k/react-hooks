import './App.scss';
import Header from './components/Header/Header';
import Content from './components/Pages/Content/Content';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="AppContainer">
                <Content />
            </div>
        </div>
    );
}

export default App;
