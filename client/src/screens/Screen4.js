import { connect } from 'react-redux';
import { useNavigate } from 'react-router';

import Header from "../components/Header";
import Footer from './sub/Footer';
import { REDUCER } from "../Constants";

import './styles.css'
import '../styles.css'

const Screen4 = ({ products, text, selected, ads, setSelected }) => {

    const nav = useNavigate();

    const randomText = (len) => {
        const l = text.length
        return text.slice(Math.random() * (l / 2), (Math.random() * (l / 2)) + l / 2).slice(0, len)
    }

    const product = (image, text, heading, width, index) => <>
        <div className='product' style={{ width }}>
            <img className='cursor-pointer' onClick={() => navToScreenFive(index)} src={`${image}`} alt='product' />
            <p>By <strong>some name</strong> on <strong>some date</strong> filled under <strong>some category</strong></p>
            <h2 className='cursor-pointer' onClick={() => navToScreenFive(index)}>{heading}</h2>
            <p>{text}</p>
        </div>
    </>

    const ad = (width) => <>
        <div className='product' style={{ width }}>
            <div className='flex-row'>
                <button className='cursor-pointer' style={{ width: '50%', height: '40px', color: 'white', backgroundColor: 'blue' }} >Previous</button>
                <button className='cursor-pointer' style={{ width: '50%', height: '40px', color: 'blue', backgroundColor: 'white' }} >Next</button>
            </div>
            <div className='product-ad-col'>
                {ads.map(a => <div key={a.heading}>{adItem(a)}</div>)}
            </div>
            <img src={'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt={'ad'} style={{ padding: '5%' }} />
        </div>
    </>

    const adItem = (ai) => <>
        <div className='flex-row' style={{ padding: '5px' }}>
            <img src={ai.image} alt={'ad'} style={{ height: undefined, width: '25%', aspectRatio: '1' }} />
            <div className='flex-col' style={{ padding: '5px' }}>
                <h6>{ai.heading}</h6>
                <h6>{ai.text}</h6>
            </div>
        </div>
    </>

    const moveProducts = (move) => {
        const newSelecetd = selected + move
        if (products.length > newSelecetd && newSelecetd >= 0)
            setSelected(newSelecetd)
        else if (move === -4 && selected > 0)
            setSelected(0)
    }

    const navToScreenFive = (index) => {
        setSelected(index)
        nav('/5')
    }

    return (
        <>
            <Header screen={4} />
            <div className='screen'>
                <div className='background-gradient' />
                <div className='foreground'>
                    <div className='item-row'>
                        {product((products[selected]).image, randomText(800), randomText(100), '100%', selected)}
                    </div>
                    <div className='item-row'>
                        {(products[selected + 1]) && product((products[selected + 1]).image, randomText(600), randomText(70), '70%', selected + 1)}
                        {(products[selected + 1]) && ad('30%')}
                    </div>
                    <div className='item-row'>
                        {(products[selected + 2]) && product((products[selected + 2]).image, randomText(450), randomText(40), '50%', selected + 2)}
                        {(products[selected + 3]) && product((products[selected + 3]).image, randomText(500), randomText(60), '50%', selected + 3)}
                    </div>
                    <div className='center-row'>
                        <button className='button-border' onClick={() => moveProducts(-4)}>Previous</button>
                        <button className='button-filled' onClick={() => moveProducts(+4)}>Next</button>
                    </div>
                    <div className='center-row'>
                        Page {Math.floor((selected / 4) + 1)} of {products.length / 4}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};

const mapStateToPrors = (state) => ({
    products: state.itemStore.products,
    selected: state.itemStore.selected,
    text: state.itemStore.text,
    ads: state.ad,
})

const mapDispatchToProps = (dispatch) => ({
    setSelected: (payload) => dispatch({ type: REDUCER.itemStore.productSelect, payload })
})

export default connect(mapStateToPrors, mapDispatchToProps)(Screen4);