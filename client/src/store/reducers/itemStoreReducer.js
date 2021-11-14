import { REDUCER } from "../../Constants";

const noSelection = 'Please Select'

const dummyData = {
    filters: [
        {
            name: 'Category',
            filter: ['Food', 'Beverages'],
        },
        {
            name: 'Types of Products',
            filter: [noSelection, 'one', 'two', 'three'],
            selection: noSelection,
        },
        {
            name: 'Packaging',
            filter: [noSelection, 'one', 'two', 'three'],
            selection: noSelection,
        },
        {
            name: 'Number of Employees',
            filter: [noSelection, 'one', 'two', 'three'],
            selection: noSelection,
        },
        {
            name: 'Country',
            filter: [noSelection, 'one', 'two', 'three'],
            selection: noSelection,
        },
        {
            name: 'Financial Revenue',
            filter: [noSelection, 'one', 'two', 'three'],
            selection: noSelection,
        },
        {
            name: 'Cerificate',
            filter: ['one', 'two'],
        },
        {
            name: 'Self Life',
            filter: [noSelection, 'one', 'two', 'three'],
            selection: noSelection,
        },
        {
            name: 'Delivery',
            filter: [noSelection, 'one', 'two', 'three'],
            selection: noSelection,
        },
    ],
    products: [
        {
            name: 'Name 1',
            info: 'Info 11',
            info2: 'Info 12',
            rating: '7.1',
            image: 'https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
        {
            name: 'Name 2',
            info: 'Info 21',
            info2: 'Info 22',
            rating: '7.2',
            image: 'https://images.pexels.com/photos/2531608/pexels-photo-2531608.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'Name 3',
            info: 'Info 31',
            info2: 'Info 32',
            rating: '7.3',
            image: 'https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'Name 4',
            info: 'Info 41',
            info2: 'Info 42',
            rating: '7.4',
            image: 'https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'Name 5',
            info: 'Info 51',
            info2: 'Info 52',
            rating: '7.5',
            image: 'https://images.pexels.com/photos/2531608/pexels-photo-2531608.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'Name 6',
            info: 'Info 61',
            info2: 'Info 62',
            rating: '7.6',
            image: 'https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'Name 7',
            info: 'Info 71',
            info2: 'Info 72',
            rating: '7.7',
            image: 'https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'Name 8',
            info: 'Info 81',
            info2: 'Info 82',
            rating: '7.8',
            image: 'https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'Name 9',
            info: 'Info 91',
            info2: 'Info 92',
            rating: '7.9',
            image: 'https://images.pexels.com/photos/2531608/pexels-photo-2531608.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'Name 10',
            info: 'Info 101',
            info2: 'Info 102',
            rating: '8.0',
            image: 'https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'Name 11',
            info: 'Info 111',
            info2: 'Info 112',
            rating: '8.1',
            image: 'https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'Name 12',
            info: 'Info 121',
            info2: 'Info 122',
            rating: '8.2',
            image: 'https://images.pexels.com/photos/2531608/pexels-photo-2531608.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
    ],
}

export const itemStoreReducer = (state = dummyData, { type, payload }) => {
    switch (type) {
        case REDUCER.itemStore.select: return { ...state, filters: state.filters.map(f => { if (f.name === payload.name) return { ...f, selection: payload.selection }; else return f }) };
        case REDUCER.itemStore.clearSelection: return { ...state, filters: state.filters.map(f => { return { ...f, selection: noSelection } }) };
        default: return state
    }
}