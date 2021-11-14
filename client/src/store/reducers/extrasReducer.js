const dummyAds = [
    {
        image: 'https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        heading: 'This is heading 1',
        text: 'This is description one. This is description one.',
    },
    {
        image: 'https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        heading: 'This is heading 2',
        text: 'This is description two. This is description one.',
    },
    {
        image: 'https://images.pexels.com/photos/1998922/pexels-photo-1998922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        heading: 'This is heading 3',
        text: 'This is description three. This is description one.',
    },
]

export const adReducer = (state = dummyAds, { type, payload }) => {
    return state;
}
