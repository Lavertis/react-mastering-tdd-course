import {shallow} from "enzyme";
import App from "./App";

describe('App', function () {
    const app = shallow(<App/>);

    it('renders properly', function () {
        expect(app).toMatchSnapshot();
    });
});