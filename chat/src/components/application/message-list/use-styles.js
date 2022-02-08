import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((ctx) => {
  return {
    messageList: {
      paddingBlock: "2%",
      paddingInline: "1%",
      display: "flex",
      flexDirection: "column",
      gap: "0.7rem",
      width: "80%",
      maxHeight: "92%",
      marginLeft: "auto",
      overflowY: "auto",
    },
    messageCart: {
      background:`${ctx.palette.glassmorphism.gradient}`,
      boxShadow: `${ctx.palette.glassmorphism.shadow}`,
      backdropFilter: `${ctx.palette.glassmorphism.blur}`,
      borderRadius: `${ctx.palette.glassmorphism.radius}`,
      border: `${ctx.palette.glassmorphism.border}`,
      borderBottom:"0",
      padding: "0.5%",
      maxWidth: "45%",
      minWidth: "15%",
      wordWrap: "break-word",
      position: "relative",
      alignSelf: (props) =>
        props.author === "user" ? "flex-end" : "flex-start",
         
      "&::after": {
        content: "''",
        position: "absolute",
        left: (props)=>props.author === "user" ? "" : "20px",
        right: (props)=>props.author === "user"? "20px" : "",
        bottom: "-20px",
        border: "10px solid transparent",
        borderTop: "10px solid rgba(225, 250, 255, 0.7)"
      },
    },
    messageCartAuthor: {
      color: `${ctx.palette.text.secondary}`,
      fontWeight: "500",
      fontSize: "1rem",
      lineHeight: "121.43%",
      textAlign: (props) => (props.author === "user" ? "right" : "justify"),
    },
    messageCartText: {
      color: `${ctx.palette.text.main}`,
      fontWeight: "300",
      fontSize: "1.2rem",
      lineHeight: "125.43%",
      fontStyle: "italic",
    },
    messageCartTime: {
      color: `${ctx.palette.secondary.light}`,
      fontWeight: "300",
      fontSize: "0.8rem",
      lineHeight: "125.43%",
      paddingTop: "10px",
      textAlign: (props) => (props.author === "user" ? "right" : "left"),
    },
  };
});
