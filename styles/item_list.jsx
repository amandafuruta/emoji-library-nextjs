import styled from 'styled-components'

export const Item_List_Style = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 10px;
    height: 32px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    div{
        display: flex;
        align-items: center;
    }

    img{
        width: 32px;
        height: 32px;
        padding-right: 20px;
        padding-left: 20px;
    }

    p, span{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    span{
        color: #fff;
        padding-right: 20px;
    }

    &:hover{
        background-color: #C3C3C3;
    }

`