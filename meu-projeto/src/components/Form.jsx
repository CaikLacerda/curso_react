function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault() // Usa-se este comando para prevenir a funcionalidade padrao do HTML de enviar o formulario, sem que possa ser mostrado no console o codigo abaixo
        console.log("Cadastrou o usuario")
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form