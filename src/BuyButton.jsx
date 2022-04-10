import { useState } from 'react'

const BuyButton = (props) => {
    const [ upgradeCost, setUpgradeCost ] = useState(100);
    

    return <button>Increase Depth: {upgradeCost} coins</button> 
}

export default BuyButton