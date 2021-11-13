import { PROJECT } from "../../Constants";

const dummyProjects = [
    {
        name: 'abc-1',
        image: 'https://images.pexels.com/photos/2832432/pexels-photo-2832432.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        status: PROJECT.status.completed,
        rating: '7.0',
        date: '1/1/2020',
        color: 'green',
        info: 'info',
        info2: 'info2',
    },
    {
        name: 'abc-2',
        image: 'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        status: PROJECT.status.canceled,
        rating: '5.0',
        date: '1/3/2020',
        color: 'red',
        info: 'info',
        info2: 'info2',
    },
    {
        name: 'abc-3',
        image: 'https://images.pexels.com/photos/3707669/pexels-photo-3707669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        status: PROJECT.status.working,
        rating: '8.0',
        date: '1/6/2020',
        color: 'yellow',
        info: 'info',
        info2: 'info2',
    },
    {
        name: 'abc-4',
        image: 'https://images.pexels.com/photos/2387532/pexels-photo-2387532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        status: PROJECT.status.completed,
        rating: '9.0',
        date: '1/7/2020',
        color: 'green',
        info: 'info',
        info2: 'info2',
    },
    {
        name: 'abc-5',
        image: 'https://images.pexels.com/photos/3694711/pexels-photo-3694711.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        status: PROJECT.status.working,
        rating: '7.8',
        date: '1/8/2020',
        color: 'yellow',
        info: 'info',
        info2: 'info2',
    },
]

export const projectsReducer = (state = dummyProjects, { type, payload }) => {
    return state;
}