import React from 'react';
import {
  About, 
  Contacts,
  Education,
  Experience, 
  Landing, 
  Navbar, 
  Projects,
  Skills
} from '../components';

import ChangeTheme from '../components/change-theme/change-theme';

function HomePage({  }) {

  return (
    <>
     {/* calling all the components here */}
      <ChangeTheme />
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Skills />
       <Projects /> 
      <Education />
      <Contacts />
    </>
  )
}
   
export default HomePage
