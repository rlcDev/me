import Link from './Link';
import {LinksData} from './LinksData'

export default function Links() {
    return(        
         LinksData.map( (elt) => {
            return(Link(elt))
        }));
}

