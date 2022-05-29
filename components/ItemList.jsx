import { useState } from 'react'
import { Item_List_Style } from '../styles/item_list'

import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function ItemList(props){
    //code from git
    const Hexadecimal = props.emoji.codePointAt(0).toString(16);
    //

    const [ copy, setCopy ] = useState(false)
   
    return(
        <CopyToClipboard 
            text={props.emoji}
            onCopy={() => setCopy(true)}
        >

            <Item_List_Style  >
                <div>
                    <img src={`//cdn.jsdelivr.net/emojione/assets/png/${Hexadecimal}.png`}/>
                    <p>{props.title}</p>
                </div>

                {
                    copy?
                        <span>Copied!</span>
                    :
                        <span>Click to copy emoji</span>

                }
            </Item_List_Style>

        </CopyToClipboard>
    )
}