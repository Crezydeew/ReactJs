import React,{ Component }  from 'react'
import Experience from './components/experience';
import Intro from './components/Intro';
import Motto from './components/motto'


function Content(){
    return(
        <div class="content">
            <Motto />
            <Experience />
            <Intro />
	</div>
    );
}
export default Content