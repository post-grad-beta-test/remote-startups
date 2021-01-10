import { Box, Button, Grid, Heading, Paragraph, Text } from 'grommet'
import React from 'react'
import getIcon from '../helpers/getIcon'

export default function Card({ props }) {
  const AnIcon = getIcon()
  return (
    <div key={props.id}>
      <Box
        align='center'
        pad='small'
        background={{
          color: 'white',
          image: "url('')",
          position: 'bottom',
        }}
        round='medium'
        margin='medium'
        direction='column'
        alignSelf='center'
        animation={{ type: 'fadeIn', size: 'medium' }}
        elevation='medium'
      >
        <Box
          align='start'
          justify='start'
          pad='small'
          direction='row'
          alignSelf='start'
        />
        <Box
          align='center'
          justify='center'
          pad='xsmall'
          margin='xsmall'
          animation='zoomIn'
          hoverIndicator
          gap='xsmall'
        >
          <AnIcon size='xlarge' />

          <Heading
            level='2'
            size='medium'
            margin='xsmall'
            textAlign='center'
            truncate={false}
          >
            {props.name}
          </Heading>
          <Text weight='bold' textAlign='center' size='medium'>
            Dates: {props.date_start} - {props.date_end}
          </Text>
          <Paragraph size='small' margin='medium' textAlign='center'>
            {props.description}
          </Paragraph>

          <Box
            align='center'
            justify='center'
            pad='small'
            direction='row-responsive'
            flex
            alignSelf='center'
            basis='xxsmall'
            gap='small'
            margin='xsmall'
          >
            <Button
              disabled={Boolean(
                joinedIds.find((item) => item.project_id === props.id)
              )}
              label='Join'
              icon={<Add />}
              onClick={() => subscribe(user, props.id)}
            />
          </Box>
        </Box>
      </Box>
    </div>
  )
}
