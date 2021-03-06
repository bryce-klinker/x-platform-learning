import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
global.fetch = require('jest-fetch-mock');

export * from './get-all-text';
export * from './flush-promises';
export * from './fake-navigation';
