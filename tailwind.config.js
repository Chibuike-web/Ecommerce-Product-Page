/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			xl: { max: "1440px" }, // Styles apply from 1440px and down
			lg: { max: "976px" }, // Styles apply from 976px and down
			md: { max: "768px" }, // Styles apply from 768px and down
			sm: { max: "480px" }, // Styles apply from 480px and down
		},
		extend: {
			colors: {
				orange: "hsl(26, 100%, 55%)",
				paleOrange: "hsl(25, 100%, 94%)",
				veryDarkBlue: "hsl(220, 13%, 13%)",
				darkGrayishBlue: "hsl(219, 9%, 45%)",
				grayishBlue: "hsl(220, 14%, 75%)",
				lightGrayishBlue: "hsl(223, 64%, 98%)",
				white: "hsl(0, 0%, 100%)",
				black: " hsl(0, 0%, 0%)",
			},
		},
		variants: {
			fill: ["hover", "focus"], // this line does the trick
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
