import android from './Images/android.jpg'
import raspberryPi from './Images/raspberryPi.png'
import hackintosh from './Images/hackintosh.jpg'
import musique from './Images/musique.jpg'


const AboutMeContent = [
    {
        hasImage : false,
        title: 'Who am I ? ',
        text: 'A simple answer for a simple question, I\'m RENAMBATZ Laurent, a young french software engineer'
    },
    {
        hasImage: true,
        imagePosition : 'left',
        image : android,
        title: 'Android and me <3',
        text: 'More than a love story, '
    },
    {
        hasImage : true,
        imagePosition : 'right',
        image : raspberryPi,
        title: 'Raspberry Pi',
        text: 'I\' blablabla'
    },
    {
        hasImage : true,
        imagePosition : 'right',
        image : hackintosh,
        title: 'Hackintosh',
        text: 'blazeabhdbzeam'
    },
    {
        hasImage : true,
        imagePosition : 'left',
        image : musique,
        title: 'Musique',
        text: 'about musique'
    },
    
]

export default AboutMeContent;