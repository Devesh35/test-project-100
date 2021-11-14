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
            image: 'https://images.pexels.com/photos/5253574/pexels-photo-5253574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Name 5',
            info: 'Info 51',
            info2: 'Info 52',
            rating: '7.5',
            image: 'https://images.pexels.com/photos/2693208/pexels-photo-2693208.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Name 6',
            info: 'Info 61',
            info2: 'Info 62',
            rating: '7.6',
            image: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Name 7',
            info: 'Info 71',
            info2: 'Info 72',
            rating: '7.7',
            image: 'https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Name 8',
            info: 'Info 81',
            info2: 'Info 82',
            rating: '7.8',
            image: 'https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Name 9',
            info: 'Info 91',
            info2: 'Info 92',
            rating: '7.9',
            image: 'https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Name 10',
            info: 'Info 101',
            info2: 'Info 102',
            rating: '8.0',
            image: 'https://images.pexels.com/photos/1998922/pexels-photo-1998922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Name 11',
            info: 'Info 111',
            info2: 'Info 112',
            rating: '8.1',
            image: 'https://images.pexels.com/photos/3651579/pexels-photo-3651579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Name 12',
            info: 'Info 121',
            info2: 'Info 122',
            rating: '8.2',
            image: 'https://images.pexels.com/photos/4279013/pexels-photo-4279013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
    ],
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    textLength: 3000,
    selected: 0,
}

export const itemStoreReducer = (state = dummyData, { type, payload }) => {
    switch (type) {
        case REDUCER.itemStore.productSelect: return { ...state, selected: payload }
        case REDUCER.itemStore.select: return { ...state, filters: state.filters.map(f => { if (f.name === payload.name) return { ...f, selection: payload.selection }; else return f }) };
        case REDUCER.itemStore.clearSelection: return { ...state, filters: state.filters.map(f => { return { ...f, selection: noSelection } }) };
        default: return state
    }
}