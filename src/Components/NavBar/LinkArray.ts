

export interface LinksArrayProps {
    className:string,
    toLink:string,
    text:string
}

export const LinksArray:LinksArrayProps[] = [ 
    {className:"/" ,toLink:"/" ,text:"home"},
    {className:"/about" ,toLink:"/about" ,text:"about"},
    {className:"/privacy" ,toLink:"/privacy" ,text:"Privacy"},
    {className:"/contact" ,toLink:"/contact" ,text:"contact"},
    {className:"/partner" ,toLink:"/partner" ,text:"partner"},
    {className:"/Products" ,toLink:"/Products" ,text:"Products"},
    {className:"/orders" ,toLink:"/orders" ,text:"orders"},
]