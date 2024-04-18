import {useState} from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form >
                <input type="email" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar email</button>

                {/* Condicional = IF do react */}
                {userEmail && (
                    <div>
                        <p>O e-mail do usuario eh: {userEmail}</p>
                        <button onClick={limparEmail}>Mudar e-mail</button>
                    </div>
                )}
            </form>
            
        </div>
    )
}

export default Condicional