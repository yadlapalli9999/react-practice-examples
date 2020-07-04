import React from 'react';

function Person({img,name,job,childern}){
    //console.log(props)
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return <article className="person">
       <img src={url} alt="person"/>
       <h4>{name}</h4>
       <h4>{job}</h4>
    </article>
}

export default Person;