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
import Instagram from'@/assets/socialsIcons/Instagram.svg'
import Spotify from'@/assets/socialsIcons/Spotify.svg'
import Tiktok from'@/assets/socialsIcons/Tiktok.svg'
import Youtube from'@/assets/socialsIcons/Youtube.svg'

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

export interface whoAreyouObject {name:string,  id:string, svg:StaticImageData | string}

export const whoAreYouContent:whoAreyouObject[] = [
    {name:'artiste', id:'artiste', svg:WhoAreYou},
    {name:'manager, CM', id:'manager',svg:CM},
    {name:'clippeur', id:'clippeur',svg:Clipeur},
    {name:'influenceur', id:'influenceur',svg:Influenceur},
    {name:'beatmaker', id:'beartmaker', svg:BeatMaker},
    {name:'label', id:'label',svg:Label},
    {name:'radio TV, média, curateur', id:'radio',svg:Musique},
]

export interface yourContentObject {name:string, id:string, svg:StaticImageData | string}

export const yourContent:yourContentObject[] = [
    {name:'Clip',id:'Clip',svg:Clip},
    {name:'Artiste',id:'Artiste',svg:WhoAreYou},
    {name:'Clipeur',id:'Clipeur',svg:Clipeur},
    {name:'Influenceur',id:'Influenceur',svg:Influenceur},
    {name:'Beatmaker',id:'Beatmaker',svg:BeatMaker},
    
]


export interface platformContentObject { name:string,id:string, svg:StaticImageData | string }

export const platformContent:platformContentObject[] = [
    {name:'youtube', id:'youtube', svg:Youtube},
    {name:'spotify', id:'spotify', svg:Spotify},
    {name:'tiktok', id:'tiktok', svg:Tiktok},
    {name:'instagram', id:'isntagram', svg:Instagram}
]