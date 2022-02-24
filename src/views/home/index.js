// import React,{useState} from 'react';
import './index.css'
import useForm from './formHooks';
import CardFuncionario from '../../components/CardFuncionario'



function Home(){
    const [{ values, loading }, handleChange, handleSubmit] = useForm();

    const enviarContato = () => {
        const dados = { ...values };
        dados['teste'] = 'funcionou'
        console.log(dados);
        // localStorage.setItem("dados",JSON.stringify(dados));
        };
        
    return(
        <section className="containerHome">
            <div className='posicaoTituloHome'>
                <span className="tituloHome" >Cadastro de Funcionários mmtech</span>
            </div>
                <div className='posicaoHome'>
                <form onSubmit={handleSubmit(enviarContato)}>
                    <div>
                        <input className='inputNome' onChange={handleChange}  type="text" id="name" name="name" placeholder='Nome' requered=""/>
                    </div>
                    <div className='posicaoInputMenor'>
                        <input className='inputMenor' onChange={handleChange} type="mail" id="email" name="email"  placeholder='Email' requered=""/>
                        <input className='inputMenor' onChange={handleChange} type="tel" id="telefone" name="telefone"  placeholder='Telefone' requered=""/>
                    </div>
                    <div>
                        <input className='inputNome' onChange={handleChange}  type="text" id="setor" name="setor" placeholder='Setor' requered=""/>
                    </div>
                    <div>
                        <button className='btnCadastrar' type='submit' >Cadastrar</button>
                         {/* <p>{localStorage.getItem("dados")}</p> */}                           
                    </div>
                </form>
                </div>
                <section> <div className='posicaoCard'><CardFuncionario/></div></section>
        </section>
    );
}

export default Home;