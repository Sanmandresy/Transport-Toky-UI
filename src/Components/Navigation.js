import React from 'react'

function Navigation() {
  return (<>
     <nav className='d-flex justify-content-center py-3 shadow-sm p-3 mb-5'>
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link text-light fs-6" aria-current="page" href="#!"> <i class="bi bi-house"></i> Accueil</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light fs-6" href="#!"> <i class="bi bi-map"></i> Voyage</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light fs-6" href="#!"> <i class="bi bi-bookmark"></i> Réservation</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light fs-6" href="#!"> <i class="bi bi-person-workspace"></i> Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light fs-6" href="#!"> <i class="bi bi-telephone"></i> Infoline</a>
            </li>
        </ul>
    </nav>
  </>);
}

export default Navigation