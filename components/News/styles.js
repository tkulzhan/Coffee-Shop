import {
    StyleSheet
} from "react-native"

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: "25px"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: "24px",
        fontFamily: "ChkLightMedium",
        color: "#fff",
    },
    headerBtn: {
        fontSize: "16px",
        fontFamily: "ChkLightMedium",
        color: "#C1C0C8"
    },
    cardsContainer: {
        marginTop: "25px"
    },
    card: {
        width: "220px",
        height: "220px",
        position: "relative",
    },
    textContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(30, 30, 36, 0.5)",
        position: "absolute",
        top: "0",
        left: "0",
        padding: "10px",
        justifyContent: "space-around"
    },
    title: {
        fontFamily: "ChkLightMedium",
        fontSize: "24px",
        color: "#fff",
        textTransform: "capitalize",
    },
    description: {
        fontFamily: "ChkLightRegular",
        fontSize: "17px",
        color: "#fff",
    },
})

export default styles