import AboutMe from '../../AboutMe/aboutMe'
import Photos from '../../Photos/photos'
import Welcome from '../../Welcome/welcome'

export const CategoriesData = [
    {
        key : 0,
        path : '/',
        hasLink : false,
        component : Welcome,
        title : ""
    },
    {
        key : 1,
        path : '/aboutMe',
        hasLink : false,
        component : AboutMe,    
        title : "About me"
    },
    {
        key : 2,
        path : '/photos',
        component : Photos,
        hasLink : false,
        title : "Photos"
    },
    {
        key : 3,
        hasLink : true,
        link : "http://public.rlcdev.fr",
        title : "Projets"
    }
];
