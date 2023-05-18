import {
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    hello: {
        color: '#fff',
        fontFamily: 'ChkLightSemiBold',
        fontSize: '32px',
        marginBottom: '10px',
        marginTop: '20px'
    },
    welcomeMessage: {
        color: '#fff',
        fontFamily: 'ChkLightRegular',
        fontSize: '24px'
    },
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '30px',
        height: '50px',
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: "backgroundColor: 'rgba(255, 255, 255, 0.18)',",
        marginRight: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        height: '100%',
        padding: '10px',
    },
    searchInput: {
        fontFamily: 'ChkLightRegular',
        width: '100%',
        height: '100%',
        color: '#fff'
    },
    searchBtn: {
        width: 50,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabsContainer: {
        width: '100%',
        marginTop: '30px',
    },
    tab: (activeTabType, item) => ({
        paddingVertical: '5px',
        paddingHorizontal: '5px',
        borderRadius: '10px',
        borderWidth: 1,
        borderColor: activeTabType === item ? '#fff' : '#C1C0C8',
    }),

    tabText: (activeTabType, item) => ({
        fontSize: '16px',
        fontFamily: 'ChkLightMedium',
        color: activeTabType === item ? '#fff' : '#C1C0C8',
    })
})

export default styles