const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close')

      /*===== Menu show =====*/
      /*Validate if conastant exists */

      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }


      /*====== Menu Hidden ======*/
      /* Validate if constent exists */
      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
      }

      /*====== Remove menu Mobile ======*/

      const navLink = document.querySelectorAll('.nav__link')

      const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        //when we click on each nav__link, we remove the show-menu click
        navMenu.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click', linkAction))

            /*=============== Shadow Header ===================*/

            const shadowHeader = () =>{
              const header = document.getElementById('header')
              //when the scroll is greater than 50 viewport height ,add the shadow-header class to the
              this.scrollY >= 50 ? header.classList.add('shadow-header')
                                 : header.classList.remove('shadow-header')
            }
            window.addEventListener('scroll', shadowHeader)