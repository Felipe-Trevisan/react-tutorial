export const fetcher = async (url) => {
  const resposta = await fetch(url);
  if(!resposta.ok){
    throw new Error("Erro ao buscar dados");
  }
  return resposta.json();
}; 