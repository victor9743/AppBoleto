import {View, Text, Pressable, TextInput } from 'react-native';
import styles from '../styles';
import boletosController from '../controllers/boletosController';
import { SelectList } from 'react-native-dropdown-select-list';
import cliente from '../models/cliente';
import React,{ useState, useEffect  } from 'react';
import {useRoute} from '@react-navigation/native'
import  DateTimePicker   from '@react-native-community/datetimepicker';



function CadastrarBoleto () {
    const {save} = boletosController()
    const [selected, setSelected] = useState("");
    const [clientes, Cliente] = useState({})
    const [data,setData] = useState([]);
    const route = useRoute()
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({ valor: ''})

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
  
    const showDatepicker = () => {
        showMode('date');
    };
  
    useEffect(() => {
        cliente().todosClientes().then(function({ _array }){
          Cliente(_array)
          let listaClientes = _array.map((item) => {
            return {key: item.cpf, value: item.nomeCliente}
          })
          setData(listaClientes)
        })
    }, [route.params])

    return(
        <View  style={[styles.planoDeFundo]}>
            <Text style={{marginTop: 40, paddingLeft: 15}}>Selecione o cliente</Text>
            <View style={{backgroundColor: 'white', marginTop:5, marginHorizontal: 15, borderRadius: 10}}>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                    placeholder='selecione'
                    
                />
            </View>

            <Text style={{marginTop: 20, paddingLeft: 15, paddingBottom: 5}}>Data de vencimento</Text>
            <Pressable onPress={showDatepicker} style={[styles.botaoParaLogin, {marginLeft: 15, marginRight: 215}]}>
                <Text>Escolher data</Text>
            </Pressable>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />
            )}
            <Text style={{paddingLeft: 15, paddingTop: 5}}>{ (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) +'/'+ (date.getMonth() < 10 ? ('0'+(date.getMonth()+1)) : date.getMonth()+1)+'/' +date.getFullYear()}</Text>

            <Text style={{marginTop: 20, paddingLeft: 15, paddingBottom: 5}}>Valor</Text>
            <TextInput keyboardType='numeric' placeholderTextColor="rgba(225,255,255,0.4)" style={[styles.inputValor, {marginLeft: 15}]} onChangeText={function (text) {
              setForm({ ...form, valor: text, })
            }}/>
            
            <Pressable style={[styles.botaoParaLogin, {marginTop: 15, marginLeft: 205, marginRight: 30, paddingLeft: 55}]} onPress={function() {
                save([form, clientes, date])
            }}  >
                <Text>+ Boleto</Text>
            </Pressable>
        </View>
    )
}

export default CadastrarBoleto