import FormStyle from "../../Styles/form"
import ButtonStyle from "../../Styles/Button"
import styled from "styled-components"
export default function SignUp() {
  return (
    <SignUpStyle>   
    <h1>MyWallet</h1>
     <FormStyle>
       <input type="name" placeholder="Nome" name="name" required />
       <input type="email" placeholder="E-mail" name="email" required />
       <input type="password" placeholder="Senha" name="password" required />
       <input type="password" placeholder="Confirme a senha" name="confirm-password" required />
       <ButtonStyle>Cadastrar</ButtonStyle>
       <p>Já tem uma conta ?Entre agora!</p>
     </FormStyle></SignUpStyle>
   
  )
}

const SignUpStyle = styled.div`
  h1{
    font-size: 32px;
    color: white;
    width: 326px;
    margin: 0 auto 21.5px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Saira Stencil One', cursive;
  }
  p{
    font-family: "Raleway", sans-serif;
    color: white;
    font-size: 15px;
    margin-top: 32px;
  }
`
