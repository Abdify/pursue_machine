import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: "#303f9f",
    },
    image: {
        marginLeft: "15px",
        height: "50px",
    },
}));
