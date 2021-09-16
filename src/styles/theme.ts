import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints, BaseBreakpointConfig, } from "@chakra-ui/theme-tools"

interface Breakpoints extends BaseBreakpointConfig {
  lgr: string,
}

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#47585B",
      "600": "#999999",
      "400": "#DADADA",
      "200": "#F5F8FA",
    },
    yellow: {
      "500": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.900'
      },
    },
  },

  breakpoints: createBreakpoints<Breakpoints>({
    sm: "30em",
    md: "48em",
    lg: "62em",
    lgr: "76em",
    xl: "80em",
  })
})