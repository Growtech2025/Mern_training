import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { store } from './redux/Store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


