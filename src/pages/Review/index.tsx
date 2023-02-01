import * as C from './styded'
import {useForm, FormActions} from '../../contexts/FormContext'
import { useNavigate, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import {ChangeEvent, useEffect} from 'react'



export const Review = () => {
    const navigate = useNavigate();
    const{state, dispatch} = useForm();

    useEffect(()=>{
        if(state.name === ''){
            navigate('/');
        }else if ( state.email ==='' || state.github === ''){
            navigate('/step3')
        }else{
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 4
            
            })
        }

    },[])

    const handleNextStep =()=>{
        if ( state.email !== '' && state.github !==''){
        navigate('/Fim')
        } else{
            alert('Preencha os dados 🧐')
        }

    }

    

    return(
        <Theme>
            <C.Container>
                <p>Revisão </p>
                <h1>Legal {state.name}, verifique seus dados antes de concluir!!</h1>
                
                <C.Info>
                        <p className='label'>Nome:</p>   <h3>{state.name}</h3>
                </C.Info>
                
                <C.Info>
                    <p className='label'>Nivel: </p>  {state.level === 0&& <h3>Sou Iniciante  🥳</h3> } {state.level === 1 && <h3>Sou Programador 😎</h3> } 
                </C.Info>
                <C.Info>
                    <p className='label'>Email:</p>   <h3>{state.email}</h3>
                </C.Info>
                <C.Info>
                    <p className='label'>GitHub:</p>   <h3>{state.github}</h3>
                </C.Info>
                  
                
                
                <Link to='/step3' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Enviar</button>
            </C.Container>
        </Theme>
    )
};