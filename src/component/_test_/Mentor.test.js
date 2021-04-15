import React from 'react';
import {shallow} from 'enzyme';
import Mentor from '../mentor/mentor'

describe('<Mentor /> with no props', () => {
    const container = shallow(<Mentor />);
    it('should match the snapshot', () => {
      expect(container.html()).toMatchSnapshot();
    });
  });

  describe('Login Component', () => {
      it('should render without throwing an error', () => {
          expect(shallow(<Mentor/>).exists()).toBe(true)
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
          const wrapper = shallow(<Mentor/>);
          expect(wrapper.find('.t1').text()).toContain("MENTOR DETAILS");
        })
      })

      describe('prop testing',()=>{ 
        const data=[{
            "id": 4,
            "image": null,
            "mentor_id": 12,
            "mid": "MI-1003",
            "mentor": "Mentor ",
            "course": []
          }];
        it('Renders props',()=>{
            const mountt = shallow(
                <Mentor data={data}/>
            )
            console.log(mountt.debug());
            const result = mountt.find('mentorname'); 
            console.log("Result debug", result.debug()); 
            
        })
        // const wrapper = shallowExample({ item: valueProps })
        // // console.log("wrapper details", wrapper.debug());
        // const acronym=wrapper.find('.componentName');
        // expect(acronym.text()).toBe(valueProps.acronym)
        
    })