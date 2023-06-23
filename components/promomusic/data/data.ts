import BeatMaker from '@/assets/svg/Beatmaker.svg'
import Clip from '@/assets/svg/Clip.svg'
import Clipeur from '@/assets/svg/Clipeur.svg'
import CM from '@/assets/svg/CM.svg'
import Influenceur from '@/assets/svg/Influenceur.svg'
import Label from '@/assets/svg/Label.svg'
import Musique from '@/assets/svg/Musique.svg'
import Playlist from '@/assets/svg/Playlist.svg'
import Projet from '@/assets/svg/Projet.svg'
import Radio from '@/assets/svg/Radio.svg'
import RéseauxSociaux from '@/assets/svg/Réseaux-scoiaux.svg'
import WhoAreYou from '@/assets/svg/whoAreYou.svg'

import { StaticImageData } from 'next/image'

export interface navObject {name:string, href:string}

export const navContent:navObject[] = [
    {name:'services', href:'#'},
    {name:'comment ça marche', href:'#'},
    {name:'collaboration', href:'#'},
    {name:'témoignages', href:'#'},
]


export interface breadcrumbObject {name:string, href:string}

export const breadcrumbContent:breadcrumbObject[] = [
    {name:'votre profil' , href:'#'},
    {name:'contenu' , href:'#'},
    {name:'plateforme' , href:'#'},
    {name:'promotion' , href:'#'},
    {name:'analytics' , href:'#'},
]

export interface whoAreyouObject {name:string,  value:string, svg:StaticImageData | string}

export const whoAreYouContent:whoAreyouObject[] = [
    {name:'artiste', value:'artiste', svg:WhoAreYou},
    {name:'manager, CM', value:'manager',svg:CM},
    {name:'clippeur', value:'clippeur',svg:Clipeur},
    {name:'influenceur', value:'influenceur',svg:Influenceur},
    {name:'beatmaker', value:'beartmaker', svg:BeatMaker},
    {name:'label', value:'label',svg:Label},
    {name:'radio TV, média, curateur', value:'radio',svg:Musique},
]