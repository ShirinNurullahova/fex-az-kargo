import React from 'react'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
import '../Trendyol2/Trendyol2.css'
function Trendyol2() {
  return (
    <div>
      <Header/>
      <div className='iki'>
      <div class="text-up" id='text-up'>
                <div class="home-tarrifs-text-heading">
                    <h2 >Trendyol sms dogrulama</h2>
                </div>

                <div class="home-tarrifs-text-desc text-medium-16">
                    <p>Sit vitae felis quis blandit. Proin congue</p>
                    <p>tincidunt vitae sollicitudin a ut ut nunc viverra</p>
                    <p>Sit eu et quis maecenas. Dui.</p>
                </div>
            </div>

     



                <table className='teybl' id='teybl'>
                    <thead>
                        <th>ID</th>
                        <th>Message(kod)</th>
                        <th>Tarix/saat</th>
                    </thead>
                    <tbody>
                        <tr>

                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>

                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                    </tbody>

                </table>
      </div>
      <Footer/>
    </div>
  )
}

export default Trendyol2