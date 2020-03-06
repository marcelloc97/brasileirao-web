/*
  This function can remove all unicode accents from a string

  Usage: console.log(replaceSpecialChars("Essa é só uma demonstração! Descomente-me para ver o resoltado no console."));

  Font: https://metring.com.br/javascript-substituir-caracteres-especiais
*/

const replaceSpecialCharsUrl = str => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/([^\w]+|\s+)/g, "-") // Substitui espaço e outros caracteres por hífen
    .replace(/\-\-+/g, "-") // Substitui multiplos hífens por um único hífen
    .replace(/(^-+|-+$)/, ""); // Remove hífens extras do final ou do inicio da string
};

export default replaceSpecialCharsUrl;
