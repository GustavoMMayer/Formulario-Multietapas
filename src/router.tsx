import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {FormStep1} from './pages/FormStep1';
import {FormStep2} from './pages/FormStep2';
import {FormStep3} from './pages/FormStep3';
import {Review} from './pages/Review';
import { Fim } from './pages/Fim';

export const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<FormStep1/>}/>
                <Route path='/step2'  element ={<FormStep2/>}/>
                <Route path='/step3'  element ={<FormStep3/>}/>
                <Route path='/Review'  element ={<Review/>}/>
                <Route path='/Fim'  element ={<Fim/>}/>
            </Routes>
        </BrowserRouter>
    )
}