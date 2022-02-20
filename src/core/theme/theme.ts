import 'dayjs/locale/es-mx'

import type { MantineThemeOverride } from '@mantine/core'

const theme: MantineThemeOverride = {
  fontFamily: "'Montserrat', sans-serif",
  headings: {
    fontFamily: "'Odibee Sans', cursive",
  },
  colors: {
    primary: [
      '#dbfbff',
      '#b5ecf7',
      '#8ddeef',
      '#63d0e7',
      '#3ac2de',
      '#21a9c5',
      '#10839a',
      '#015e6f',
      '#003945',
      '#00151b',
    ],
    secondary: [
      '#ffe4e3',
      '#ffb9b4',
      '#fa8d85',
      '#f76055',
      '#f33325',
      '#da1a0c',
      '#aa1208',
      '#7a0a05',
      '#4c0500',
      '#200000',
    ],
    info: [
      '#dbfbff',
      '#afefff',
      '#80e3ff',
      '#52d7fe',
      '#2eccfd',
      '#20b2e4',
      '#0f8bb2',
      '#006380',
      '#003b4f',
      '#00151e',
    ],
  },
  primaryColor: 'primary',
  datesLocale: 'es-mx',
  other: {
    headerHeight: 60,
    navbarWidth: 260,
  },
}

export default theme
