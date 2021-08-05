import './styles/Container.css'
import Items from "./Items";
import {useState} from "react";

const menu = [
    {
        itemName: 'Chicken Biryani',
        itemCalories: '150'
    },
    {
        itemName: 'Mutton Biryani',
        itemCalories: '200'
    },
    {
        itemName: 'Shawarma',
        itemCalories: '269'
    },
    {
        itemName: 'Tangdi Kebabs',
        itemCalories: '320'
    }
]


const Container = () => {

    const [list, updateList] = useState(menu);

    return (
        <div>

            <div className={'head'}>
                <h1>À la carte</h1>
            </div>
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
            <div className={'contain'}>
                {
                    list.map((item, index) => {
                        return <Items itemName={item.itemName} calories={item.itemCalories} list={list}
                                      updateList={updateList} key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default Container;