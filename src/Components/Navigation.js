import React from 'react'

function Navigation() {
  return (<>
     <nav className='py-3 shadow-sm p-3 mb-4'>
        <ul className="nav container-fluid d-flex justify-content-center">
            <li className="nav-item">
                <a className="nav-link text-light fs-6" aria-current="page" href="#!"> <i className="bi bi-house"></i> Accueil</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light fs-6" href="#!"> <i className="bi bi-map"></i> Voyage</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light fs-6" href="#!"> <i className="bi bi-bookmark"></i> Réservation</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light fs-6" href="#!"> <i className="bi bi-person-workspace"></i> Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light fs-6" href="#!"> <i className="bi bi-telephone"></i> Infoline</a>
            </li>
        </ul>
    </nav>
  </>);
}

export default Navigation