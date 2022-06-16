import {shallow} from "enzyme";
import App from "./App";

describe('App', function () {
    const app = shallow(<App/>);

    it('renders properly', function () {
        expect(app).toMatchSnapshot();
    });

    it('contains a connected Wallet component', function () {
        expect(app.find('Connect(Wallet)').exists()).toBeTruthy();
    });

    it('contains a connected Loot component', function () {
        expect(app.find('Connect(Loot)').exists()).toBeTruthy();
    });
});