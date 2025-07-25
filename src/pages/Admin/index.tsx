import { useState } from 'react'
import assist from '../../assets/images/user.png'
import { useNavigate } from 'react-router-dom'
import { Toast, Modal, Button } from 'react-bootstrap'
import axios from 'axios'

export function Admin () {
  const navigate = useNavigate()

  const backToHome = () => {
    navigate('/')
  }

  const [owner, setOwner] = useState('')

  const inputOwner = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwner(e.target.value)
  }

  const [equipmentType, setEquipmentType] = useState('')

  const inputEquipmentType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEquipmentType(e.target.value)
  }

  const [entryDate, setEntryDate] = useState('')

  const inputEntryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntryDate(e.target.value)
  }

  const [defect, setDefect] = useState('')

  const inputDefect = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDefect(e.target.value)
  }

  const [deliveryDate, setDeliveryDate] = useState('')

  const inputDeliveryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryDate(e.target.value)
  }

  const [status, setStatus] = useState('')

  const inputStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value)
  }

  const [obs, setObs] = useState('')

  const inputObs = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setObs(e.target.value)
  }

  const form = {
    proprietario: owner,
    tipoEquipamento: equipmentType,
    entradaLab: entryDate,
    defeito: defect,
    previsaoEntrega: deliveryDate,
    statusConcerto: status,
    observacoes: obs
  }
  const [id, setId] = useState<string>('')
  const [osMShow, setOSMShow] = useState(false)
  const [toast400OSShow, set400TOSShow] = useState(false)
  const [toast500OSShow, set500TOSShow] = useState(false)

  const os = async () => {
    try {
      const response = await fetch('https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      const body = await response.json()
      setId(body.id)
      setOSMShow(true)
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        set400TOSShow(true)
        setTimeout(() => set400TOSShow(false), 3000)
      } else {
        set500TOSShow(true)
        setTimeout(() => set500TOSShow(false), 3000)
      }
    }
  }

  const closeModalOS = () => {
    window.location.reload()
  }

  async function getAll () {
    try {
      const response = await fetch('https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os')

      if (response.ok) {
        const body = await response.json()

        return body
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        set400TOSShow(true)
        setTimeout(() => set400TOSShow(false), 3000)
      } else {
        set500TOSShow(true)
        setTimeout(() => set500TOSShow(false), 3000)
      }
    }
  }

  async function get (id: string) {
    try {
      const response = await fetch('https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os/' + id)
      if (response.status === 200) {
        const body = await response.json()

        return body
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        set400TOSShow(true)
        setTimeout(() => set400TOSShow(false), 3000)
      } else {
        set500TOSShow(true)
        setTimeout(() => set500TOSShow(false), 3000)
      }
    }
  }

  interface SearchResult {
  id: string;
    proprietario: string;
    tipoEquipamento: string;
    entradaLab: string;
    defeito: string;
    previsaoEntrega: string;
    statusConcerto: string;
    observacoes: string;
  }

  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  const searchOS = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const inputElement = document.getElementById('txtBusca') as HTMLInputElement
    const searchValue = inputElement?.value || ''

    try {
      if (searchValue === 'All') {
        const results = await getAll()
        setSearchResults(results || [])
      } else {
        const result = await get(searchValue)
        setSearchResults(result ? [result] : [])
      }
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  const [alterarBShow, setABShow] = useState(false)

  const InputButtonSalvar = () => {
    return alterarBShow
      ? (
        <button type='button' className='btn btn-primary' onClick={() => { put(id); setABShow(false) }}>Alterar
        </button>
        )
      : null
  }

  const returnFormToAlter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const row = event.currentTarget.closest('tr')
    if (!row) return

    // Get all the cells (<td>) in the row
    const cells = row.getElementsByTagName('td')
    if (cells.length === 0) return

    // Update the form state with the values from the cells
    setOwner(cells[1].innerText.trim())
    setEquipmentType(cells[2].innerText.trim())
    setEntryDate(cells[3].innerText.trim())
    setDefect(cells[4].innerText.trim())
    setDeliveryDate(cells[5].innerText.trim())
    setStatus(cells[6].innerText.trim())
    setObs(cells[7].innerText.trim())
    setId(cells[0].innerText.trim())
    setABShow(true)
  }

  const [alterarMOSShow, setOSAMShow] = useState(false)

  async function put (id: string) {
    try {
      const response = await fetch('https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os/' + id, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      const body = await response.json()
      setId(body.id)
      setOSAMShow(true)
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        set400TOSShow(true)
        setTimeout(() => set400TOSShow(false), 3000)
      } else {
        set500TOSShow(true)
        setTimeout(() => set500TOSShow(false), 3000)
      }
    }
  }

  return (
    <main>
      <header className='bg-primary p-5 mb-5 text-light d-flex justify-content-between'>
        <div>
          <h3><i className='bi bi-motherboard me-1' />MyAssist</h3>
        </div>
        <div className='d-flex align-items-center'>
          <figure className='foto me-2'>
            <img id="fotoLogin" src={assist} />
          </figure>
          <div>
            <h6>Olá, funcionário.</h6>
            <h6><a className='text-light' href="" onClick={backToHome}>Finalizar sessão</a></h6>
          </div>
        </div>
      </header>
      <body className='container my-4'>
        <section className='border rounded p-4 my-5'>
          <h2>Cadastrar o equipamento</h2>
          <form id='dados' name='dados'>
            <div className='row mb-3'>
              <div className='col-md-4 my-3'>
                <label htmlFor='proprietario' className='form-label'>Proprietário</label>
                <input value={owner} type='text' className='form-control' id='proprietario' name='proprietario' required placeholder='Ex:Fulano de Tal' onChange={inputOwner} />
              </div>
              <div className='col-md-4 my-3'>
                <label htmlFor='equipamento' className='form-label'>Tipo de equipamento</label>
                <select value={equipmentType} name='equipamento' id='equipamento' className='form-select' onChange={inputEquipmentType} required>
                  <option>Selecione o equipamento</option>
                  <option>Geladeira</option>
                  <option>Ar condicionado</option>
                  <option>Microondas</option>
                  <option>Adega</option>
                  <option>Secadora</option>
                  <option>Caixa de som</option>
                  <option>Smart TV</option>
                  <option>Fone de ouvido</option>
                </select>
              </div>
              <div className='col-md-4 my-3'>
                <label htmlFor='dataEntrada' className='form-label'>Entrada laboratório</label>
                <input value={entryDate} type='date' className='form-control' id='dataEntrada' name='dataEntrada' onChange={inputEntryDate} required />
              </div>
              <div className='col-12- my-3'>
                <label htmlFor='defeito' className='form-label'>Defeito</label>
                <textarea value={defect} name='defeito' id='defeito' className='form-control' placeholder='Ex:O defeito apresentado...' onChange={inputDefect} required />
              </div>
              <div className='col-md-6 my-3'>
                <label htmlFor='dataEntrega' className='form-label'>Previsão de Entrega</label>
                <input value={deliveryDate} type='date' name='dataEntrega' id='dataEntrega' className='form-control' onChange={inputDeliveryDate} required />
              </div>
              <div className='col-md-6 my-3'>
                <label htmlFor='status' className='form-label'>Status do conserto</label>
                <select value={status} className='form-select' name='status' id='status' required onChange={inputStatus}>
                  <option>Selecione o status</option>
                  <option>Aguardando aprovação</option>
                  <option>Aguardando orçamento</option>
                  <option>Em conserto</option>
                  <option>Finalizado</option>
                </select>
              </div>
              <div className='col-12- my-3'>
                <label htmlFor='observacao' className='form-label'>Observações</label>
                <textarea value={obs} name='observacao' id='observacao' className='form-control' placeholder='Ex:O equipamento..' onChange={inputObs} />
              </div>
              <div className='row mb-3'>
                <div className='col-md-3 my-0'>
                  <button type='button' className='btn btn-primary my-3' onClick={os}>Cadastrar Equipamento</button>
                  <InputButtonSalvar />
                </div>
                <Modal show={osMShow}>
                  <div className='lg'>
                    <div className='modal-header'>
                      <h1 className='modal-title fs-5' id='osModalLabel'>Ordem de serviço criada!</h1>
                      <Button id='fecharModalOS' type='button' className='btn-close' aria-label='Close' onClick={() => { setOSMShow(false); closeModalOS() }} />
                    </div>
                    <div className='modal-body'>
                      <p className='my-auto ms-2 p-2'>OS gerada:{id}</p>
                    </div>
                  </div>
                </Modal>
                <Modal show={alterarMOSShow}>
                  <div className='lg'>
                    <div className='modal-header'>
                      <h1 className='modal-title fs-5' id='osModalLabel'>Ordem de serviço alterada!</h1>
                      <Button id='fecharModalOS' type='button' className='btn-close' aria-label='Close' onClick={() => { setOSAMShow(false); closeModalOS() }} />
                    </div>
                    <div className='modal-body'>
                      <p className='my-auto ms-2 p-2'>OS alterada:{id}</p>
                    </div>
                  </div>
                </Modal>
                <Toast show={toast400OSShow} className='toast align-items-center text-white bg-danger w-50' role='alert' aria-live='assertive' aria-atomic='true' id='toast400OS'>
                  <div className='d-flex' data-bs-theme='dark'>
                    <p className='my-auto ms-2 p-2'>Usuário ou senha incorreto!</p>
                    <button type='button' className='btn-close btn-white me-2 m-auto' data-bs-dismiss='toast' aria-label='Close' />
                  </div>
                </Toast>
                <Toast show={toast500OSShow} className='toast align-items-center text-white bg-danger w-50' role='alert' aria-live='assertive' aria-atomic='true' id='toast500OS'>
                  <div className='d-flex' data-bs-theme='dark'>
                    <p className='my-auto ms-2 p-2'>Serviço indisponivel!</p>
                    <button type='button' className='btn-close btn-white me-2 m-auto' data-bs-dismiss='toast' aria-label='Close' />
                  </div>
                </Toast>
                <div className='col-md-2 my-0'>
                  <button type='button' id='botaoAlterar' className='btn btn-primary' hidden>Alterar</button>
                </div>
              </div>
            </div>
          </form>
        </section>
        <section className='border rounded p-4 my-5'>
          <h2>Realizar Busca</h2>
          <form action='' method='get' id='formBusca' name='formBusca' className='mb-4'>
            <div className='my-2 d-flex'>
              <input type='text' className='form-control  me-2' id='txtBusca' name='textBusca' placeholder='Buscar aparelho...' required />
              <button className='btn btn-primary' onClick={searchOS}>Buscar</button>
            </div>
          </form>
          <h2 className='display-6'>Resultado da Busca</h2>
          <div className='table-responsive'>
            <table id='osCadastradas' className='table table-bordered table-hover'>
              <thead className='table-primary'>
                <tr>
                  <th>Código</th>
                  <th>Proprietário</th>
                  <th>Equipamento</th>
                  <th>Entrada</th>
                  <th>Defeito</th>
                  <th>Entrega</th>
                  <th>Status</th>
                  <th>Observações</th>
                  <th>Para atualiazações clique em:</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((body: SearchResult, index: number) => (
                  <tr key={index}>
                    <td>{body.id}</td>
                    <td>{body.proprietario}</td>
                    <td>{body.tipoEquipamento}</td>
                    <td>{body.entradaLab}</td>
                    <td>{body.defeito}</td>
                    <td>{body.previsaoEntrega}</td>
                    <td>{body.statusConcerto}</td>
                    <td>{body.observacoes}</td>
                    <td><a href='#' onClick={(event) => returnFormToAlter(event)}>Alterar</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </body>
    </main>
  )
}
