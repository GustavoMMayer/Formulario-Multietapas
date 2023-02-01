import styled from "styled-components";

export const Container = styled.div`
    margin:30px 0;
    cursor: pointer;

    a{
        text-decoration: none;
        display: flex;
        align-items: center;
    }
`;

export const Light = styled.div<{active:boolean}>`
    width: 100%;
    height: 100%;
    background-color: ${props => props.active ? 'rgba(0,100,150,.4)': 'transparent'};
    border-radius: 10px;
    z-index: 999;
   

`;
export const Info = styled.div`
    flex: 1;
    margin-right: 20px;

`;
export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color:#fff;

`;
export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color:#b8b8d4

`;
export const IconArea = styled.div<{active:boolean}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props=>props.active? '#25cd89':'#494a7c;'}; 
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const Point= styled.div<{active:boolean}>`
    width: 6px;
    height: 6px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props=>props.active? '#25cd89':'#02044A'};

`;