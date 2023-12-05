import styled from 'styled-components';

export const ContainerDiv = styled.div`
    display: block;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 1920px;
    height: 923px;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const ModalContentDiv = styled.div`
    width: 400px;
    height: 150px;
    background-color: #262528;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`
