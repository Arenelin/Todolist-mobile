import {Provider} from "react-redux";
import {Navigation} from "./src/features/Navigation";
import {store} from "./src/services/store";


export default function App() {
    return (
        <Provider store={store}>
                <Navigation/>
        </Provider>
    );
}

