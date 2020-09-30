import React from 'react'
import { Box, Heading, Stack, Text, WorldMap } from 'grommet'

function Map() {
    return (
        <Stack anchor='top' style={{display: 'flex', justifyContent:'center', alignItems:'center', marginTop: '10px'}}>
            <Box fill justify="center" >
                <WorldMap align='center' color='accent-3' opacity="0.8" />
            </Box>
            <Box fill align="center" justify="center" pad='medium'>
                <Heading size="large">Co-ject!</Heading>
                <Text size="xlarge" color='accent-5'>An online collaboration space</Text>
            </Box>
        </Stack>
    )
}

export default Map