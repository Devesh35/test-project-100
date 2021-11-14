import { connect } from 'react-redux';

import Header from "../components/Header";
import Footer from './sub/Footer';
import { REDUCER } from "../Constants";

import './styles.css'
import '../styles.css'

const Screen5 = ({ selected, products, text, setSelected }) => {

    const randomText = (len) => {
        const l = text.length
        return text.slice(Math.random() * (l / 2), (Math.random() * (l / 2)) + l / 2).slice(0, len)
    }

    const moveProducts = (move) => {
        const newSelecetd = selected + move
        if (products.length > newSelecetd && newSelecetd >= 0)
            setSelected(newSelecetd)
    }

    return (
        <>
            <Header screen={5} />
            <div className='screen'>
                <div className='background-gradient' />
                <div className='foreground'>
                    <div className='item-row'>
                        <div className='product'>
                            <img src={`${products[selected].image}`} alt='product' style={{ height: '700px', width: '100%' }} />
                            <p>By <strong>some name</strong> on <strong>some date</strong> filled under <strong>some category</strong></p>
                            <h2>{randomText(100)}</h2>
                            <p>{text}</p>
                            <h3>"{randomText(100)}"</h3>
                            <p>{text}</p>
                            <img src={`${products[selected].image}`} alt='product' style={{ height: '400px', width: '100%' }} />
                            < p > {text}</p>
                        </div>
                    </div>
                    <div className='center-row'>
                        <div>What will you read now? </div>
                        <button className='button-border' onClick={() => moveProducts(-1)}>Previous</button>
                        <button className='button-filled' onClick={() => moveProducts(+1)}>Next</button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};

const mapStateToPrors = (state) => ({
    selected: state.itemStore.selected,
    products: state.itemStore.products,
    text: state.itemStore.text,
})

const mapDispatchToProps = (dispatch) => ({
    setSelected: (payload) => dispatch({ type: REDUCER.itemStore.productSelect, payload })
})

export default connect(mapStateToPrors, mapDispatchToProps)(Screen5);
