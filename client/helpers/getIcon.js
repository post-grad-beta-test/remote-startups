import {
  Achievement,
  Anchor,
  BusinessService,
  Channel,
  Dashboard,
  Deploy,
  FingerPrint,
  Group,
  Grow,
  Organization
} from 'grommet-icons'

export default function getIcon () {
  const array = [
    Achievement,
    Anchor,
    BusinessService,
    Channel,
    Dashboard,
    Deploy,
    FingerPrint,
    Group,
    Grow,
    Organization
  ]

  const iconName = array[Math.floor(Math.random() * (array.length - 1))]
  return iconName
}
