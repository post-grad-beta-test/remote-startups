import React from 'react'
import { Box, Heading, Image, Text, Paragraph, Button } from 'grommet'
import { Add, Info } from 'grommet-icons'

export const Card = () => {
  return (
    <div className='container'>
      <div>
        <Box align="center" justify="center" pad="small" background={{ "image": "url('')" }} height="xlarge" flex fill="vertical" direction="row-responsive" wrap overflow="auto" round="medium" >
          <Box align="center" pad="small" background={{ "0": "b", "1": "r", "2": "a", "3": "n", "4": "d", "color": "white", "image": "url('')", "position": "bottom" }} round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }}>
            <Box align="start" justify="start" pad="small" direction="row" alignSelf="start" />
            <Box align="center" justify="center" pad="xsmall" margin="xsmall" animation="zoomIn" hoverIndicator border={{ "style": "outset" }} elevation="medium" gap="xsmall">
              <Heading level="2" size="medium" margin="xsmall" textAlign="center" truncate={false}>
                Project Name
        </Heading>
              <Image src="https://picsum.photos/200
" opacity="strong" />
              <Text weight="bold" textAlign="center" size="medium">
                Project Ends:
        </Text>
              <Paragraph size="small" margin="medium" textAlign="center">
                I'm a  designer in SF. I work with folks that are innovators willing to make the next big idea. What do you want to make?
        </Paragraph>
              <Box align="center" justify="center" pad="small" direction="row-responsive" flex alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
                <Button label="Join" icon={<Add />} />
                <Button label="Find Out More" icon={<Info />} hoverIndicator={false} />
              </Box>
            </Box>
          </Box>
          <Box align="center" pad="small" background={{ "0": "b", "1": "r", "2": "a", "3": "n", "4": "d", "color": "white", "image": "url('')", "position": "bottom" }} round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }}>
            <Box align="start" justify="start" pad="small" direction="row" alignSelf="start" />
            <Box align="center" justify="center" pad="xsmall" margin="xsmall" animation="zoomIn" hoverIndicator border={{ "style": "outset" }} elevation="medium" gap="xsmall">
              <Heading level="2" size="medium" margin="xsmall" textAlign="center" truncate={false}>
                Project Name
        </Heading>
              <Image src="https://picsum.photos/200
" opacity="strong" />
              <Text weight="bold" textAlign="center" size="medium">
                Project Ends:
        </Text>
              <Paragraph size="small" margin="medium" textAlign="center">
                I'm a  designer in SF. I work with folks that are innovators willing to make the next big idea. What do you want to make?
        </Paragraph>
              <Box align="center" justify="center" pad="small" direction="row-responsive" flex alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
                <Button label="Join" icon={<Add />} />
                <Button label="Find Out More" icon={<Info />} hoverIndicator={false} />
              </Box>
            </Box>
          </Box>
          <Box align="center" pad="small" background={{ "0": "b", "1": "r", "2": "a", "3": "n", "4": "d", "color": "white", "image": "url('')", "position": "bottom" }} round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }}>
            <Box align="start" justify="start" pad="small" direction="row" alignSelf="start" />
            <Box align="center" justify="center" pad="xsmall" margin="xsmall" animation="zoomIn" hoverIndicator border={{ "style": "outset" }} elevation="medium" gap="xsmall">
              <Heading level="2" size="medium" margin="xsmall" textAlign="center" truncate={false}>
                Project Name
        </Heading>
              <Image src="https://picsum.photos/200
" opacity="strong" />
              <Text weight="bold" textAlign="center" size="medium">
                Project Ends:
        </Text>
              <Paragraph size="small" margin="medium" textAlign="center">
                I'm a  designer in SF. I work with folks that are innovators willing to make the next big idea. What do you want to make?
        </Paragraph>
              <Box align="center" justify="center" pad="small" direction="row-responsive" flex alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
                <Button label="Join" icon={<Add />} />
                <Button label="Find Out More" icon={<Info />} hoverIndicator={false} />
              </Box>
            </Box>
          </Box>

        </Box>
      </div>
    </div>
  )
}
