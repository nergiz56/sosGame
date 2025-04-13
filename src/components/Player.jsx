import { useState } from "react"

export default function Player({baslangic_ismi, sembol,  isActive}) {

    const [oyuncu_ismi, yeni_oyuncu_ismi] = useState(baslangic_ismi)
    const [isEdit, setIsEdit] = useState(false);

    function handleClick(){
        setIsEdit((editing) => !editing);
    }
   

    function handleChange(event){
        yeni_oyuncu_ismi(event.target.value);
    }

    let yeni_oyuncu_ismi_duzenle = <span className="player-name" >{oyuncu_ismi}  </span>;

    if(isEdit){
        yeni_oyuncu_ismi_duzenle  = <input className="player-name" type="text" required value={oyuncu_ismi} onChange={handleChange}/>
    }

    return (

        <li className={isActive ? 'active' : undefined} >
            <div className="player">
                    
                <span className="player" >{yeni_oyuncu_ismi_duzenle} </span>
                <span className="player-symbol">{sembol} </span>
                <button onClick={handleClick} className="edit">{isEdit ?  'Save' : 'Edit'} </button>
            </div>

        </li>
    )
}