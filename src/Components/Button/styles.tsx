import { StyleSheet } from "react-native"

const styles = StyleSheet.create ({

    pressableView: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainPressable: {
        width: 250,
        height: 250,
        backgroundColor: 'white',
        borderRadius: 200,

    },

    shadowView: {
        shadowOffset: {width: -10, height: -10},
        shadowColor: 'white',
        shadowRadius: 5,
        shadowOpacity: 0.2

    },

    shadowView2: {
        shadowOffset: {width: 8, height: 8},
        shadowOpacity: 0.2,
        shadowRadius: 8
    }

})

export default styles