import * as C from './styded'
import {useForm, FormActions} from '../../contexts/FormContext'
import { useNavigate, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import {ChangeEvent, useEffect} from 'react'



export const Fim= () => {
    

    return(
        
            <C.Container>
                Cadastro efeuado com Sucesso!!

                <p>*Papai noel não existe, vai procurar emprego...</p>
            </C.Container>
    
    )
};