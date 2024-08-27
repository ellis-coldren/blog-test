import React from 'react'
import NavBar from '../components/NavBar'
import deRhamPDF from '../Coldren_deRhamPaper_final.pdf';

function DeRham() {
    return (
        <div>   
        <header>
          <NavBar/>
        </header>
        <main>
            <iframe class="pdf" src={deRhamPDF}></iframe>
        </main>
        </div>
    );
}

export default DeRham