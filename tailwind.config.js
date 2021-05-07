module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "boost-desktop": "url('/src/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('/src/images/bg-boost-mobile.svg')",
        "shorten-desktop": "url('/src/images/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/src/images/bg-shorten-mobile.svg')",
        illustration: "url('/src/images/illustration-working.svg')",
        "icon-detailed": "url('/src/images/icon-detailed-records.svg')",
        "icon-brand": "url('/src/images/icon-brand-recognition.svg')",
        "icon-customizable": "url('/src/images/icon-fully-customizable.svg')",
        logo: "url('/src/images/logo.svg')",
        facebook: "url('/src/images/icon-facebook.svg')",

        pinterest: "url('/src/images/icon-pinterest.svg')",
        instagram: "url('/src/images/icon-instagram.svg')",
        twitter: "url('/src/images/icon-twitter.svg')",
      }),
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          "d-violet": "hsl(257, 27%, 26%)",
        },
        secondary: {
          red: "hsl(0, 87%, 67%)",
        },
        neutral: {
          gray: "rgb(191, 191, 191)",
          "grayish-violet": "hsl(257, 7%, 63%)",
          vdblue: "hsl(255, 11%, 22%)",
          "v-d-violet": "hsl(260, 8%, 14%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
