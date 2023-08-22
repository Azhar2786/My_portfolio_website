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