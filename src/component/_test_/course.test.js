import React from 'react';
import {shallow} from 'enzyme';
import Course from '../course/course'

describe('<Mentor /> with no props', () => {
    const container = shallow(<Course />);
    it('should match the snapshot', () => {
      expect(container.html()).toMatchSnapshot();
    });
  });

  describe('Login Component', () => {
      it('should render without throwing an error', () => {
          expect(shallow(<Course/>).exists()).toBe(true)
      })
    });
    describe("Button Component Tests", () => {
        it("Renders correctly in DOM", () => {
            shallow(
                <button text="Test" />
            );
        });
        it("Expects to find button HTML element in the DOM", () => {
            const wrapper = shallow(<button text="test"/>)
            expect(wrapper.find('button')).toHaveLength(1);
        });
        it("Expects to find button HTML element with className pgn in the DOM", () => {
            const wrapper = shallow(<button className="pgn" text="test"/>)
            expect(wrapper.find('button.pgn')).toHaveLength(1);
        });
        it("Expects to run onClick function when button is pressed in the DOM", () => {
            const mockCallBackClick = jest.fn();
            const wrapper = shallow(<button onClick={mockCallBackClick} className="btn" text="test"/>);
            wrapper.find('button').simulate('click');
            expect(mockCallBackClick.mock.calls.length).toEqual(1);
        });
    }) 
    describe('counter testing ',()=>{
        test('render the title ', () => {
          const wrapper = shallow(<Course/>);
          expect(wrapper.find('.t1').text()).toContain("COURSE DETAILS");
        })
      })