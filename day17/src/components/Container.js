import './styles/Container.css'
import Items from "./Items";

const Container = () => {
    return(
        <div>
            <div className={'head'}>
                <h1>À la carte</h1>
            </div>
        <div className={'contain'}>
            <Items itemName={'Chicken Biryani'} calories={'150'}/>
            <Items itemName={'Mutton Biryani'} calories={'200'}/>
            <Items itemName={'Shawarma'} calories={'313'}/>
            <Items itemName={'Shami Kebabs'} calories={'124'}/>
            <Items itemName={'Sheermal'} calories={'320'}/>
        </div>
        </div>
    )
}

export default Container;