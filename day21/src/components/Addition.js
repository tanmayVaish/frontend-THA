import './styles/Addition.css'

const Addition = () => {

    return (
        <div className={'inputs'}>
            <div>
                <label htmlFor="{'itemName'}">Item</label>
                <input type={'text'} id={'itemName'} placeholder={'Item Name'}/>
            </div>
            <div>
                <label htmlFor="{'calories'}">Calories</label>
                <input type={'number'} id={'calories'} placeholder={'Calories'}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </div>
    )

}
export default Addition;