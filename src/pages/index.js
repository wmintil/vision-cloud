import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const siteNavigationLinks = [
  {
    text: "Team",
    url: "t",
  },
  {
    text: "Mission",
    url: "s",
  },
  {
    text: "Contact",
    url: "f",
  }
]

const Intro = [
  {
    text: "Intro",
    url: "d",
    description:
      "Vision Cloud est une société d’intégration fondée par trois associés, spécialisée dans trois domaines complémentaires : l’informatique cloud, la sécurité électronique, et l’intelligence artificielle. Elle accompagne les entreprises dans la modernisation de leurs infrastructures, la sécurisation de leurs sites, et la valorisation des données en temps réel, grâce à des solutions simples à déployer et pilotables à distance",
  },
]

const carousselLinks = [
  {
    url: "k",
    text: "Vidéosurveillance Cloud",
    description:
      "Solution de sécurité de nouvelle génération repose sur une plateforme unifiée et hébergée dans le cloud. Elle intègre des caméras intelligentes, le contrôle d’accès, des capteurs et des systèmes d’alarme dans une interface unique, simple et intuitive. Grâce à l’intelligence artificielle embarquée, elle permet une recherche rapide d’événements, une analyse en temps réel et une gestion centralisée, quel que soit le nombre de sites. Conçue pour éliminer les serveurs et infrastructures complexes, elle offre une sécurité renforcée, des mises à jour automatiques et une évolutivité adaptée aussi bien aux petites entreprises qu’aux grandes organisations multisites.",
  },
  { 
    text: "Réseaux Cloud",
    url: "using-typescript" ,
    description: "Cette solution de connectivité propose un réseau entièrement managé dans le cloud, conçu pour remplacer la complexité des infrastructures traditionnelles. Elle offre un Wi-Fi fiable et sécurisé, une configuration centralisée et des mises à jour automatiques, sans nécessiter de matériel réseau lourd ni d’intervention technique complexe. L’architecture évolutive permet d’ajouter facilement de nouveaux sites ou utilisateurs, tout en garantissant une visibilité complète et en temps réel sur l’ensemble du réseau. Cette approche assure à la fois performance, sécurité et simplicité de gestion, adaptée aussi bien aux petites structures qu’aux grandes organisations multisites."
  },
  { 
    text: "Solution AI",
    url: "using" ,
    description: "Les solutions d’intelligence artificielle appliquées à la vision par ordinateur permettent d’analyser automatiquement les images et les vidéos afin de détecter, reconnaître ou classifier des objets, des personnes et des comportements. Ces technologies ouvrent la voie à de nombreux cas d’usage, tels que la détection d’intrusions, le comptage de personnes, l’analyse des flux de clients, la reconnaissance de plaques d’immatriculation ou encore l’identification d’anomalies en temps réel. En intégrant l’IA directement dans la gestion de la vidéosurveillance, elles offrent aux organisations des outils puissants pour améliorer la sécurité, optimiser les opérations et faciliter la prise de décision grâce à des données visuelles exploitables." 
  },
  // { text: "Deferred Static Generation", url: "using-dsg" },
]

const teamLinks = [
  {
    sectionTitle: "Founder",
    position: "Founder & CEO",
    name: "Angélique Fischer",
    image_name: "../images/ang.jpeg",
    url: "https://www.linkedin.com/in/angelique-fischer-ll-b-m-a-7b537022/",
    text: "Je suis une dirigeante passionnée par l’innovation et engagée dans la transformation digitale des entreprises. À travers mon rôle de CEO, je me spécialise dans la revente de solutions de vidéosurveillance cloud, de réseaux managés et d’intelligence artificielle. Mon objectif est d’accompagner chaque organisation dans la modernisation de son infrastructure, en proposant des solutions performantes, sécurisées et adaptées aux enjeux actuels et futurs, tout en plaçant la relation client au cœur de ma démarche."
  }
]

const misiinDetail = [
  {
    url: "p",
    text: "Notre mission est de rendre la sécurité électronique, le réseau et l’intelligence artificielle accessibles et performants grâce au cloud. Nous aidons nos clients à protéger, connecter et anticiper, en leur offrant des solutions innovantes, simples à déployer et pensées pour durer."
  }
]

const marketStudies = [
  {
    url: "l",
    text : "En 2025, le marché de la sécurité électronique évolue fortement sous l’impulsion du cloud, de l’intelligence artificielle et de l’edge computing. Les entreprises privilégient désormais des solutions hybrides, combinant stockage local et services cloud pour plus de flexibilité et de résilience. L’IA s’impose comme un levier majeur, avec la reconnaissance faciale, l’analyse comportementale et la détection prédictive qui améliorent la réactivité et la prévention des incidents. En parallèle, l’intégration massive de capteurs IoT élargit les capacités de surveillance, tout en renforçant la nécessité d’une cybersécurité robuste face à des menaces croissantes et à des réglementations de plus en plus strictes."
  }
]

const contactUrl = [
  {
    url: "g",
    email: "sales@vision-cloud.eu",
  },
]

const contactForm = [
  {
    url: "cf",
    title: "Contact",
    nameField : "Name",
    emailField: "Enter email",
    textField: "Enter your text"
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const width = 500;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

 const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
const endTime = stratTime + 643248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const IndexPage = () => (
  <Layout>
    {/* <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div> */}

      <div className="navHeader">
        <StaticImage
        src="../images/logo_cota3.png"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      </div>

      <div className="main-hero">
        {Intro.map(link => (
              <div key={link.url} className={styles.intro}>
                <div className={styles.description}>
                  <div>{link.description}</div>
                </div>
              </div>
            ))}
      </div>
    
    <div className="carousel">
        <Slider {...settings}>
        {carousselLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <div>
              <a href={`${link.url}${utmParameters}`}>{link.text}</a>
              {i !== carousselLinks.length - 1 && <> · </>}
              <div>{link.description}</div>
            </div>
          </React.Fragment>
        ))}
        </Slider>
    </div>

    <div className="mission">
      {misiinDetail.map(link => (
            <div>{link.text}</div>
          ))}
    </div>
    <div className="team">
      {teamLinks.map(link => (
            <div key={link.url} className="team-member">
              <div className="team-member-bio">
                <div key="i" className="title">{link.position}</div>

                <StaticImage key="iv" alt="image of founder"  src="../images/ang.jpeg" class={styles.team} />
              </div>
              <div className="team-member-bio">
                <div key="ii"  className="sub-title">{link.name}</div>
                <div className="team_description">
                  <div>{link.text}</div>
                </div>
                <a  key="v"  href={link.url} className="team-link">linkedin</a>
              </div>
            </div>
          ))}
    </div>
    <div className="studies">
      {marketStudies.map(link => (
            <div key={link.url}>{link.text}</div>
          ))}
    </div>
  </Layout>
)



/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
