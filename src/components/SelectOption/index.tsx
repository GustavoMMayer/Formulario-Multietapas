import * as C from './styles';

type Props ={
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: ()=> void;
}

export const SelectOption =({title, description, icon, selected, onClick}:Props) => {


    return(
        <C.Conatiner 
            selected ={selected}
            onClick ={onClick}>
                <C.Icon>{icon}</C.Icon>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>

        </C.Conatiner>
    )


}