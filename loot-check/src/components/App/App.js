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
            <div>
                Powered by&nbsp;
                <a target="_blank" rel="noreferrer" href="https://www.coindesk.com/price">Coindesk</a>
            </div>
        </div>
    );
}

export default App;
