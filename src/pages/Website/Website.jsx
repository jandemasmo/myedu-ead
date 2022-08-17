import "./Website.css";
import { HeaderWebsite } from "../../components/HeaderWebsite/HeaderWebsite";
import { BannerCarousel } from "../../components/BannerCarousel/BannerCarousel";
import { ContentCard } from "../../components/ContentCard/ContentCard";
import { About } from "../../components/About";
import { CardsCursos } from "../../components/CardsCursos/CardsCursos";
import { Contato } from "../../components/Contato/Contato";
import { FooterWebsite } from "../../components/FooterWebsite/FooterWebsite";

import Course1 from "../../assets/images/course-1.jpg";
import Course2 from "../../assets/images/course-2.jpg";
import Course3 from "../../assets/images/course-3.jpg";

export const Website = () => {
  return (
    <>
      <HeaderWebsite />
      <BannerCarousel />
      <main className="content_website">
        <ContentCard />
        <About />
        <div className="cards_cursos">
          <CardsCursos
            backgroundImage={Course1}
            saibamais={"Saiba Mais"}
            inscrevase={"Inscreva-se"}
            curso_title="Sistemas de Informação"
            curso_description="O curso de Sistemas de Informação forma profissionais capazes de administrar o fluxo de informações geradas e distribuídas por redes de computadores dentro e fora de uma organização."
          />

          <CardsCursos
            backgroundImage={Course2}
            saibamais={"Saiba Mais"}
            inscrevase={"Inscreva-se"}
            curso_title="Sistemas de Informação"
            curso_description="O curso de Sistemas de Informação forma profissionais capazes de administrar o fluxo de informações geradas e distribuídas por redes de computadores dentro e fora de uma organização."
          />

          <CardsCursos
            backgroundImage={Course3}
            saibamais={"Saiba Mais"}
            inscrevase={"Inscreva-se"}
            curso_title="Sistemas de Informação"
            curso_description="O curso de Sistemas de Informação forma profissionais capazes de administrar o fluxo de informações geradas e distribuídas por redes de computadores dentro e fora de uma organização."
          />
        </div>
        <Contato />
      </main>
      <FooterWebsite />
    </>
  );
};
