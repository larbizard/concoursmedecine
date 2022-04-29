import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import Seo from "../components/seo"
import 'flowbite';

import { AnchorLink } from "gatsby-plugin-anchor-links";

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <div>

      <BackgroundImage
        Tag="section"
        fluid={data.headerBackgroundImage.childImageSharp.fluid}
        style={{
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
          <div className="py-44 px-10 md:px-52 bg-opacity-10 bg-black">
            <h1 className="text-2xl text-white">Le saviez-vous?</h1>
            <ul className="list-disc text-lg text-white">
              <li>56 000 bacheliers passent le concours de médecine chaque année au Maroc.</li>
              <li>Seulement 3360 élèves accéderont aux 8 facultés de médecine du royaume.</li>
              <li>Soit seulement 6 bacheliers sur 100.</li>
            </ul>
            <AnchorLink to="/#tarif" title="Tarif">
              <button className="w-full xl:w-1/6 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-2 px-3 font-semibold">Nous contacter</button>
            </AnchorLink>
          </div>
      </BackgroundImage>

      <div className="md:px-44 my-5">
        <div className="md:flex md:flex-row md:items-center">
          <h3 className="md:w-1/2 p-2">Un concours, c’est une compétition sportive de haut niveau, ça se prépare sérieusement et minutieusement…</h3>
          <StaticImage
            src="../images/shutterstock_athletes.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Étudiante en médecine"
            className="md:w-1/2 place-content-center p-4"
          />
        </div>

        <div className="md:flex md:flex-row md:items-center">
          <StaticImage
            src="../images/shutterstock_medaille.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Étudiante en médecine"
            className="md:w-1/2 place-content-center p-4"
          />
          <h3 className="md:w-1/2 p-2">Seuls les athlètes les mieux préparés feront partie des 6% des admis.</h3>
        </div>

      </div>
      <div id="offre" className="md:px-44 my-5 text-center bg-slate-100 py-20">
        <ul>
        <h2>Et nous sommes là pour vous aider. Comment ?</h2>
          <li>
              En vous mettant à disposition les annales corrigés des 10 dernières années dans les 4 matières (Maths, Physique, Chimie, SVT)
          </li>
          <li>
              Une plateforme performante et efficace pour gérer vos révisions et piloter en temps réel vos progressions.
          </li>
          <li>
              Des dizaines de quiz pour vous entraîner sur votre ordinateur, tablette ou smartphone.
          </li>
          <li>
              Des conseils pour vous coacher dans votre mindset et vos révisions pour être au top de votre forme le jour J.
          </li>
          <li>
              Une communauté d’élèves avec le bon mindest pour rester motivés et vous entraider. (Groupe privé sur Telegram). 
          </li>
        </ul>
      </div>
      <div id="tarif" className="md:px-44 my-5">
          <div className="md:py-5 md:flex md:flex-row align-middle justify-center justify-content-center">
            <div class="md:mx-4 my-4 md:my-0 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Combien ça coûte?</h5>
              </a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">350 Dhs</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Seulement 350 Dhs. Non, non… Vous ne rêvez pas, ça coûte moins cher qu’un cours particulier de 2 heures.</p>

            </div>

            <div class="md:mx-4 my-4 md:my-0 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Comment puis- je m’abonner?</h5>
              <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">C’est très simple. Contactez nous par WhatsApp</h6>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <p>Nous vous enverrons les instructions pour payer votre abonnement par Wafacash, par dépôt d’espèces ou virement sur un compte bancaire </p>
                <p>Dès réception de votre preuve de paiement par WhatSapp, nous vous envoyons un lien par email pour choisir votre mot de passe et accéder à votre espace de travail personnel.</p>
              </p>
              <a href="#" class="w-full inline-flex items-center py-2 px-3 text-sm font-bold text-center center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 90 48" width="48px" height="28px" fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"/></svg>
              Contactez nous sur Whatsapp
              </a>
            </div>
          </div>
 
          <p><strong>Remarque importante: </strong>L’espace de travail ne peut pas être partagé car il vous permet de faire le suivi de vos propres révisions. </p>

      </div>

      <div id="faq" className="md:px-44 my-5 bg-slate-100 py-10">
        <h3 className="mx-2">FAQ</h3>
      </div>
      <div className="md:px-44 my-5">
          <h3>Nombres de places dans les facultés:</h3>
          <div className="md:flex md:flex-row">
            <div className="md:w-1/2 px-2">
            <h5>Tableau détaillé des places disponibles par faculté au Maroc / Médecine et Pharmacie - Nombre de places par faculté en 2021 - 2022</h5>
              <table className="hidden md:table table-fixed  text-sm">
                <thead>
                  <tr className="bg-slate-200">
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Facult&eacute;&quot;}">
                  <div className="font-bold px-2" >Faculté</div>
                  </td>
                  <td className="font-bold" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;M&eacute;decine&quot;}">Médecine</td>
                  <td></td>
                  <td></td>
                  <td className="font-bold" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Pharmacie&quot;}">
                  <div className="font-bold">Pharmacie</div>
                  </td>

                  <td className="font-bold" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Total M&eacute;decine et Pharmacie&quot;}">
                  <div className="px-2">Total Médecine et Pharmacie</div>
                  </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-100">
                  <td></td>
                  <td className="font-bold" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Les civils&quot;}">Les civils</td>
                  <td className="font-bold" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot; Militaires marocains et &eacute;trangers&quot;}">Militaires marocains et &eacute;trangers</td>
                  <td className="font-bold" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Total&quot;}">Total</td>
                  <td></td>
                  <td></td>
                  </tr>
                  <tr>
                    <td><div className="px-2">Rabat</div></td>
                    <td><div className="px-2">560</div></td>
                    <td><div className="px-2">110</div></td>
                    <td><div className="px-2">670</div></td>
                    <td><div className="px-2">120</div></td>
                    <td><div className="px-2">790</div></td>
                  </tr>
                  <tr>
                    <td><div className="px-2">Casablanca</div></td>
                    <td><div className="px-2">510</div></td>
                    <td><div className="px-2">10</div></td>
                    <td><div className="px-2">520</div></td>
                    <td><div className="px-2">60</div></td>
                    <td><div className="px-2">580</div></td>
                  </tr>
                  <tr>
                    <td><div className="px-2">Marrakech</div></td>
                    <td><div className="px-2">420</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">420</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">420</div></td>
                  </tr>
                  <tr>
                    <td><div className="px-2">Fes</div></td>
                    <td><div className="px-2">340</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">340</div></td>
                    <td><div className="px-2">50</div></td>
                    <td><div className="px-2">390</div></td>
                  </tr>
                  <tr>
                    <td><div className="px-2">Oujda</div></td>
                    <td><div className="px-2">350</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">350</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">350</div></td>
                  </tr>
                  <tr>
                    <td><div className="px-2">Agadir</div></td>
                    <td><div className="px-2">210</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">210</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">210</div></td>
                  </tr>
                  <tr>
                    <td><div className="px-2">Tanger</div></td>
                    <td><div className="px-2">220</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">220</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">220</div></td>
                  </tr>
                  <tr>
                    <td><div className="px-2">Laayoune</div></td>
                    <td><div className="px-2">100</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">100</div></td>
                    <td><div className="px-2">-</div></td>
                    <td><div className="px-2">100</div></td>
                  </tr>
                  <tr>
                    <td><div className="px-2">Total</div></td>
                    <td><div className="px-2">2710</div></td>
                    <td><div className="px-2">120</div></td>
                    <td><div className="px-2">2830</div></td>
                    <td><div className="px-2">230</div></td>
                    <td><div className="px-2">3060</div></td>
                  </tr>
                </tbody>
              </table>

              <table className="table md:hidden"><colgroup><col width="100" /><col width="100" /><col width="219" /><col width="38" /></colgroup>
                <thead className="bg-slate-200">
                  <tr>
                    <td>Faculté</td>
                    <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;M&eacute;decine&quot;}">Médecine</td>
                  </tr>
                  <tr>
                  <td><div className="px-2">-</div></td>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Les civils&quot;}">Les civils</td>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot; Militaires marocains et &eacute;trangers&quot;}">Militaires marocains et &eacute;trangers</td>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Total&quot;}">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Rabat&quot;}">Rabat</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:560}">560</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:110}">110</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:670}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">670</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Casablanca&quot;}">Casablanca</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:510}">510</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:10}">10</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:520}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">520</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Marrakech&quot;}">Marrakech</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:420}">420</td>
                  <td><div className="px-2">-</div></td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:420}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">420</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fes&quot;}">Fes</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:340}">340</td>
                  <td><div className="px-2">-</div></td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:340}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">340</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Oujda&quot;}">Oujda</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:350}">350</td>
                  <td><div className="px-2">-</div></td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:350}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">350</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Agadir&quot;}">Agadir</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:210}">210</td>
                  <td><div className="px-2">-</div></td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:210}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">210</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Tanger&quot;}">Tanger</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:220}">220</td>
                  <td><div className="px-2">-</div></td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:220}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">220</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Laayoune&quot;}">Laayoune</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:100}">100</td>
                  <td><div className="px-2">-</div></td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:100}" data-sheets-formula="=R[0]C[-2]+R[0]C[-1]">100</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Total&quot;}">Total</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:2710}" data-sheets-formula="=SUM(R[-8]C[0]:R[-1]C[0])">2710</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:120}" data-sheets-formula="=SUM(R[-8]C[0]:R[-1]C[0])">120</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:2830}" data-sheets-formula="=SUM(R[-8]C[0]:R[-1]C[0])">2830</td>
                  </tr>
                </tbody>
              </table>
              <table className="table md:hidden" dir="ltr" border="1"><colgroup><col width="100" /><col width="189" /></colgroup>
                <thead className="bg-slate-200">
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Facult&eacute;&quot;}">
                  <div>Facult&eacute;</div>
                  </td>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Pharmacie&quot;}">
                  <div>Pharmacie</div>
                  </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Rabat&quot;}">Rabat</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:120}">120</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Casablanca&quot;}">Casablanca</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:60}">60</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Marrakech&quot;}">Marrakech</td>
                  <td><div className="px-2">-</div></td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fes&quot;}">Fes</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:50}">50</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Oujda&quot;}">Oujda</td>
                  <td><div className="px-2">-</div></td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Agadir&quot;}">Agadir</td>
                  <td><div className="px-2">-</div></td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Tanger&quot;}">Tanger</td>
                  <td><div className="px-2">-</div></td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Laayoune&quot;}">Laayoune</td>
                  <td><div className="px-2">-</div></td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Total&quot;}">Total</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:230}" data-sheets-formula="=SUM(R[-8]C[0]:R[-1]C[0])">230</td>
                  </tr>
                </tbody>
              </table>
              <table className="table md:hidden"><colgroup><col width="100" /><col width="189" /></colgroup>
                <thead className="bg-slate-200">
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Facult&eacute;&quot;}">
                  <div>Facult&eacute;</div>
                  </td>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Total M&eacute;decine et Pharmacie&quot;}">
                  <div>Total M&eacute;decine et Pharmacie</div>
                  </td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Rabat&quot;}">Rabat</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:790}">790</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Casablanca&quot;}">Casablanca</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:580}">580</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Marrakech&quot;}">Marrakech</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:420}">420</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fes&quot;}">Fes</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:390}">390</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Oujda&quot;}">Oujda</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:350}">350</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Agadir&quot;}">Agadir</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:210}">210</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Tanger&quot;}">Tanger</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:220}">220</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Laayoune&quot;}">Laayoune</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:100}">100</td>
                  </tr>
                  <tr>
                  <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Total&quot;}">Total</td>
                  <td data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:3060}">3060</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="default-carousel" className="overflow-y-hidden relative md:w-1/2 px-2" data-carousel="static">
              <h5>Communiqué du Ministère de l’Education Nationale concernant l’Inscription Concours FMP FMD 2021/2022:</h5>
              {/* <!-- Carousel wrapper --> */}
              <div className=" relative h-full ">
                  {data.slideShow.edges.map(({node}) =>(
                    <div className="hidden ease-in-out" data-carousel-item key={node.id}>
                      <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base}/>
                    </div>
                  ))}
              </div>
              {/* <!-- Slider indicators --> */}

              {/* <!-- Slider controls --> */}
              <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:text-gray-800 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg className="w-5 h-5 text-gray-800 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                      <span className="hidden">Previous</span>
                  </span>
              </button>
              <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                  <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:text-gray-800 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg className="w-5 h-5 text-gray-800 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                      <span className="hidden">Next</span>
                  </span>
              </button>
          </div>
        </div>
        <p className="pt-10">
          <strong>Source: </strong>Ministère de l'Education Nationale, de la Formation ProFessionelle, de l'Enseignement Supérieur et de la Recherche Scientifique.
          Département de l'Enseignement Supérieur et de la Recherche Scientifique.
        </p>
      </div>
      <div className="fixed bottom-10 right-10">
        <AnchorLink  to="/#accueil" title="Accueil">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z"/></svg>
          </button>
        </AnchorLink>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    slideShow: allFile(
      filter: {
        relativeDirectory: {eq: "communique-ministere"}, relativePath: {}
      }, 
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          id
          relativePath
          base
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    headerBackgroundImage: file(relativePath: { eq: "student_medecine.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }    
`