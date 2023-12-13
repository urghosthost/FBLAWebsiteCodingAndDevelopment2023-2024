const accordion = document.getElementsByClassName('acccontainer');

        for (i=0; i<accordion.length; i++) {
            accordion[i].addEventListener('click', function () {
                this.classList.toggle('accactive');
            })
        }