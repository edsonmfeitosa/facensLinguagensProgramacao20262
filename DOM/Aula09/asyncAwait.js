async function pesquisar(event) {
    event.preventDefault()
    let cep = document.querySelector('#cep').value;
    if (cep.length == 0) {
        return alert("digite um CEP")
    }
    cep = cep.replace('.', '').replace('-', '')
    let carregar = document.querySelector('.carregar')
    carregar.style.visibility = 'visible'
    let dados = await consultaCEP(cep)
    document.querySelector('#endereco').value = dados.logradouro
    document.querySelector('#bairro').value = dados.bairro
    document.querySelector('#estado').value = dados.estado
    carregar.style.visibility = 'hidden'
}

async function consultaCEP(cep) {
    //https://viacep.com.br/ws/18015066/json/
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let response = await fetch(url)
    console.log(response)
    let dados = await response.json()
    console.log(dados)
    return dados
}