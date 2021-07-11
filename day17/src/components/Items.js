import './styles/Items.css'

const Items = ({itemName, calories}) => {
    return(
        <div className={'item'}>
            <h1 className={'title'}>{itemName}</h1>
            <h4>500g of {itemName} contains <span>{calories}</span> calories !!</h4>
        </div>
    )
}

export default Items;