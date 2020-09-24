import { Box, Card, CardBody, CardFooter, Grid, Text } from 'grommet'
import {
  Location,

  ShieldSecurity, System,

  Tasks
} from 'grommet-icons'
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

const data = [
  {
    icon: <Location size='large'/>, title: 'Mr Yellow', subtitle: 'Goes on holiday', message: 'follow him on twitter'
  },
  {
    icon: <ShieldSecurity size='large'/>, title: 'Mrs Clark', subtitle: 'Lost 50kg', message: 'Find out how'
  },
  {
    icon: <Tasks size='large'/>, title: 'Sam', subtitle: 'Married a ghost', message: 'catch up on the wedding'
  },
  {
    icon: <System size = 'large'/>, title: 'Mr Bean', subtitle: 'Hacks a bank', message: 'help us arrest him'
  }

]

function Home () {
  return (
    <Box pad="large">
      {/* Responsive Grid */}
      <Grid gap="medium" rows="small" columns={{ count: 'fit', size: 'small' }}>
        {data.map(value => (
          <Card background={value.color} key={value.message}>
            <CardBody pad="small">
              <Identifier
                pad="small"
                title={value.title}
                subTitle={value.subTitle}
                size="small"
                align="start"
              >
                {value.icon}
              </Identifier>
            </CardBody>
            <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Text size="xsmall">{value.message}</Text>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Box>
  )
}

export default Home
