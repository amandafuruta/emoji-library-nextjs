import styled from 'styled-components'

export const HomeStyle = styled.section`
    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;

        h1{
            font-family: 'Roboto', sans-serif;
            font-size: 32px;
        }

        img{
            padding: 14px;
        }
    }

    .main{
        
        .input{
            border-bottom: 1px solid #ccc;

            input{
            border-radius: 4px;
            border: 1px solid #bbb;
                box-sizing: border-box;
                font-size: 18px;
                padding: 10px 8px;
                width: 100%;
                margin-bottom: 10px;
            }
        }
    }

`
