import Navbar from "../../components/Navbar";
import { SobreStyle } from "./styles";
import Banner from "../../assets/banner.png";

function Sobrenos() {
  return (
    <SobreStyle>
      <Navbar />

      <section>
        <div className="conteudo">
          <div className="texto">
            <h1>Quem nós somos?</h1>
            <p>
              Bem-vindo à nossa loja de brownie, onde a nossa história de
              delícias se mistura com a nobre missão de ajudar os mais
              necessitados. Tudo começou quando um grupo de amigos, apaixonados
              por doces e comprometidos com a responsabilidade social, decidiu
              criar uma loja de brownies cujo objetivo era ajudar instituições
              de caridade. Eles passaram meses desenvolvendo a receita perfeita
              de brownie, uma sobremesa deliciosa que seria irresistível aos
              paladares mais exigentes, e cuja venda pudesse arrecadar fundos
              para doações. E assim nasceu a nossa loja de brownie, com a missão
              de transformar o prazer de saborear um doce em uma causa nobre.
              Desde então, temos trabalhado duro para criar brownies que sejam
              deliciosos e de alta qualidade, feitos com ingredientes
              selecionados e processos cuidadosos de produção. Além disso,
              comprometemo-nos a destinar parte da receita obtida com as vendas
              dos nossos brownies para instituições de caridade. Cada mordida em
              nossos brownies é uma experiência única e satisfatória, mas também
              uma contribuição para uma causa nobre. Acreditamos que a
              responsabilidade social é um valor fundamental e que devemos
              trabalhar juntos para tornar o mundo um lugar melhor. Ao comprar
              nossos brownies, você não só estará saboreando um doce delicioso,
              mas também estará contribuindo para ajudar quem precisa. O nosso
              compromisso é com a qualidade dos nossos produtos e com a nossa
              missão de ajudar os menos favorecidos. Experimente nossos brownies
              e faça parte da nossa história de solidariedade e prazer em
              saborear doces deliciosos. Agradecemos pelo seu interesse em nossa
              loja e pela contribuição para a nossa causa. Juntos, podemos fazer
              a diferença!
            </p>
          </div>
          <div className="bannerimg">
            <div className="banner">
              <img src={Banner} />
            </div>
          </div>
        </div>
      </section>
    </SobreStyle>
  );
}

export default Sobrenos;
