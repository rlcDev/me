import AboutMe from '../../AboutMe/aboutMe'
import Photos from '../../Photos/photos'

export const CategoriesData = [
    {
        key : 0,
        path : '/aboutMe',
        hasLink : false,
        component : AboutMe,    
        title : "About me"
    },
    {
        key : 1,
        path : '/photos',
        component : Photos,
        hasLink : false,
        title : "Photos"
    },
    {
        key : 2,
        hasLink : true,
        link : "http://public.rlcdev.fr",
        title : "Projets"
    }
];
