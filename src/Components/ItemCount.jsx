import Button from 'react-bootstrap/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState } from 'react';


function ItemCount ({initial, stock, onAdd}) {
    
    const [rate, setRate] = useState(initial)

    const Plus = () => {
        rate < stock  && setRate(rate+1)
    }
      
    const Minus = () => {
        rate > initial  && setRate(rate-1)
   }  

    return(
 <div className='row justify-content-center'>
    <div className='col text-start'>
        <Button onClick={Plus} variant="danger"><AddCircleIcon/></Button>
    </div>
    <div className='col text-center detail-contenedor__price--2'>
        {rate}
    </div>
    <div className='col text-end'>
        <Button onClick={Minus} variant="danger"><RemoveCircleIcon/></Button>
    </div>
    <div className='row justify-content-center mt-4'>
        {
            stock && rate
            ?<Button onClick={ () => onAdd(rate)} variant="danger" >Agregar al carrito</Button>
            :<Button variant="secondary" disabled>Agregar al carrito</Button>
        }
    </div>    
</div> );

}

export default ItemCount;