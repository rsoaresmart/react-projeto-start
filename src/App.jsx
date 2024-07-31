import { useState } from 'react'
import './App.css'

function App() {

  const [id, setId] = useState('');
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [foto, setFoto] = useState('');

  const [classInserir, setClassInserir] = useState('btn btb-outline');
  const [classAlterar, setClassAlterar] = useState('Sumir');

  const cadastrar = (e) => {
    e.preventDefault()

    if (produto === ""){
      alert ("Por favor preencha o campo nome do produto")
    }else if (valor ===""){
      alert ("Por favor preencha o campo valor do produto")
    }else if(quantidade ===""){
      alert ("Por favor preencha o campo quantidade do produto")
    }else if(foto ===""){
      alert("Por favor preencha o campo foto do produto")
    }else{
      alert("Produto cadastrado com sucesso!")
    }
  }
  return (
   <div className="container">
   <h1 className="mt-3 mb-3">cadastro de Produto</h1>

   <form onSubmit={cadastrar}>
      <div className="row mb-3">
      <div clasNsame="col">
          <input
            type="text"
            value={produto}
            className="form-control"
            placeholder="Nome do Produto"
            onChange={(e) => setProduto(e.target.value)}
            />
         </div>
         <div className="col">
          <input
            type="texte"
            value={valor}
            placeholder="Valor"
            className="form-control"
            onChange={(e) => setValor(e.target.value)}
            />
         </div>
         <div className="col">
          <input
            type="texte"
            value={quantidade}
            placeholder="Quantidade2"
            className="form-control"
            onChange={(e) => setQuantidade(e.target.value)}
            />
         </div>
         <div className="col">
          <input
            type="texte"
            value={foto}
            placeholder="Url da imagem"
            className="form-control"
            onChange={(e) => setFoto(e.target.value)}
            />
         </div>
      </div>

      <div className="row mb-3">
      </div>
      <div className="btn-group d-flex gap-3">
      <button tapeclassName={`btn btn-outline-success ${classInserir}`}>inserir</button>
      <button className={`btn btn-outline-primary ${classAlterar}`}>Salvar</button>
      </div>
   </form>

   <table className='table table'>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">nome do produto</th>
        <th scope="col">Valor</th>
        <th scope="col">Qtd</th>
        <th scope="col">imagem</th>
        <th scope="col" className='text-center'>Ações</th>
      </tr>
      
    </thead>
      <tbody>
      <tr>
        <th scope='row'>#</th>
        <th>nome do produto</th>
        <th>Valor</th>
        <th>Qtd</th>
        <th>
          <img width={40} src="https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F537359%2Fnotebook-acer-intel-core-i5-12450h-8gb-ram-ssd-256gb-15-6-full-hd-linux-cinza-a515-57-51w5_1713968348_m.jpg&w=256&q=75" alt="imagem do produto" />
        </th>
        <div className='btn-goup d-flex gap-1'>
          <button className="btn btn-outline-warning">
          <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className='btn btn-outline-danger'>
          <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <th>

        </th>
      </tr>
      <tr>
        <th scope='row'>#</th>
        <th>nome do produto</th>
        <th>Valor</th>
        <th>Qtd</th>
        <th>
          <img width={40} src="https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F537359%2Fnotebook-acer-intel-core-i5-12450h-8gb-ram-ssd-256gb-15-6-full-hd-linux-cinza-a515-57-51w5_1713968348_m.jpg&w=256&q=75" alt="imagem do produto" />
        </th>
        <div className='btn-goup d-flex gap-1'>
          <button className="btn btn-outline-warning">
          <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className='btn btn-outline-danger'>
          <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <th>

        </th>
      </tr>
      <tr>
        <th scope='row'>#</th>
        <th>nome do produto</th>
        <th>Valor</th>
        <th>Qtd</th>
        <th>
          <img width={40} src="https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F537359%2Fnotebook-acer-intel-core-i5-12450h-8gb-ram-ssd-256gb-15-6-full-hd-linux-cinza-a515-57-51w5_1713968348_m.jpg&w=256&q=75" alt="imagem do produto" />
        </th>
        <div className='btn-goup d-flex gap-1'>
          <button className="btn btn-outline-warning">
          <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className='btn btn-outline-danger'>
          <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <th>

        </th>
      </tr>
      <tr>
        <th scope='row'>#</th>
        <th>nome do produto</th>
        <th>Valor</th>
        <th>Qtd</th>
        <th>
          <img width={40} src="https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F537359%2Fnotebook-acer-intel-core-i5-12450h-8gb-ram-ssd-256gb-15-6-full-hd-linux-cinza-a515-57-51w5_1713968348_m.jpg&w=256&q=75" alt="imagem do produto" />
        </th>
        <div className='btn-goup d-flex gap-1'>
          <button className="btn btn-outline-warning">
          <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className='btn btn-outline-danger'>
          <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <th>

        </th>
      </tr>
      
      </tbody>
      
   </table>

   </div>

  )
}

export default App
  