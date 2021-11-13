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
            name: 'Pattern Generator',
            shortDesc: 'This is the very first project, it is used to generate patterns.',
        },
        {
            id: 'dsfowoerww',
            displayImage: 'https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            name: 'Abstract',
            shortDesc: 'This is the second project, it creats abstracts image from 2D random numbers.',
        },
    ]
}

export const userReducer = (state = dummyState, { type, payload }) => {
    return state;
}