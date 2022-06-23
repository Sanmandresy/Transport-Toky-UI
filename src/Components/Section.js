import React from 'react'

function Section() {
  return (<>
      <div className='d-flex justify-content-evenly'>
        <span className='rounded-3 w-25'>
            <h2 className='fs-6 rounded-3'>Villes</h2>
            <ol>
              <li>Antananarivo</li>
              <li>Majunga</li>
              <li>Fianarantsoa</li>
              <li>Tamatave</li>
              <li>Tuléar</li>
            </ol>
        </span>
        <span className='rounded-3 w-25'>
          <h2 className='fs-6 rounded-3'>Véhicules</h2>
          <ol>
              <li>Mitsubishi</li>
              <li>Ford</li>
              <li>Ferrari</li>
              <li>Hyundai</li>
              <li>Renault</li>
            </ol>
        </span>
        <span className='rounded-3 w-25'>
            <h2 className='fs-6 rounded-3'>Tarifs</h2>
            <ol>
              <li>300000</li>
              <li>150000</li>
              <li>15000</li>
            </ol>
        </span>
      </div>
  </>);
}

export default Section