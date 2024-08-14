import fontWeight from "./font-weight/font-weight";
import text from "./text/text";
import fontSize from "./font-size/font-size";
import lineHeight from "./line-height/line-height";
import letterSpacing from "./letter-spacing/letter-spacing";
import fontFamily from "./font-family/font-family";

export const FONTS = {
  fontWeight: {
    ...fontWeight,
  },

  fontFamily: {
    ...fontFamily,
  },

  fontSize: {
    ...fontSize,
  },

  lineHeight: {
    ...lineHeight,
  },

  letterSpacing: {
    ...letterSpacing,
  },

  text: {
    ...text,
  },
};
