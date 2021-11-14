const dummyState = {
    profile: {
        name: 'John Smith',
        image: 'https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        entries: 30,
        messages: 7,
        favorites: 10,
        strength: 80,
    },
    projects: [
        {
            id: 'ndvoirsdinr',
            displayImage: 'https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            name: 'Find Match one',
            shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 'dsfowoerww',
            displayImage: 'https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            name: 'Find Match two',
            shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ]
}

export const userReducer = (state = dummyState, { type, payload }) => {
    return state;
}
