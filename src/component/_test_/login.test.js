import React from 'react';
import {shallow} from 'enzyme';
import Login from "../login/login" 

describe('<Login /> with no props', () => {
  const container = shallow(<Login />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});

describe('Login Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(<Login/>).exists()).toBe(true)
    })
   // testing the email and password input existence
    it('renders a email input', () => {
        expect(shallow( <Login/> ).find('#outlined-basic').length).toEqual(1)
      })
      it('renders a password input', () => {
        expect(shallow( <Login/> ).find('#outlined-basic1').length).toEqual(1)
      })
      test("it renders placeholder text same as passed from props",()=>{
        const placeholderProps="test"
       const wrapper=shallowExample({placeholder:placeholderProps})
    //    console.log("wrapper details",wrapper.debug());
       expect(wrapper.find('input').at(0).props().placeholder).toEqual(placeholderProps)
      })
})

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
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('.hdr1').text()).toContain("Welcome back!");
  })
})
describe('counter testing ',()=>{
  test('render the title ', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('.hdr2').text()).toContain("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyundefined");
  })
})
