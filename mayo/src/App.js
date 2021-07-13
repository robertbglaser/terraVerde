
//import './App.css';
import { 
  Box, 
  Button, 
  Heading, 
  Collapsible, 
  Grommet, 
  Layer,
  ResponsiveContext 
} from 'grommet';
import React, { useState } from "react"
import { FormClose, Notification } from 'grommet-icons';
import AppBar from './AppBar';
import { hpe } from 'grommet-theme-hpe';
import TabArea from './TabArea';

const App= () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const theme = {
    global: {
      colors: {
          brand: '#228BE6',
          },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  }; 
  return (
    
      <Grommet theme={hpe} themeMode="dark" > 
      <ResponsiveContext.Consumer>
    {size => (
      <Box fill > 
        <AppBar>
            <Heading level='3' margin='none'>My App</Heading>
            <Button
              icon={<Notification />}
              onClick={() => setShowSidebar(!showSidebar)}
          />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
              app body
              <TabArea/>
          </Box>
          {(!showSidebar || size !== 'small') ? (
          <Collapsible direction="horizontal" open={showSidebar}>
          <Box
              flex
              width='medium'
             background='light-2'
             elevation='small'
             align='center'
             justify='center'
           >
             sidebar
          </Box>
        </Collapsible> 
        ): (
             <Layer>
               <Box
                 background='light-2'
   tag='header'
   justify='end'
   align='center'
   direction='row'
  >
   <Button
     icon={<FormClose />}
     onClick={() => setShowSidebar(false)}
   /> </Box>
    <Box
      fill
      background='light-2'
      align='center'
      justify='center'
    >
      sidebar is here
    </Box>
    </Layer> 
)}
        </Box>
        </Box>
        )}
       </ResponsiveContext.Consumer>
      </Grommet>
  
  );
}

export default App;
