module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hovered-button": "#EBECF2",
        "pressed-button": "#B9D7FB",
        "chat-bg": "#F1F3F5",
        "userMsgBg": "#E2EAF1",
        "suppMsgBg": "#B9D7FB",
        "chatCircle": "#F2F2F2",
        "chatMsgPrev":"#777B8C",
        "chatHovered":"#EBECF2",
      },
      fontFamily: { 
        "inter": ['Inter', 'sans-serif'] 
    },
    },
  },
  plugins: [],
};
