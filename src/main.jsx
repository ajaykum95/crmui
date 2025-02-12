import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store/index.jsx';
import { Provider } from 'react-redux';
// import './card.css'
import './styles/global.css';  // Import global styles
import "./styles/custom.css";  // Then import component-specific styles

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
