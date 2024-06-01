import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LayoutComponent from './Components/Layout/LayoutComponent';
import FormComponent from './Components/Candidate/Form/Form';

class App extends React.Component
{
  render()
  {
    return(<>
        {true && <LayoutComponent />}
        {/* <FormComponent/> */}
    </>)

  }

} 

export default App;
