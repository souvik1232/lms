import React from 'react';
import {shallow,mount} from 'enzyme';
import Mencard from '../Card/mentor-card';


describe('prop testing',()=>{ 
    const data=[{
        "id": 4,
        "image": null,
        "mentor_id": 12,
        "mid": "MI-1003",
        "mentor": "Mentor ",
        "course": [{
            "course_name": "DJANGO-2",
            "student_count": 1
          }]
      }]; 
    it('Renders props',()=>{
        const mountt = mount(
            <Mencard data={data}/>
        )
        console.log(mountt.debug()); 
        const result = mountt.find('.mentorname'); 
        console.log("Result debug", result.debug());  
        expect(result.contains('Mentor'))
    })
    
    // const wrapper = shallowExample({ item: valueProps })
    // // console.log("wrapper details", wrapper.debug());
    // const acronym=wrapper.find('.componentName');
    // expect(acronym.text()).toBe(valueProps.acronym)
    
})