import { Box, Text, WorldMap, Heading } from 'grommet'
import { Card } from './Card'
import React from 'react'

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


function Home() {
  return (
    <>
      <Box align="center" pad="medium">
        <Heading size="large">Co-ject!</Heading>
        <Text size="xlarge" color='accent-5'>An online collaboration space</Text>
      </Box>
      <Card />
      <Box Box fill align="center" justify="center">
        <Box>
          <WorldMap color="#173F5F" opacity="0.8" />
        </Box>
      </Box>
    </>
  )
}

export default Home
