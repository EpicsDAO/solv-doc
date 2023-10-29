// Icons => https://heroicons.com/
import {
  HeartIcon,
  HomeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  WindowIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
  BookOpenIcon,
  FireIcon,
  CloudArrowUpIcon,
  CommandLineIcon,
  CogIcon,
} from '@heroicons/react/24/outline'

export const defaultMainNav = [
  {
    name: 'common:navs.defaultMainNav.doc',
    href: '/doc/',
  },
  {
    name: 'common:navs.defaultMainNav.quickstart',
    href: '/doc/quickstart/latitude',
  },
  {
    name: 'common:navs.defaultMainNav.enterprise',
    href: '/enterprise',
  },
  {
    name: 'common:navs.defaultMainNav.news',
    href: '/news/',
  },
  {
    name: 'common:navs.defaultMainNav.dao',
    href: '/dao/',
  },
]

export const commonFooterNav = [
  {
    name: 'common:navs.commonFooterNav.doc',
    href: '/doc/',
  },
  {
    name: 'common:navs.commonFooterNav.quickstart',
    href: '/doc/quickstart/latitude',
  },
  {
    name: 'common:navs.commonFooterNav.enterprise',
    href: '/enterprise',
  },
  {
    name: 'common:navs.commonFooterNav.news',
    href: '/news/',
  },
  {
    name: 'common:navs.commonFooterNav.dao',
    href: '/dao/',
  },
  {
    name: 'common:navs.commonFooterNav.press-kits',
    href: '/press-kits/',
  },
  {
    name: 'common:navs.commonFooterNav.privacy',
    href: '/legal/privacy-policy/',
  },
]

export const docMenuNav = [
  { name: 'doc:menuNav.home', href: '/doc/', icon: HomeIcon },
  {
    name: 'doc:menuNav.general.groupTitle',
    children: [
      {
        name: 'doc:menuNav.general.motivation',
        href: '/doc/general/motivation/',
        icon: HeartIcon,
      },
    ],
  },
  {
    name: 'doc:menuNav.quickstart.groupTitle',
    children: [
      {
        name: 'doc:menuNav.quickstart.latitude',
        href: '/doc/quickstart/latitude',
        icon: RocketLaunchIcon,
      },
      {
        name: 'doc:menuNav.quickstart.edgevana',
        href: '/doc/quickstart/edgevana',
        icon: RocketLaunchIcon,
      },
      {
        name: 'doc:menuNav.quickstart.backup',
        href: '/doc/quickstart/backup',
        icon: ShieldCheckIcon,
      },
    ],
  },
]

export const docHeaderNav = [
  {
    name: 'doc:headerNav.home',
    href: '/',
  },
  {
    name: 'doc:headerNav.news',
    href: '/news/',
  },
]
