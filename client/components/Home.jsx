import { Box, Heading, Stack, Text, WorldMap } from 'grommet'
import React from 'react'
import { Card } from './Card'

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="small" align="center" {...rest}>
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
)

function Home () {
  return (
    <>
      <Stack anchor='top'>
        <Box fill justify="center" >
          <WorldMap align= 'center' color='accent-3' opacity="0.8" />
        </Box>
        <Box fill align="center" justify="center" pad='medium'>
          <Heading size="large">Co-ject!</Heading>
          <Text size="xlarge" color='accent-5'>An online collaboration space</Text>
        </Box>
      </Stack>
      <Card />
    </>
  )
}

export default Home
