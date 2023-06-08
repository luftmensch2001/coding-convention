const BuyBtns = document.querySelectorAll('.js-buy-ticket')

         const modal = document.querySelector(".js-modal");
        const modalContainer = document.querySelector(".js-modal-container");
           const closebtn = document.querySelector(".js-modal-close");

        function showModal() {
           modal.classList.add('open');
        }

        function hideModal() {
            modal.classList.remove('open');
        }

        for (buyBtn of BuyBtns) {
            buyBtn.addEventListener('click', showModal)
        }

        closebtn.addEventListener('click', hideModal);
        modal.addEventListener('click', hideModal);
        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation();    
        });

        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var defaultHeight = header.clientHeight;

        mobileMenu.onclick = function() 
        {
               var isClosed = (header.clientHeight === defaultHeight);
            if (isClosed == true) {
                 header.style.height = 'auto';
            } else {
                  header.style.height = null;
            }
        }
        
        const menuItems = document.querySelectorAll('#nav li a[href*="#"');
        console.log(menuItems); 
        for (var menuItem of menuItems) {
                   menuItem.onclick = function() {
                var isParentMenu =    this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                if (!isParentMenu)
                    header.style.height = null;
            }
        }