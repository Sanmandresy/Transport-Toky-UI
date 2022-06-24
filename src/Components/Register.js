import React from 'react'

export default function Register() {
  return (<>
  
  <div className="card mt-4 w-60" id='registerID'>
    <div className="card-header fs-3">
        Resérvation
    </div>
    <div className="card-body">
        <h5 className="card-title">Pour réservez un voyage :</h5>
        <form>
            <input className="form-control w-50" type={"text"} placeholder="Nom(s) et Prénom(s)"/>
            <input className="form-control w-50" type={"text"} placeholder="Numéro CIN"/>
            <input className="form-control w-50" type={"tel"} placeholder="Télephone"/>
            <input  className="form-control w-50" type={"date"} required/>
            <input className="form-control w-50" type={"text"} placeholder="Lieu"/>
            <input className="form-control w-50" type={"text"} placeholder="Offres"/>
            <input className="form-control w-50" type={"number"} placeholder="Nombre de places"/>
            <a href="https://www.youtube.com/watch?v=29JoEgL3FG8" className="btn res">Réservez</a>
        </form>
    </div>
</div>
  
  
  </>);
}
