import cliente from "../models/cliente"
import boleto from "../models/boleto"
import { useNavigation } from '@react-navigation/native'
function boletosController() {
    const navigation = useNavigation()
    function save (params){
        let  dataFormat = new Date(params[params.length -1].toString())
        let dia = ''
        let mes = ''
        let ano = ''

        dia = dataFormat.getDate();
        ano = dataFormat.getFullYear();
        const {clientesByName} = cliente()
        console.log(params)
        clientesByName(params[1]).then(function({ _array }){
           if((dataFormat.getMonth() + 1) < 10 ){
                mes = "0"+ (dataFormat.getMonth() + 1)
            } else {
                mes  = (dataFormat.getMonth() + 1)
            }

            if((dataFormat.getDate()) < 10 ){
                dia = "0"+ (dataFormat.getDate())
            } else {
                dia  = (dataFormat.getDate())
            }

            dataFormat = ano +'-'+mes+'-'+dia

            const options = {
                method: 'POST',
                headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer -J04vfs8S0jIItnM-RIVJzo1xuhd6guxwOs3FuQZWUM'
                },
                body: JSON.stringify({
                interest_type: 0,
                interest_days_type: 0,
                fine_type: 0,
                discount_type: 0,
                charge_type: 1,
                dispatch_type: 1,
                document_type: '02',
                acceptance: 'N',
                prevent_pix: false,
                amount: params[0].valor,
                expire_at: dataFormat,
                customer_person_name: _array[0].nomeCliente,
                customer_cnpj_cpf: _array[0].cpf,
                customer_state: _array[0].siglaEstado,
                customer_city_name: _array[0].cidade,
                customer_zipcode: _array[0].cep,
                customer_address: _array[0].endereco,
                customer_neighborhood: _array[0].bairro
                })
            };
            fetch('https://api-sandbox.kobana.com.br/v1/bank_billets', options)
            .then(response => response.json())
            .then(function(response) {
                const {saveBoleto} = boleto()
                console.log(response.id)
                if(response.status) {
                    saveBoleto([response.id, _array[0].id , params[0].valor, response.url, dataFormat ])
                    navigation.navigate('Home')
                    alert('Boleto cadastrado com sucesso')
                } else {
                    console.log('erro')
                }
            }).catch(err => console.error(err));
        })
    }

    return {
        save
    }
}

export default boletosController
