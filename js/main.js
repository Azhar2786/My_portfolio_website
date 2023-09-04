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

            
      /* =================== Email js ==================*/

      const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()

  // serviceId - templateId - #form - publickey
  emailjs.sendForm('','','#contact-form','').then(() =>{
    //show sent message
    contactMessage.textContent = 'Message sent succesfully ✅'

    //Remove message after 5 second
    setTimeout(() =>{
      contactMessage.textContent = ''
    }, 3000)

    // clear input fields
    contactForm.reset()
  
  }, () =>{
    //show error messsage
    contactMessage.textContent = 'Message not sent (service error) ❌'
  })

}
contactForm.addEventListener('submit',sendEmail)

    /*=================== show scroll up =====================*/
    const scrollUp = () =>{
      const scrollUp = document.getElementById('scroll-up')
      //when the scroll is higher than 350 viewport add scroll-up class
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)


  /*=================== Scroll section active Link =====================*/

  const sections = document.querySelectorAll('section[id]')

  const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
        sectionsClass.classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll',scrollActive)
