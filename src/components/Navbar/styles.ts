import styled from 'styled-components'

export const Container = styled.header`
    position: fixed;
    top: 0px;
    background-color:${({theme})=> theme.color.main} ;
    filter:drop-shadow(0 6px 10px rgba(0,0,0,0.5));
    width: 100%;
    z-index: 1000;

    .container{
        max-width: 64rem;
        padding: 0 1.25rem;
        margin: 0 auto;
        display: flex;
        position: relative;
    }

    .logo-container{
        flex: 1;
        display: flex;
        align-items: center;
    }

    .nav-btn{
        /* When using login buttons un-comment line below  */
        /* flex: 3; */
        display: flex;
    }

    .nav-links{
        flex: 2;
    }

    .log-sign{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    .logo{
        color: #fff;
        font-size: 1.1rem;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: 3rem;
    }

    .logo span{
        font-weight: 300;
    }

    .btn{
        display: inline-block;
        padding: .5rem 1.3rem;
        font-size: .8rem;
        border: 2px solid #fff;
        border-radius: 2rem;
        line-height: 1;
        margin: 0 .2rem;
        transition: .3s;
        text-transform: uppercase;
    }

    .btn.solid, .btn.transparent:hover{
        background-color: #fff;
        color: ${({theme})=>theme.color.gray_300};
    }

    .btn.transparent, .btn.solid:hover{
        background-color: transparent;
        color: #fff;
    }

    .nav-links > ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-link{
        position: relative;
    }

    .nav-link > a{
        line-height: 3rem;
        color: #fff;
        /* padding: 0 .8rem; */
        letter-spacing: 1px;
        font-size: .95rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: .5s;
    }
    .nav-link{
      padding: 0 .8rem;
    }
    .nav-link:last-child{
      padding-right:0px;
    }

    .nav-link > a > i{
        margin-left: .2rem;
    }

    .nav-link:hover > a{
        transform: scale(1.1);
    }

    .hamburger-menu-container{
        flex: 1;
        display: none;
        align-items: center;
        justify-content: flex-end;
    }

    .hamburger-menu{
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .hamburger-menu div{
        width: 1.6rem;
        height: 3px;
        border-radius: 3px;
        background-color: ${({theme})=>theme.color.secondary};
        position: relative;
        z-index: 1001;
        transition: .5s;
    }

    .hamburger-menu div:before,
    .hamburger-menu div:after{
        content: '';
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: ${({theme})=>theme.color.secondary};
        border-radius: 3px;
        transition: .5s;
    }

    .hamburger-menu div:before{
        transform: translateY(-7px);
    }

    .hamburger-menu div:after{
        transform: translateY(7px);
    }

    #check{
        position: absolute;
        top: 50%;
        right: 1.5rem;
        transform: translateY(-50%);
        width: 2.5rem;
        height: 2.5rem;
        z-index: 90000;
        cursor: pointer;
        opacity: 0;
        display: none;
    }

    #check:checked ~ .hamburger-menu-container .hamburger-menu div{
        background-color: transparent;
    }

    #check:checked ~ .hamburger-menu-container .hamburger-menu div:before{
        transform: translateY(0) rotate(-45deg);
    }

    #check:checked ~ .hamburger-menu-container .hamburger-menu div:after{
        transform: translateY(0) rotate(45deg);
    }


    @media (max-width: 920px){
        .hamburger-menu-container{
            display: flex;
        }

        #check{
            display: block;
        }

        .nav-btn{
            position: fixed;
            height: calc(100vh - 3rem);
            top: 3rem;
            left: 0;
            width: 100%;
            background: ${({theme})=>theme.color.gray_300};
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            overflow-x: hidden;
            overflow-y: auto;
            transform: translateX(100%);
            transition: .65s;
        }

        #check:checked ~ .nav-btn{
            transform: translateX(0);
        }

        .nav-links{
            flex: initial;
            width: 100%;
            height:100%;
        }

        .nav-links > ul{
            flex-direction: column;
            align-items:center;
            justify-content:center;
            margin:0 auto;
            width:100%;
        }

        .nav-link{
            /* width: 100%; */
            padding:0;
            margin:0;
            opacity: 1;
            transform: translateY(25px);
        }

        .nav-link > a{
          font-size:1.75rem;
          line-height: 1;
          padding: 2rem 2rem;
        }

        .nav-link:hover > a{
            transform: scale(1);
            background-color: ${({theme})=>theme.color.secondary};
        }


        .nav-link:hover > .dropdown,
        .dropdown-link:hover > .dropdown{
            display: block;
        }

        .nav-link:hover > a > i,
        .dropdown-link:hover > a > i{
            transform: rotate(360deg);
        }

        .dropdown-link > a{
            background-color: transparent;
            color: ${({theme})=>theme.color.gray_900};
            padding: 1.2rem 2rem;
            line-height: 1;
        }

        .dropdown.second .dropdown-link > a{
            padding: 1.2rem 2rem 1.2rem 3rem;
        }

        .dropdown.second .dropdown.second .dropdown-link > a{
            padding: 1.2rem 2rem 1.2rem 4rem;
        }

        .dropdown-link:not(:nth-last-child(2)){
            border-bottom: none;
        }

        .arrow{
            z-index: 1;
            background-color: ${({theme})=>theme.color.secondary};
            left: 10%;
            transform: scale(1.1) rotate(45deg);
            transition: .5s;
        }

        .nav-link:hover .arrow{
            background-color:${({theme})=>theme.color.secondary};
        }

        .dropdown .dropdown .arrow{
            display: none;
        }

        .dropdown-link:hover > a{
            background-color: ${({theme})=>theme.color.seocndary};
        }

        .dropdown-link:first-child:hover ~ .arrow{
            background-color: ${({theme})=>theme.color.secondary};
        }

        .nav-link > a > i{
            font-size: 1.1rem;
            transform: rotate(-90deg);
            transition: .7s;
        }

        .dropdown i{
            font-size: 1rem;
            transition: .7s;
        }

        .log-sign{
            flex: initial;
            width: 100%;
            padding: 1.5rem 1.9rem;
            justify-content: flex-start;
            opacity: 0;
            transform: translateY(15px);
        }
    }
`
