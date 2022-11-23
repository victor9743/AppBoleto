function boletosController() {

    function save (params){
        let  dataFormat = new Date(params[params.length -1].toString())
        let dia = ''
        let mes = ''
        let ano = ''

        dia = dataFormat.getDate();
        ano = dataFormat.getFullYear();

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
              amount: params[0],
              expire_at: dataFormat,
              customer_person_name: params[1].nomeCliente,
              customer_cnpj_cpf: params[1].cpf,
              customer_state: params[1].siglaEstado,
              customer_city_name: params[1].cidade,
              customer_zipcode: params[1].cep,
              customer_address: params[1].endereco,
              customer_neighborhood: params[1].bairro
            })
          };
          
          fetch('https://api-sandbox.kobana.com.br/v1/bank_billets', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return {
        save
    }
}

export default boletosController
