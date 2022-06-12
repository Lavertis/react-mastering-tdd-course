import App from './App';
import {shallow} from "enzyme";

const app = shallow(<App/>)

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});