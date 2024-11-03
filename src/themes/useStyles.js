import {createTheme, makeStyles} from '@material-ui/core';

// Crea un tema personalizado
const theme = createTheme();

const useStyles = makeStyles({
    containermt:{
        marginTop:30
    },
    Card:{
        padding:30

    },
    avatar:{
        backgroundColor:'#0f80a0',
        width:80, height:80
    },
    icon :{
        fontSize:60
    },
    formulario:{
        marginTop:40,
        marginBottom:20
    },
    gridmb :{
        marginBottom:20
    },
    link :{
        marginTop:20,
        color: theme.palette.primary.main,
        textDecoration:'none',
        fontFamily:"Roboto",
        fontSize:"1.1rem"
    },
    appBar:{
        paddingTop:8,
        paddingBottom:8
    },
    grow :{
        flexGrow:0,
        [theme.breakpoints.up('md')]:{
            flexGrow:1
        }
    },
    linkMenuBarLogo:{
        display:"inline-flex",
        alignItems:"center",
        color:'inherit',
        textDecoration:'none'
    },
    mr:{
        marginRight:3
    },
    buttoIcono:{
        fontSize:14,
        padding:0
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold',
        marginRight: 'auto', // Esto hará que el título ocupe todo el espacio disponible a la izquierda
    },
    rightAlignedItems: {
        marginLeft: 'auto', // Esto alineará el div de items alineados a la derecha
    },
    loginButton: {
        marginLeft: '10px', // Ajusta este valor según sea necesario
    },
    LinkAppBarDesktop:{
     display:"inline-flex",
     alignItems:"center",
     padding: "6px",
     color:'inherit',
     textDecoration:'none'
   },
   list:{
     width:250
   },
   listItem:{
    padding:0
   },
   linkAppBarMobile:{
    display:"inline-flex",
    alignItems: "center",
    width:"100%",
    padding :"8px 16px",
    color:'inherit',
    textDecoration:'none'
   },
   listItemIcon:{
    minWidth:35
   },
   sectionDesktop:{
    display:"none",
    [theme.breakpoints.up('md')]:{
        display:"flex"
    }
   } ,
   sectionMobile:{
    display:"flex",
    [theme.breakpoints.up('md')]:{
        display:"none"
    }
   }
})

export default useStyles;