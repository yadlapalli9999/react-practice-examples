import React from 'react';
import Person from '../components/person';
function PersonList (){
   
    return <section className="person-list">
        <Person name='John' job='developer' img='30'/>
        <Person name='rama' job='Java developer' img='36'/>
        <Person name='Ganesh' job='student' img='63'/>
        </section>
}

export default PersonList;