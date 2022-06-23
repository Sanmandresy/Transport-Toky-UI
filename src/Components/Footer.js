import React from 'react'

function Footer() {
  return (<>

<footer className="text-center text-lg-start mt-4 text-white">
  <div className="container p-4">
      <div className="text-center">
        <h5 className="text-uppercase">Contacts</h5>
        <p> <i className="bi bi-geo-alt"></i> Adresse : Ivandry, Antananarivo 101 <br/>
        <i className="bi bi-envelope"></i> Email : yourtransport@fiara.mg <br/>
          <i className="bi bi-telephone"></i> Tél : +261 38 574 23
        </p>
      </div>
  </div>
  <div className="text-center p-3" >
    © 2022 Copyright :
    <a className="text-light text-decoration-none" href='#!'> Groupe 4 (G2) </a>
  </div>
</footer>

  </>);
}

export default Footer