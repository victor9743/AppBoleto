function boletosController() {

    function save (params){
        console.log(params)
    //     const options = {
    //     method: 'POST',
    //     headers: {
    //         accept: 'application/json',
    //         'content-type': 'application/json',
    //         authorization: 'Bearer -J04vfs8S0jIItnM-RIVJzo1xuhd6guxwOs3FuQZWUM'
    //     },
    //     body: JSON.stringify({
    //         interest_type: 0,
    //         interest_days_type: 0,
    //         fine_type: 0,
    //         discount_type: 0,
    //         charge_type: 1,
    //         dispatch_type: 1,
    //         document_type: '02',
    //         acceptance: 'N',
    //         prevent_pix: false,
    //         amount: 10,
    //         expire_at: '2022-12-22',
    //         customer_person_name: 'teste',
    //         customer_cnpj_cpf: '917.457.818-97',
    //         customer_state: 'CE',
    //         customer_city_name: 'Fortaleza',
    //         customer_zipcode: '60865095',
    //         customer_address: 'Rua teste',
    //         customer_neighborhood: 'Centro'
    //     })
    // };

    // fetch('https://api-sandbox.kobana.com.br/v1/bank_billets', options)
    // .then(response => response.json())
    // .then(function(response){
    //     console.log(response.line)
    //     // salvar dados no banco
    // })
    // .catch(err => console.error(err));

    }

    return {
        save
    }
}

export default boletosController