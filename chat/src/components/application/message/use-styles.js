import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    messageForm:{
      marginInline: "auto",
      width: "95%",
    },
    input: {
      fontWeight: "normal",
      fontSize: "0.94rem",
      lineHeight: "121.43%",
      fontStyle: "italic",
      color: `${ctx.palette.text.secondary}`,
      border: "none",
      paddingInline: "1.5%",
      width: "100%",
      height: "2.34rem",
    },
    icon: {
      color: `${ctx.palette.secondary.light}`,
      cursor: "pointer",
    },
    messageComponent: {
      width: "80%",
      position: "fixed",
      bottom: "0",
      right:"0",
      padding: "0.5%",
      background:`${ctx.palette.glassmorphism.color}`,
      boxShadow: `${ctx.palette.glassmorphism.shadow}`,
      backdropFilter: `${ctx.palette.glassmorphism.blur}`,
      border: `${ctx.palette.glassmorphism.border}`,
    },
  };
});
