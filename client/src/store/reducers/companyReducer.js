import { COMPANY } from "../../Constants";

const dummyProjects = [
    {
        name: 'Company name 1',
        image: 'https://images.pexels.com/photos/2832432/pexels-photo-2832432.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        type: COMPANY.type.barCafe,
        rating: '7.0',
        date: '1/1/2020',
        color: 'yellow',
        info: 'info',
        info2: 'info2',
        connections: '12',
        views: '400',

        details: {
            country: 'Itlay',
            yearEstablished: 2020,
            address: 'Rome, Fransceso Av.345',
            phoneNumber: '+30 2348290192',
            website: 'www.random@example.com',
            pos: 'Res, bar, cafe',
            activity: 'Wholeseller',
            activityColor: 'purple',
            noOfEmp: '101-200',
            bankWorkWith: 'Alpha',
            currency: 'Euro, Dollar',
            existingClients: 'Specalized Organic',
            credit: 'Excellent',
        },
        accountDetails: {
            image: 'https://images.pexels.com/photos/3707669/pexels-photo-3707669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            name: 'Daniel',
            jobPosition: 'Job Position',
            phoneNumber: '+30 0939301038',
            mail: 'mail@companyurl.com',
            linkedin: 'username',
            skypeID: 'username',
        }
    },
    {
        name: 'Company name 2',
        image: 'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        type: COMPANY.type.agent,
        rating: '5.0',
        date: '1/3/2020',
        color: 'red',
        info: 'info',
        info2: 'info2',
    },
    {
        name: 'Company name 3',
        image: 'https://images.pexels.com/photos/3707669/pexels-photo-3707669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        type: COMPANY.type.cooperative,
        rating: '8.0',
        date: '1/6/2020',
        color: 'green',
        info: 'info',
        info2: 'info2',
    },
    {
        name: 'abc-4',
        image: 'https://images.pexels.com/photos/2387532/pexels-photo-2387532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        type: COMPANY.type.cooperative,
        rating: '9.0',
        date: '1/7/2020',
        color: 'green',
        info: 'info',
        info2: 'info2',
    },
    {
        name: 'abc-5',
        image: 'https://images.pexels.com/photos/3694711/pexels-photo-3694711.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        type: COMPANY.type.barCafe,
        rating: '7.8',
        date: '1/8/2020',
        color: 'yellow',
        info: 'info',
        info2: 'info2',
    },
]

export const companyReducer = (state = dummyProjects, { type, payload }) => {
    return state;
}