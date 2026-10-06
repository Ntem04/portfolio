import { ArrowRight, Users, Leaf, Clock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../../../assets/hero.png";

const benefits = [
  {
    Icon: Users,
    label: (
      <>
        Équipe qualifiée
        <br />
        et de confiance
      </>
    ),
  },
  {
    Icon: Leaf,
    label: (
      <>
        Produits écologiques
        <br />
        et sûrs
      </>
    ),
  },
  {
    Icon: Clock,
    label: (
      <>
        Flexibilité
        <br />
        des interventions
      </>
    ),
  },
  {
    Icon: ShieldCheck,
    label: (
      <>
        Satisfaction
        <br />
        garantie
      </>
    ),
  },
];

export default function Home() {
  const reveal = (delay: number) => ({
    animation: `cleanpro-reveal 600ms ease-out ${delay}ms both`,
  });

  return (
    <section className="relative w-full overflow-hidden bg-white font-sans">

      {/* Conteneur principal compact calqué sur la hauteur et l'alignement de la maquette */}
      <div className="relative mx-auto flex w-full max-w-[1720px] flex-col lg:min-h-125 lg:flex-row px-6 lg:px-10 xl:px-12">
        {/* Colonne gauche (Texte compact) */}
        <div className="z-10 flex w-full flex-col justify-center py-6 sm:py-8 lg:w-[48%] lg:py-8">
          <div className="w-full max-w-145 space-y-4">
            {/* Badge compact */}
            <div
              className="cleanpro-reveal inline-flex w-fit rounded-full bg-[#eaf4ef] px-3.5 py-1 text-xs sm:text-[13px] font-bold tracking-wide text-[#1d6f4c]"
              style={reveal(0)}
            >
              Une entreprise, des espaces plus propres
            </div>

            {/* Titre aux proportions exactes de la référence */}
            <h1
              className="cleanpro-reveal text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-[2.6rem] lg:text-[2.75rem]"
              style={reveal(100)}
            >
              Des services de nettoyage
              <br />
              <span className="text-[#1d6f4c]">
                adaptés à chaque niveau
                <br />
                de besoin
              </span>
            </h1>

            {/* Paragraphe court et compact */}
            <p
              className="cleanpro-reveal max-w-125 text-[15px] font-medium leading-relaxed text-slate-600 sm:text-base"
              style={reveal(200)}
            >
              CleanPro Services vous accompagne avec des solutions de nettoyage
              professionnelles, fiables et personnalisées pour un environnement
              de travail plus sain et plus agréable.
            </p>

            {/* Boutons d'action */}
            <div
              className="cleanpro-reveal flex flex-col gap-3 pt-1 sm:flex-row"
              style={reveal(300)}
            >
              <Link
                to="/services"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-[#1d6f4c] px-6 py-2.5 text-sm sm:text-[15px] font-bold text-white transition-colors hover:bg-[#195f42] focus:outline-none focus:ring-4 focus:ring-[#1d6f4c]/30"
              >
                Découvrir nos services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-slate-300 px-6 py-2.5 text-sm sm:text-[15px] font-bold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
              >
                Nous contacter
              </Link>
            </div>

            {/* Barre des 4 avantages en une ligne */}
            <div
              className="cleanpro-reveal flex flex-wrap lg:flex-nowrap items-center gap-3 pt-3"
              style={reveal(400)}
            >
              {benefits.map(({ Icon, label }, index) => (
                <div
                  key={index}
                  className="flex flex-1 min-w-28.75 items-center gap-2 border-r border-slate-200 pr-2 last:border-0"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf4ef]">
                    <Icon
                      className="h-4 w-4 text-[#1d6f4c]"
                      strokeWidth={2.2}
                    />
                  </span>
                  <span className="text-[11px] font-bold leading-tight text-slate-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne droite : Espace image très large pour laisser respirer le visuel */}
        <div className="relative min-h-87.5 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-[54%]">
          {/* Bandeau vert à l'extrême droite */}
          <div
            className="absolute inset-y-0 right-0 hidden w-[11%] bg-[#1d6f4c] lg:block"
            style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
          />

          {/* Découpe biseautée de la photo */}
          <div
            className="cleanpro-reveal absolute inset-0 overflow-hidden bg-slate-100 lg:right-[4.5%]"
            style={{
              ...reveal(150),
              clipPath: "polygon(7% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <img
              src={Hero}
              alt="Ménagère professionnelle nettoyant une vitre"
              fetchPriority="high"
              className="h-full w-full object-cover object-[center_15%]"
            />
          </div>

          {/* Badge flottant blanc */}
          <div
            className="cleanpro-reveal absolute right-4 top-1/2 z-20 flex max-w-55 -translate-y-1/2 items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:right-6 lg:right-[2.5%]"
            style={reveal(450)}
          >
            <div className="mt-0.5 shrink-0 rounded-lg bg-[#1d6f4c] p-2 text-white">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[13px] font-bold leading-tight text-slate-900">
                Un environnement
                <br />
                plus sain pour
                <br />
                votre équipe
              </p>
              <div className="mt-2.5 h-[2.5px] w-8 rounded-full bg-[#1d6f4c]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
