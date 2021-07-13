import React from 'react'

import { Box, Tab, Tabs} from 'grommet';
 const TabArea= () => {
    const [index, setIndex] = React.useState();
    const onActive = nextIndex => setIndex(nextIndex);
  
    return (
      <Box>
        <Tabs activeIndex={index} onActive={onActive} justify="start">
          <Tab title="Section A">
            <Box margin="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam, eaque! Dignissimos unde quo corrupti soluta deleniti quisquam
            <br/>
            <img src='./gg_bridge.jpg' width='250px' height='250px' alt='Golden Gate bridge'/>
            </Box>
          </Tab>
          <Tab title="Section B">
            <Box margin="small">Eat at Joes, try the cheeseburgers</Box>
          </Tab>
          <Tab title="Section C">
            <Box margin="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam, eaque! Dignissimos unde quo corrupti soluta deleniti quisquam, repudiandae tenetur laborum dolores, explicabo quibusdam! Vitae culpa, voluptates dicta repellat et dolorem?</Box>
          </Tab>
        </Tabs>
      </Box>
    );
  };
export default TabArea;