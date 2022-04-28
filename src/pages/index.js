import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// const slideImages = [
//   {
//     url: '../images/communique-ministere/FMP_FMD_2021_2022_VF-1.jpeg',
//     caption: 'Slide 1'
//   },
//   {
//     url: '../images/communique-ministere/FMP_FMD_2021_2022_VF-2.jpeg',
//     caption: 'Slide 2'
//   },
//   {
//     url: '../images/communique-ministere/FMP_FMD_2021_2022_VF-3.jpeg',
//     caption: 'Slide 3'
//   },
//   {
//     url: '../images/communique-ministere/FMP_FMD_2021_2022_VF-4.jpeg',
//     caption: 'Slide 1'
//   },
//   {
//     url: '../images/communique-ministere/FMP_FMD_2021_2022_VF-5.jpeg',
//     caption: 'Slide 2'
//   },
//   {
//     url: '../images/communique-ministere/FMP_FMD_2021_2022_VF-6.jpeg',
//     caption: 'Slide 3'
//   },
//   {
//     url: '../images/communique-ministere/FMP_FMD_2021_2022_VF-7.jpeg',
//     caption: 'Slide 1'
//   },
//   {
//     url: '../images/communique-ministere/FMP_FMD_2021_2022_VF-8.jpeg',
//     caption: 'Slide 2'
//   },
// ];

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <div className="md:px-56 md:flex md:flex-row bg-slate-50 py-5 md:space-x-10">
        <div className="py-20">
          <h1 className="text-lg">Le saviez-vous?</h1>
          <ul className="list-disc">
            <li>56 000 bacheliers passent le concours de médecine chaque année au Maroc.</li>
            <li>Seulement 3360 élèves accéderont aux 8 facultés de médecine du royaume.</li>
            <li>Soit seulement 6 bacheliers sur 100.</li>
          </ul>
          <button className="text-white bg-slate-400 hover:bg-slate-300 p-2 px-3 font-semibold">Nous contacter</button>
        </div>

        <StaticImage
          src="../images/student_medecine.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Étudiante en médecine"
          className="md:w-11/12"
        />

      </div>

      <div className="md:px-52 my-5">
        <h3>Communiqué du Ministère de l’Education Nationale concernant l’Inscription Concours FMP FMD 2021/2022</h3>

      </div>


      <div className="md:px-52 my-5">

        <h3>Tableau détaillé des places disponibles par faculté au Maroc</h3>
        
        <p>
          Source: Ministère de l'Education Nationale, de la Formation Professionelle, de l'Enseignement Supérieur et de la Recherche Scientifique.
          Département de l'Enseignement Supérieur et de la Recherche Scientifique.
        </p>
        
        <h4>Médecine et Pharmacie - Nombre de places par faculté en 2021 - 2022</h4>
        
        <table className="table-auto">          
          <tbody>
          <tr>
          <td colspan="1" rowspan="2" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Facult&eacute;&quot;}">
          <div>Facult&eacute;</div>
          </td>
          <td colspan="3" rowspan="1" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;M&eacute;decine&quot;}">M&eacute;decine</td>
          <td colspan="1" rowspan="2" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Pharmacie&quot;}">
          <div>Pharmacie</div>
          </td>
          <td colspan="1" rowspan="2" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Total M&eacute;decine et Pharmacie&quot;}">
          <div>Total M&eacute;decine et Pharmacie</div>
          </td>
          </tr>
          <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Les civils&quot;}">Les civils</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot; Militaires marocains et &eacute;trangers&quot;}">Militaires marocains et &eacute;trangers</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Total&quot;}">Total</td>
          </tr>
          <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;RABAT&quot;}">RABAT</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:560}">560</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:110}">110</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:670}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">670</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:120}">120</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:790}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">790</td>
          </tr>
          <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;CASABLANCA&quot;}">CASABLANCA</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:510}">510</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:10}">10</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:520}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">520</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:60}">60</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:580}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">580</td>
          </tr>
          <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;MARRAKECH&quot;}">MARRAKECH</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:420}">420</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:420}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">420</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:420}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">420</td>
          </tr>
          <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;FES&quot;}">FES</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:340}">340</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:340}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">340</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:50}">50</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:390}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">390</td>
          </tr>
          <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;OUJDA&quot;}">OUJDA</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:350}">350</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:350}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">350</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:350}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">350</td>
          </tr>
          <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;AGADIR&quot;}">AGADIR</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:210}">210</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:210}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">210</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:210}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">210</td>
          </tr>
          <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;TANGER&quot;}">TANGER</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:220}">220</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:220}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">220</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:220}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">220</td>
          </tr>
          <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;LAAYOUNE&quot;}">LAAYOUNE</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:100}">100</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:100}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">100</td>
          <td>&nbsp;</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:100}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">100</td>
          </tr>
          <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Total&quot;}">Total</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:2710}" data-sheets-formula="=SOMME(R[-8]C[0]:R[-1]C[0])">2710</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:120}" data-sheets-formula="=SOMME(R[-8]C[0]:R[-1]C[0])">120</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:2830}" data-sheets-formula="=SOMME(R[-8]C[0]:R[-1]C[0])">2830</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:230}" data-sheets-formula="=SOMME(R[-8]C[0]:R[-1]C[0])">230</td>
          <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:3060}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">3060</td>
          </tr>
          </tbody>
          </table>

        <h3>Un concours, c’est une compétition sportive de haut niveau, ça se prépare sérieusement et minutieusement…</h3>
        <StaticImage
          src="../images/shutterstock_athletes.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Étudiante en médecine"
          className="place-content-center"
        />

        <h3>Seuls les athlètes les mieux préparés feront partie des 6% des admis.</h3>
        <StaticImage
          src="../images/shutterstock_medaille.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Étudiante en médecine"
          className="place-content-center"
        />

        <h3>Et nous sommes là pour vous aider.</h3>
        <StaticImage
          src="../images/logo_transparent_background.png"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Étudiante en médecine"
          className="place-content-center"
        />

        <h3>Comment ?</h3>
        <ul>
          <li>
              En vous mettant à disposition les annales corrigés des 10 dernières années dans les 4 matières (Maths, Physique, Chimie, SVT)
              <StaticImage
              src="../images/logo_transparent_background.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Étudiante en médecine"
              className="place-content-center"
            />
          </li>
          <li>
              En vous mettant à disposition les annales corrigés des 10 dernières années dans les 4 matières (Maths, Physique, Chimie, SVT)
              <StaticImage
              src="../images/logo_transparent_background.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Étudiante en médecine"
              className="place-content-center"
            />
          </li>
          <li>
              Une plateforme performante et efficace pour gérer vos révisions et piloter en temps réel vos progressions.
              <StaticImage
              src="../images/logo_transparent_background.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Étudiante en médecine"
              className="place-content-center"
            />
          </li>
          <li>
              Des dizaines de quiz pour vous entraîner sur votre ordinateur, tablette ou smartphone.
              <StaticImage
              src="../images/logo_transparent_background.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Étudiante en médecine"
              className="place-content-center"
            />
          </li>
          <li>
              Des conseils pour vous coacher dans votre mindset et vos révisions pour être au top de votre forme le jour J.
          </li>
          <li>
              Une communauté d’élèves avec le bon mindest pour rester motivés et vous entraider. (Groupe privé sur Telegram). 
          </li>
        </ul>

        <h3>Combien ça coûte?</h3>
        <p>Seulement 350 Dhs. Non, non… Vous ne rêvez pas, ça coûte moins cher qu’un cours particulier de 2 heures.</p>

        <h3>Comment puis- je m’abonner?</h3>
        <h4>C’est très simple.</h4>
        <h5>Voici les étapes:</h5>
        <ul>
          <li>Contactez nous par WhatsApp en cliquant ici.</li>
          <li>Nous vous enverrons les instructions pour payer votre abonnement par Wafacash, par dépôt d’espèces ou virement sur un compte bancaire </li>
          <li>Dès réception de votre preuve de paiement par WhatSapp, nous vous envoyons un lien par email pour choisir votre mot de passe et accéder à votre espace de travail personnel.</li>
        </ul>

        <p><strong>Remarque importante: </strong>L’espace de travail ne peut pas être partagé car il vous permet de faire le suivi de vos propres révisions. </p>

        <h3>FAQ</h3>

      </div>

    </div>
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
