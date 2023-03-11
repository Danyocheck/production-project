import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./components/App"
import Themeprovider from "./theme/ThemeProvider"

render(
    <BrowserRouter>
        <Themeprovider>
            <App />
        </Themeprovider>
    </BrowserRouter>,
    document.getElementById('root')
)