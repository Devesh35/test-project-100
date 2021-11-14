import { useState } from "react";

import { connect } from "react-redux";
import Header from "../components/Header";
import { REDUCER } from "../Constants";

import '../styles.css';

const Screen2 = ({ store, select, clearAllSelection }) => {

    const [filterDisplay, setFilterDisplay] = useState(true);
    const [sortBySelection, setSortBySelection] = useState({ selection: '' })
    const [showmeSelection, setShowMeSelection] = useState({ selection: '10 Products' })

    const line = () => <div className='row me-5 ms-5 p-0 background-lightgray' style={{ height: '2px' }}></div>

    const dropdown = (name, data, selection, onChange) => <>
        <select className='dropdown col-10 btn rounded border' style={{ backgroundColor: 'white' }} value={selection} onChange={e => onChange({ name, selection: e.target.value })} key={name}>
            {data.map(type => <option className='text-center' value={type} >{type}</option>)}
        </select>
    </>

    const filterCol = (f) => <>
        <h5>{f.name}</h5>
        {f.filter.length <= 2 ?
            <>
                {f.filter.map(type =>
                    <div class="form-check" key={type}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">{type}</label>
                    </div>
                )}
            </>
            :
            <>
                {dropdown(f.name, f.filter, f.selection, select)}
            </>
        }
    </>

    const header = () => <>
        <div className='container-fluid p-0 m-0 text-center background-verylightgray'>
            <div className='row p-4 m-0'>
                <h2 style={{ color: 'purple' }}>Here's where the magic happens</h2>
                <h6>Use our detailed filtering system on the left to refine your desired search result</h6>
            </div>
            {line()}
            {filterDisplay &&
                <>
                    <div className='row p-4 ms-4 me-4 row-cols-5'>
                        {store.filters.map((filter, i) => <div className='col p-2 mt-2 mb-3 text-start' key={filter.name}>{filterCol(filter)}</div>)}
                    </div>
                    {line()}
                </>
            }
            <div className='row p-2 m-0'>
                {filterDisplay
                    ?
                    <>
                        <div className='col' />
                        <h5 className='col clickable color-lightgray' onClick={() => setFilterDisplay(false)}>HIDE FILTERS</h5>
                        <div className='col text-end pe-4 color-lightgray' onClick={() => clearAllSelection()}><b className='clickable'>Reset All Filters</b></div>
                    </>
                    :
                    <h5 className='col clickable color-lightgray' onClick={() => setFilterDisplay(true)}>SHOW FILTERS</h5>
                }
            </div>
        </div>
    </>

    const bodyHeader = () => <>
        <div className='container-fluid mt-3 p-4 pb-0'>
            <div className='row justify-content-between p-4'>
                <div className='col-3'>
                    Main / <b>Search Results: Products</b>
                </div>
                <div className='col-2 row justify-content-between text-center'>
                    <div className='col clickable'><b>Just Added</b></div>
                    <div className='col clickable'><b>Featured</b></div>
                </div>
                <div className='col-3 text-end'>
                    We have found 71 products matching your criteria.
                </div>
            </div>
        </div>
    </>

    const bodyFilter = () => <>
        <div className='container-fluid m-0 p-4 pb-0 pt-0'>
            <div className='row justify-content-between p-4'>
                <div className='col-5 row justify-content-between'>
                    <div className='col-auto align-self-center'>Sort by</div>
                    <div className='col'>{dropdown('Sort by', 'Date, new to old|Date, old to new|Price, high to low|Price, low to high'.split('|'), sortBySelection.selection, setSortBySelection)}</div>
                    <div className='col-auto align-self-center'>Show me</div>
                    <div className='col'>{dropdown('Show me', '50 Products|25 Products|20 Products|10 Products|5 Products'.split('|'), showmeSelection.selection, setShowMeSelection)}</div>
                </div>
                <div className='col-3 text-end'>
                    {'< 1 / 12  >'}
                </div>
            </div>
        </div>
    </>

    const itemDisplay = (i) => <>
        <div className='container-fluid p-2 m-2 text-center border'>
            <div className='row col'>
                <img src={i.image} alt={i.name} style={{ widht: '100%', height: undefined, aspectRatio: '1' }} />
            </div>
            <div className='row'><h4>{i.name}</h4></div>
            <div className='row'><h6>{i.info}</h6></div>
            <div className='row'><h6>{i.info2}</h6></div>
            <div className='row'><h3>{i.rating}</h3></div>
            <div className='row'><h6>RATING</h6></div>
        </div>

    </>

    const itemsDisplay = () => <>
        <div className='container-fluid m-0 p-4 pb-0 pt-0'>
            <div className='row row-cols-5 p-4'>
                {store.products.map(item => <div className='col' key={item.name}>{itemDisplay(item)}</div>)}
            </div>
        </div>
    </>

    const body = () => <>
        {bodyHeader()}
        {line()}
        {bodyFilter()}
        {itemsDisplay()}
    </>


    return (
        <>
            <Header screen={2} />
            {header()}
            {body()}
        </>
    )
};

const mapStateToProps = (state) => ({
    store: state.itemStore,
})

const mapDispatchToProps = (dispatch) => ({
    select: (payload) => dispatch({ type: REDUCER.itemStore.select, payload }),
    clearAllSelection: () => dispatch({ type: REDUCER.itemStore.clearSelection }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);