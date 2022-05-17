import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import Seo from "../components/seo"

import { AnchorLink } from "gatsby-plugin-anchor-links";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import nightwind from "nightwind/helper"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import ReactGA from "react-ga4";

ReactGA.initialize("G-0H6F003V7H");
ReactGA.send("pageview");

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Concours Médecine Maroc" />
    <div>
      <div className="py-8 xl:hidden text-center">
            <h1 className="text-3xl text-red-500 xl:w-1/2 font-montserrat">Vous voulez réussir le concours de médecine au Maroc?</h1>
            <h1 className="text-3xl text-red-500 xl:w-1/2 font-montserrat">Tout commence ici…</h1>
      </div>
      <BackgroundImage
        Tag="section"
        fluid={data.headerBackgroundImage.childImageSharp.fluid}
        style={{
          // backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
          <div className="py-52 xl:py-56 px-10 xl:px-52 bg-opacity-30 xl:bg-opacity-5 bg-black">
            <h1 className="hidden xl:block text-4xl text-white xl:w-1/2">Vous voulez réussir le concours de médecine au Maroc?</h1>
            <h1 className="hidden xl:block text-4xl text-white xl:w-1/2">Tout commence ici…</h1>
          </div>
      </BackgroundImage>
      <div className="flex flex-col xl:flex-row justify-center py-10 xl:py-20 xl:px-44">
          <div className="bg-white rounded-lg xl:w-3/5">
            <h1 className="text-2xl font-montserrat">Le saviez-vous ?</h1>
            <ul className="list-disc text-lg font-baloobhai ">
              <li>56 000 bacheliers passent le concours de médecine chaque année au Maroc.</li>
              <li>Seulement 3360 élèves accéderont aux 8 facultés de médecine du royaume.</li>
              <li>Soit seulement 6 bacheliers sur 100.</li>
            </ul>
          </div>
          <div className="xl:w-2/5">
          <a href="https://wa.me/message/OBA4IEB2NYR4E1" target="_blank" rel="noreferrer" className=" my-4 flex items-center">
              <button className="w-full text-white bg-red-600 rounded-3xl hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 p-2 px-3 font-semibold font-baloobhai">Nous contacter</button>
          </a>          
          </div>
      </div>
      
      <div className="block xl:hidden text-center">
          <h3 className="p-2 font-baloobhai">Un concours, c’est une compétition sportive de haut niveau, ça se prépare sérieusement et minutieusement…</h3>

          <StaticImage
            height="300"
            src="../images/icons/business-report.svg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Étudiante en médecine"
          />

          <h3 className="p-2 font-baloobhai">Seuls les athlètes les mieux préparés feront partie des 6% des admis.</h3>
          <StaticImage
            height="300"
            src="../images/icons/medal.svg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Étudiante en médecine"
          />
      </div>
      <div className="hidden xl:flex xl:px-44">
        <div className="xl:flex xl:flex-row xl:items-center">
          <StaticImage
            height="300"
            src="../images/icons/business-report.svg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Étudiante en médecine"
          />
          <h3 className="xl:w-1/2 p-2 font-baloobhai">Un concours, c’est une compétition sportive de haut niveau, ça se prépare sérieusement et minutieusement…</h3>
        </div>

        <div className="xl:flex xl:flex-row xl:items-center justify-end">
          <h3 className="xl:w-1/2 p-2 font-baloobhai">Seuls les athlètes les mieux préparés feront partie des 6% des admis.</h3>
          <StaticImage
            height="300"
            src="../images/icons/medal.svg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Étudiante en médecine"
          />
        </div>
      </div>
      <div className="xl:px-44 text-center">
        <StaticImage
          src="../images/logo_transparent_background_no_baseline.png"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Concours médecine Tout commence ici..."
          width={700}
        />
      </div>
      <div className="xl:px-44 bg-slate-100 text-center">
        <StaticImage
          src="../images/smiling_student.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Étudiante en médecine souriante"
          width={700}
        />
      </div>
      <div id="offre" className="xl:px-44 py-20 text-center">
        <h2 className="text-3xl text-red-500 font-montserrat">Comment ?</h2>
        <div className="xl:py-5 xl:flex xl:flex-row justify-center" >
            <div className="xl:w-1/4 my-4 xl:my-0 p-6 xl:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700 mx-3 text-center">
              <StaticImage
                src="../images/icons/examen.svg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Examen"
                width={100}
              />
              <p className="pt-10 font-baloobhai">En vous mettant à disposition les annales corrigés des 10 dernières années dans les 4 matières (Maths, Physique, Chimie, SVT)</p>
            </div>
            <div className="xl:w-1/4 my-4 xl:my-0 p-6 xl:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700 mx-3 text-center">
              <StaticImage
                src="../images/icons/en-hausse.svg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Examen"
                width={100}
              />
              <p className="pt-10 font-baloobhai">Une plateforme performante et efficace pour gérer vos révisions et piloter en temps réel vos progressions.</p>
            </div>
            <div className="xl:w-1/4 my-4 xl:my-0 p-6 xl:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700 mx-3 text-center">
              <StaticImage
                src="../images/icons/quiz.svg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Examen"
                width={100}
              />
              <p className="pt-10 font-baloobhai">Des dizaines de quiz pour vous entraîner sur votre ordinateur, tablette ou smartphone.</p>
            </div>
        </div>      
        <div className="xl:py-5 xl:flex xl:flex-row justify-center" >
            <div className="xl:w-1/4 my-4 xl:my-0 p-6 xl:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700 mx-3 text-center">
              <StaticImage
                src="../images/icons/parlez.svg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Examen"
                width={100}
              />
              <p className="pt-10 font-baloobhai">Des conseils pour vous coacher dans votre mindset et vos révisions pour être au top de votre forme le jour J.</p>
            </div>
            <div className="xl:w-1/4 my-4 xl:my-0 p-6 xl:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700 mx-3 text-center">
              <StaticImage
                src="../images/icons/meeting.svg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Examen"
                width={100}
              />
              <p className="pt-10 font-baloobhai">Une communauté d’élèves avec le bon mindest pour rester motivés et vous entraider. (Groupe privé sur Telegram).</p>
            </div>
        </div>
      </div>

      <div id="tarif" className="xl:px-44 py-20 bg-slate-100 text-center">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-red-500 font-montserrat">Combien ça coûte?</h5>
        <StaticImage
          src="../images/icons/price-tag.svg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Examen"
          width={400}
        />
        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-baloobhai pt-10">Seulement 350 Dhs. Non, non… Vous ne rêvez pas, ça coûte moins cher qu’un cours particulier de 2 heures.</h6> 
      </div>
      <div id="abonnement" className="xl:px-20 2xl:px-44 py-20 text-center">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-red-500 font-montserrat">Comment puis- je m’abonner?</h5>
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-baloobhai">C’est très simple.</h6> 
          <div className="xl:py-5 xl:flex xl:flex-row xl:h-96 align-middle justify-center justify-content-center">
            <div className="xl:w-1/4 h-full my-4 xl:my-0 p-2 xl:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col justify-between">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">1 - Contactez nous par WhatsApp.</h5>
              <p className="font-baloobhai">Envoyez vos nom, prénom et adresse email</p>
              <p className="font-baloobhai">
              <a href="https://wa.me/message/OBA4IEB2NYR4E1" target="_blank" rel="noreferrer" className="w-full text-white bg-red-600 rounded-3xl hover:bg-red-800 focus:outline-none focus:ring-red-300 p-2 px-3 font-semibold align-middle font-baloobhai">
              Contactez nous
              </a>
              </p>
              <p className="font-baloobhai">
              <a href="https://wa.me/message/OBA4IEB2NYR4E1" target="_blank" rel="noreferrer">
                <StaticImage
                  src="../images/icons/whatsapp.svg"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Examen"
                  width={100}
                />
              </a>
              </p>
            </div>  
            <div className="xl:w-1/4 h-full xl:ml-2  my-4 xl:my-0 p-2 xl:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col justify-between">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">2 - Dépôt Wafacash ou virement bancaire</h5>
              <p className="font-baloobhai">Nous vous enverrons les instructions pour payer votre abonnement par Wafacash, par dépôt d’espèces ou virement sur un compte bancaire</p>
              <div className="text-center">
                <StaticImage
                  src="../images/wafacash-logo.png"
                  width={200}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Étudiante en médecine"
                />
              </div>
            </div>
            <div className="xl:w-1/4 h-full xl:ml-2 xl:mr-2 my-4 xl:my-0 p-2 xl:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col justify-between">
              <p>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                3 - Preuve de paiement
              </h5>
              <p className="font-baloobhai">Envoi de preuve de paiement par WhatSapp</p>
              </p>
              <div className="text-center">
                <StaticImage
                  src="../images/icons/cash-payment.svg"
                  width={150}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Étudiante en médecine"
                />
              </div>
            </div>
            <div className="xl:w-1/4 h-full my-4 xl:my-0 p-2 xl:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col justify-between">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                4 - Email d'accès
              </h5>
              <p className="font-baloobhai">Réception du lien par email pour choisir votre mot de passe et accéder à votre espace de travail personnel.</p>
              <div className="text-center">
                <StaticImage
                  src="../images/icons/email.svg"
                  width={120}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Étudiante en médecine"
                />
              </div>
            </div>
          </div>
 
          <p className="font-baloobhai"><strong>Remarque importante: </strong>L’espace de travail ne peut pas être partagé car il vous permet de faire le suivi de vos propres révisions. </p>

      </div>

      <div id="infospratiques" className="xl:px-44 py-20 bg-slate-100">
        <h3 className="mb-2 text-3xl font-bold tracking-tight text-red-500 font-montserrat">Informations pratiques</h3>
        
        <Accordion>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <strong>Comment s'inscrire au concours ?</strong>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Les inscriptions aux concours FMP FMD 2021/2022, concours d’accès aux facultés de médecine et de pharmacie et aux facultés de médecine dentaire se fera exclusivement sur la plateforme :
                    </p>
                    <a className="xl:flex xl:flex-row justify-center" href="https://www.cursussup.gov.ma/registration"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">S'inscrire au concours</button></a>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                      <strong>Comment faire mes candidatures sur la plateforme ?</strong>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="xl:py-5 xl:flex xl:flex-row justify-center">
                      <StaticImage
                        src="../images/Comment_s_inscrire_au_concours.png"
                        width={900}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Étudiante en médecine"
                        
                      />
                    </div>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <strong>Cadre de référence du concours commun d’accès aux facultés de Médecine, de Pharmacie et de Médecine Dentaire.</strong>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="xl:py-5 xl:flex xl:flex-row justify-center">
                      <StaticImage
                        src="../images/MEN_logo.png"
                        width={300}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Étudiante en médecine"
                      />
                    </div>
                    <a target="_blank" rel="noreferrer" className="xl:flex xl:flex-row justify-center" href="https://www.enssup.gov.ma/storage/Cadre%20de%20r%C3%A9f%C3%A9rence/Cadre%20Ref%20Medecine%20VFr.pdf"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadre de référence du concours commun</button></a>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <strong>Quel est le nombre de places dans les facultés ?</strong>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="xl:flex xl:flex-row">
                      <div className="xl:w-1/2 px-2">
                      <h5>Tableau détaillé des places disponibles par faculté au Maroc / Médecine et Pharmacie - Nombre de places par faculté en 2021 - 2022</h5>
                      
                      <StaticImage
                        src="../images/places_admission_concours_medecine_2021 - 2022.jpeg"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Étudiante en médecine"
                        className="place-content-center p-4"
                      />
                      </div>
                      <div className="xl:w-1/2">
                        <h5>Communiqué du Ministère de l’Education Nationale concernant l’Inscription Concours FMP FMD 2021/2022:</h5>
                        <Carousel showThumbs={false}>
                            {data.slideShow.edges.map(({node}) =>(
                              <div key={node.id}>
                                <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base}/>
                              </div>
                            ))}
                        </Carousel>
                    </div>
                  </div>
                  <p className="pt-10">
                    <strong>Source: </strong>Ministère de l'Education Nationale, de la Formation ProFessionelle, de l'Enseignement Supérieur et de la Recherche Scientifique.
                    Département de l'Enseignement Supérieur et de la Recherche Scientifique.
                  </p>
                  </AccordionItemPanel>
              </AccordionItem>
          </Accordion>        
      </div>

      <div id="faq" className="xl:px-44 py-20">
        <h3 className="mb-2 text-3xl font-bold tracking-tight text-red-500 font-montserrat">FAQ</h3>
        <Accordion>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <strong>1 - Qui sommes-nous?</strong>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p><Link to="/" className="text-blue-500">www.concours-medecine.ma</Link> est une solution développée par BOOKMANIA partenaire de réussite scolaire depuis 2007 à Casablanca.</p>
                    <p>A BOOKMANIA, notre équipe de professeurs experts a préparé des centaines d’étudiants au concours de médecine depuis 15 ans.</p>
                    <p>Nous avons décidé de mettre en ligne tous nos outils efficaces et performants pour aider les élèves qui veulent réussir ce concours dans tout le royaume.</p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <strong>2 - Que comprend l’abonnement?</strong>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>L’abonnement vous donne accès à une plateforme accessible sur ordinateur, tablette ou smartphone, qui comprend les annales corrigées des années précédentes du concours de médecine dans les quatres matières du concours (Maths, Physique, Chimie, SVT).</p>
                      <p>La plateforme vous permet de gérer vos révisions de manière très efficace.</p>
                      <p>En temps réel, vous pouvez avoir vos scores dans les différentes matières et sur les différents sujets d’annales et ainsi piloter vos révisions de manière très efficace.</p>
                      <p>Vous avez aussi accès à des conseils personnalisés dans un espace dédié. Nous vous accompagnons pour être prêts le jour J.</p>
                      <p>Vous pouvez aussi échanger avec des élèves aussi motivés que vous qui préparent le concours de médecine dans tout le royaume.</p>
                  </AccordionItemPanel>
              </AccordionItem>
                            <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <strong>3 - Quand puis-je avoir accès à la plateforme pour commencer à me préparer?</strong>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                   <p>Dès réception de la preuve de votre paiement par WhatSapp. Il suffit d’aller déposer l’argent dans n’importe quelle agence WafaCash et nous envoyer une photo de la preuve de dépôt. Nous vous envoyons instantanément les accès à la plateforme.</p>
                  </AccordionItemPanel>
              </AccordionItem>
          </Accordion>
      </div>

      {/* <div className="fixed left-5 bottom-20 xl:left-10 xl:right-10">
      <button onClick={() => nightwind.toggle()}>Nightmode</button>
      </div> */}

      <div className="fixed left-5 bottom-20 xl:left-10 xl:right-10">
        <a href="https://wa.me/message/OBA4IEB2NYR4E1" target="_blank" rel="noreferrer" >
          <button type="button" className="text-white bg-white hover:bg-green-100 border-green-500 border-2 focus:outline-none focus:ring-red-300 font-medium rounded-3xl text-sm p-2.5 text-center inline-flex items-center mr-2">
          <StaticImage
              src="../images/whatsapp.png"
              width={22}
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              alt="Logo"
          />
          </button>
        </a>
      </div>

      <div className="hidden xl:block fixed bottom-20 right-10">
        <AnchorLink  to="/#accueil" title="Accueil">
          <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z"/></svg>
          </button>
        </AnchorLink>
      </div>

      <div className="fixed xl:hidden bottom-20 right-5">
        <AnchorLink  to="/#accueil-mobile" title="Accueil">
          <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z"/></svg>
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