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

/**
 * Selects a random icon
 * @returns {import('grommet-icons').Icon} grommet icon component
 */
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
