import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
	palette: {
			primary: {
				main: '#4460F7',
			},
			secondary: {
				main: '#2140E8',
			},
			error: {
					main: '#F9A52B',
				},
			background: {
				default: '#FFF',
			},
		},
		typography: {
			fontFamily: [
        'Nunito', 
        'Roboto', 
        'sans-serif'
      ].join(',')
		},
});
