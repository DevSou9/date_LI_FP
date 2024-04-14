import React from 'react';
import { Style } from './style';

const ApiDateAnalytics = () => {
  return (
    <Style>
      <h1>API Date Analytics</h1>
      <h2>Análise de Dados de Pedidos em E-commerce</h2>
      <p>
        Este projeto tem como objetivo coletar dados de pedidos de um e-commerce, armazená-los em um banco de dados MongoDB e gerar gráficos para análise dos dados. Através dessa solução, e-commerces e seus gestores podem ter insights valiosos sobre o desempenho de suas lojas, possibilitando uma tomada de decisão mais certeira e estratégica.
      </p>

      <h2>Funcionalidades</h2>
      <ul>
        <li>
          Coleta de Dados de Pedidos: O sistema realiza a coleta de dados de pedidos realizados em uma loja virtual, incluindo informações sobre clientes, valores de pedidos, produtos vendidos e status de aprovação.
        </li>
        <li>
          Armazenamento no MongoDB: Os dados coletados são armazenados de forma organizada e segura em um banco de dados MongoDB hospedado na plataforma Atlas, permitindo o acesso rápido e confiável aos dados.
        </li>
        <li>
          Geração de Gráficos Personalizados: Com base nos dados coletados, o projeto é capaz de gerar gráficos e relatórios personalizados. Neste momento, o projeto já apresenta um gráfico de vendas por produto, mas é possível expandir essa funcionalidade para gerar outros tipos de gráficos relevantes para cada e-commerce.
        </li>
      </ul>

      <h2>Benefícios para E-commerces e Gestores</h2>
      <ul>
        <li>
          Análise de Desempenho: Com os gráficos gerados pelo projeto, e-commerces podem analisar o desempenho de vendas ao longo do tempo, identificar produtos mais populares e entender a sazonalidade de suas vendas.
        </li>
        <li>
          Identificação de Oportunidades: Através da análise dos dados, gestores podem identificar oportunidades de melhorias em suas estratégias de marketing, precificação de produtos e gerenciamento de estoque.
        </li>
        <li>
          Acompanhamento de Metas: Ao analisar os dados de vendas em relação às metas estabelecidas, os gestores podem acompanhar o progresso e a eficácia de suas estratégias.
        </li>
        <li>
          Visão Holística do Negócio: O projeto oferece uma visão holística do negócio, permitindo que e-commerces tenham uma compreensão mais abrangente de seu público, produtos e desempenho geral.
        </li>
      </ul>

      <h2>Possibilidades de Expansão</h2>
      <p>
        Além das funcionalidades já implementadas, há várias possibilidades de expansão para tornar este projeto ainda mais poderoso e relevante para e-commerces:
      </p>
      <ul>
        <li>
          Análise de Dados em Tempo Real: Implementar a coleta e análise de dados em tempo real, permitindo uma visão atualizada e dinâmica do desempenho da loja.
        </li>
        <li>
          Integração com Plataformas de Pagamento: Integrar o projeto com plataformas de pagamento para analisar métricas financeiras, como taxas de conversão e ticket médio.
        </li>
        <li>
          Segmentação de Clientes: Desenvolver funcionalidades de segmentação de clientes para identificar grupos específicos de consumidores e entender melhor suas preferências.
        </li>
        <li>
          Acompanhamento de Indicadores-chave de Desempenho (KPIs): Implementar métricas-chave para monitorar o desempenho geral do e-commerce, como taxa de conversão, taxa de abandono de carrinho e taxa de recompra.
        </li>
      </ul>
    </Style>
  );
};

export default ApiDateAnalytics;
