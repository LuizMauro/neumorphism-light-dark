import  'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;
    
        colors:{
            primary:string;
            secundary:string;
            cardColor:string;
            sombraBranca: string;
            sombraEscura:string;
            background: string;
            text: string;
        },
    
    }
}