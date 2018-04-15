import android from './Images/android.jpg'
import raspberryPi from './Images/raspberryPi.png'
import hackintosh from './Images/hackintosh.jpg'
import musique from './Images/musique.jpg'


const AboutMeContent = [
    {
        hasImage : false,
        title: 'Who am I ? ',
        text: 'A simple answer for a simple question, I\'m RENAMBATZ Laurent, a young french software engineer and also a techie'
    },
    {
        hasImage: true,
        imagePosition : 'left',
        image : android,
        title: 'Android and me <3',
        text: 'More than a love story that you can see in films, me and Android forever. I enjoy most of my time developping things'+
        ' related to Android such as modifying Android framework to make custom ROMs, kernel, apps, modules and so on.'
    },
    {
        hasImage : true,
        imagePosition : 'right',
        image : raspberryPi,
        title: 'Raspberry Pi',
        text: 'This website runs on a Raspberry Pi 3B. I\'m loving this SBC because you can do everything you want with it. I specially use it as a web server for all my android apps'+
        ', launching ROMs builds, as a media streamer, as a NAS, as a private cloud and with a DAC with Volumio as a music server...'
    },
    {
        hasImage : true,
        imagePosition : 'right',
        image : hackintosh,
        title: 'Hackintosh',
        text: 'Even if I\'m an Android guy, I\'m also interesting in apple ecosystem. With some developer friends, we like hacking things in general. And it is also the case'+
        ' for OSX. So I set up also a hackintosh and it runs pretty good !'
    },
    {
        hasImage : true,
        imagePosition : 'left',
        image : musique,
        title: 'Musique',
        text: 'Eventually, I\'m an audiophile. An audiophile is about feeling the music in every details and in each piece a song. '+
        'Living the song as if the artist is in front of you. Any way, the world can not be without music.'
    },
    
]

export default AboutMeContent;