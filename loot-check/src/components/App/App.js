import Wallet from "../Wallet/Wallet";
import Loot from "../Loot/Loot";

function App() {
    return (
        <div className="App">
            <h2>Loot Check</h2>
            <hr/>
            <Wallet/>
            <hr/>
            <Loot/>
        </div>
    );
}

export default App;
