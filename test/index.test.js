import getFile from './index.js';

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('getFile::', () => {
  it('deve ser uma função', () => {
    expect(typeof getFile).toBe('function');
  })
  it('deve retornar array com resultados', async () => {
    const resultado = await getFile('/home/POLICHAT/Documents/finding-links/files/post.md') 
    expect(resultado).toEqual(arrayResult)
  })
  it('deve retornar mensagem "não há links"', async () => {
    const resultado = await getFile('/home/POLICHAT/Documents/finding-links/files/post_semlinks.md')
    expect(resultado).toBe('não há links');
  })
  it('deve lançar um erro na falta de arquivo', () => {
    async function capturaErro() {
      await getFile('/home/POLICHAT/Documents/finding-links/files')
      expect(capturaErro).toThrowError(/não há arquivo no caminho/)
    }})
  })