import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    familyFont:{
        fontFamily: 'monospace'
    },
    planoDeFundo:{
        backgroundColor: '#E5DB3C',
        width: '100%',
        height: '100%'
    },
    textoBoasVindas:{
        fontSize: 28,
        marginTop: 40,
        marginLeft: 80,
        marginRight: 80
    },
    moneyLogo: {
        height: 200,
        width: 200,
        marginTop: 100,
        marginLeft: 110,
        borderRadius: 100
    },
    botoesBoasVindas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 60,
        marginRight: 60,
        marginTop: 50
    },
    botaoParaLogin: {
        backgroundColor: '#10c491',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10
    },
    botaoParaRegistrar: {
        backgroundColor: '#f93800',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        
    },
    inputLogin:{
        width: width - 72,
        height: 56,
        backgroundColor: '#000',
        borderRadius: 6,
        marginVertical: 8,
        marginHorizontal: 37,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#fff'
    },
    inputValor:{
        width: width - 35,
        height: 56,
        backgroundColor: 'white',
        borderRadius: 6,
        marginVertical: 8,
        marginHorizontal: 37,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black'
    },
    labelLogin: {
        marginLeft: 35
    },
    buttonLogin: {
        backgroundColor: '#10c491',
        height: 56,
        width: width - 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 36,
        borderRadius: 4,
      },
      botoesHome:{
        backgroundColor: '#10c491',
        height: 56,
        width: width - 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2,
        marginHorizontal: 36,
        borderRadius: 4,

      }
})

export default styles
export { width, height }