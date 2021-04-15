import React from 'react';
import { shallow } from 'enzyme';
import Student from '../student/student'


describe('<Student /> with no props', () => {
    const container = shallow(<Student />);
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });
});

describe('Login Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Student />).exists()).toBe(true)
    })
});
describe("Button Component Tests", () => {
    it("Renders correctly in DOM", () => {
        shallow(
            <button text="Test" />
        );
    });
    it("Expects to find button HTML element in the DOM", () => {
        const wrapper = shallow(<button text="test" />)
        expect(wrapper.find('button')).toHaveLength(1);
    });
    it("Expects to find button HTML element with className pgn in the DOM", () => {
        const wrapper = shallow(<button className="pgn" text="test" />)
        expect(wrapper.find('button.pgn')).toHaveLength(1);
    });
    it("Expects to run onClick function when button is pressed in the DOM", () => {
        const mockCallBackClick = jest.fn();
        const wrapper = shallow(<button onClick={mockCallBackClick} className="btn" text="test" />);
        wrapper.find('button').simulate('click');
        expect(mockCallBackClick.mock.calls.length).toEqual(1);
    });
})
describe('counter testing ', () => {
    test('render the title ', () => {
        const wrapper = shallow(<Student />);
        expect(wrapper.find('.t1').text()).toContain("STUDENT DETAILS");
    })
})

describe('prop testing',()=>{
    const data=[{
        id: 5,
        student: "Student Student",
        student_id: 9,
        sid: "SI-1001",
        alt_number: null,
        relation_with_alt_number_holder: null,
        current_location: null,
        current_address: null,
        git_link: null,
        year_of_experience: null
      }];
    it('Renders props',()=>{
        const mountt = shallow(
            <Student data={data}/>
        )
        console.log(mountt.debug());
        const result = mountt.find('.Tabhdr'); 
        console.log("Result debug", result.debug()); 
        
    })
    // const wrapper = shallowExample({ item: valueProps })
    // // console.log("wrapper details", wrapper.debug());
    // const acronym=wrapper.find('.componentName');
    // expect(acronym.text()).toBe(valueProps.acronym)
    
})