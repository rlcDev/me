import AboutMe from '../../AboutMe/aboutMe'
import Photos from '../../Photos/photos'
import Welcome from '../../Welcome/welcome'

export const CategoriesData = [
    {
        key : 0,
        path : '/',
        component : Welcome,
        title : ""
    },
    {
        key : 1,
        path : '/me',
        component : AboutMe,    
        title : "About me"
    },
    {
        key : 2,
        path : '/photos',
        component : Photos,
        title : "Photos"
    }
];
