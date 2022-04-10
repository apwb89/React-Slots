import Slot from './Slot';
import BuyButton from './BuyButton';
import Coins from './Coins';
import { useState } from 'react';

const Info = () => {
    const [ coins, setCoins ] = useState(200);
    const [ currentDepth, setCurrentDepth ] = useState(3);
    const [ spinPrice, setSpinPrice ] = useState(24);

    const [ slot0Val, setSlot0Val ] = useState(3);

    const handleSpin = (event) => {
        event.preventDefault();
        if(coins >= spinPrice) {

        }
    }

    return (

        //Make Slots own Components

    <><section class="grid" id="slots-area">
        <Slot id="slot-0" currentDepth={currentDepth} value={slot0Val}/>
        <Slot id="slot-1" currentDepth={currentDepth}/>
        <Slot id="slot-2" currentDepth={currentDepth}/>
        <Slot id="slot-3" currentDepth={currentDepth}/>
        <Slot id="slot-4" currentDepth={currentDepth}/>
        <Slot id="slot-5" currentDepth={currentDepth}/>
        <Slot id="slot-6" currentDepth={currentDepth}/>
        <Slot id="slot-7" currentDepth={currentDepth}/>
        <Slot id="slot-8" currentDepth={currentDepth}/>
    </section>
    <section class="grid" id="button-area">
        <BuyButton coins={coins} setCoins={setCoins} currentDepth={currentDepth} setCurrentDepth={setCurrentDepth}/>
        <Coins coins={coins} setCoins={setCoins}/>
        <button onclick={handleSpin} >Spin</button>
    </section></>
    )
}

export default Info;