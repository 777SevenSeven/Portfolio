/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ativa a exportação estática, que gera os arquivos HTML/CSS/JS puros
  output: 'export',

    // Define o diretório de saída para a exportação estática
  // basePath: '/nome-do-seu-repositorio',

  // Necessário para o componente <Image> do Next.js funcionar após a exportação
  images: {
    unoptimized: true,
  },
};

export default nextConfig;