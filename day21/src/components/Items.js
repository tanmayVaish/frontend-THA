import './styles/Items.css'
import Addition from "./Addition";

const Items = ({itemName, calories, list, updateList}) => {

    const del = {
        'background-color': 'green',
        'height':'4vh',
        'color':'orange',
        'font-weight':'800',
        'border-radius':'10px'
    }

    const deleteItems = () => {
        updateList(list.filter(item => item.itemName !== itemName))
    }


    return (
        <div className={'item'}>
            <div>
                <h1 className={'title'}>{itemName}</h1>
                <h4>500g of {itemName} contains <span>{calories}</span> calories !!</h4>
            </div>
            <button style={del} onClick={deleteItems}>Delete</button>
        </div>
    )
}

export default Items;