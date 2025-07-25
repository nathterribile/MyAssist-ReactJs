import { useState } from 'react'
import { Toast, Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export function Schedule () {
  const backToHome = () => {
    navigate('/')
  }

  const [owner, setOwner] = useState('')

  const inputOwner = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwner(e.target.value)
  }

    type DeviceTypes = 'notebook' | 'tablet' | 'smartphone';
    type Brands = 'Apple' | 'Samsung' | 'Lenovo' | 'Motorola';
    const devices = {
      notebook: { Apple: ['Macbook Air', 'Macbook Pro'], Samsung: ['Galaxy Book 2', 'Galaxy Book 4', 'Galaxy Book Go'] },
      tablet: { Apple: ['iPad 9th', 'iPad 10th', 'iPad Pro 13'], Samsung: ['A9', 'S6 Light', 'S9'], Lenovo: ['M9', 'P12'] },
      smartphone: { Apple: ['Iphone SE', 'Iphone 12', 'Iphone 13', 'Iphone 14'], Samsung: ['Galaxy S8', 'Galaxy A51'], Motorola: ['Moto G54', 'Moto E22'] }
    }
    const [device, setDevice] = useState<DeviceTypes | ''>('')
    const [brand, setBrand] = useState<string[]>([])
    const [selectedBrand, setSelectedBrand] = useState<Brands | ''>('')
    const [model, setModel] = useState<string[]>([])
    const [selectedModel, setSelectedModel] = useState<string>('')

    const selectDeviceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedDevice = e.target.value as DeviceTypes
      setDevice(selectedDevice)
      setBrand(Object.keys(devices[selectedDevice] || {}))
      const selectedBrand = Object.keys(devices[selectedDevice])[0] as Brands
      setSelectedBrand(selectedBrand)
      const selectedModel = devices[selectedDevice][selectedBrand] || []
      setModel(selectedModel)
    }

    const selectBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedBrand = e.target.value as Brands
      setSelectedBrand(selectedBrand)
      setModel(devices[device as DeviceTypes]?.[selectedBrand] || [])
    }

    const selectModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedModel(e.target.value)
    }

    const InputBrands = () => {
      return (
        <>
          {
                brand.map((item: string) => (<option key={item} value={item}>{item}</option>))
            }
        </>
      )
    }

    const InputModels = () => {
      return (
        <>
          {
                model.map((item: string) => (<option key={item} value={item}>{item}</option>))
                }
        </>
      )
    }

    const [date, setDate] = useState('')

    const inputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDate(e.target.value)
    }

    const [problem, setProblem] = useState('')

    const inputProblem = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setProblem(e.target.value)
    }

    const form = {
      proprietario: owner,
      tipoEquipamento: device,
      entradaLab: date,
      defeito: problem,
      statusConcerto: 'agendamento'

    }

    const [id, setId] = useState('')
    const [scheduleMShow, setSMShow] = useState(false)
    const [toast400SShow, set400TSShow] = useState(false)
    const [toast500SShow, set500TSShow] = useState(false)

    const agendar = async () => {
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
        setId('Numero de agendamento: ' + body.id)
        setSMShow(true)
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.status === 400) {
          set400TSShow(true)
          setTimeout(() => set400TSShow(false), 3000)
        } else {
          set500TSShow(true)
          setTimeout(() => set500TSShow(false), 3000)
        }
      }
    }

    const navigate = useNavigate()

    const closeModalSchedule = () => {
      navigate('/')
    }

    return (
      <main>
        <header className='bg-primary p-5 mb-5 text-light d-flex justify-content-between'>
          <div>
            <h3><i className='bi bi-motherboard me-1' />MyAssist</h3>
            <h5><i className='text-right me-1' />Pré-agendamento</h5>
          </div>
          <h4><a className='text-light' href="" onClick={backToHome}>Voltar</a></h4>
        </header>
        <body className='container my-4'>
          <section className='border rounded p-4 my-5'>
            <h2>Informações necessárias</h2>
            <form id='dados' name='dados' method='get' action=''>
              <div className='row mb-3'>
                <div className='col-md-4 my-3'>
                  <label htmlFor='proprietario' className='form-label'>Proprietário</label>
                  <input onChange={inputOwner} type='text' className='form-control' id='proprietario' name='proprietario' required />
                </div>
                <div className='col-md-4 my-3'>
                  <label htmlFor='equipamento' className='form-label'>Tipo de equipamento</label>
                  <select onChange={selectDeviceChange} name='equipamento' id='equipamento' className='form-select' required>
                    <option value='0' disabled selected>Selecione o equipamento</option>
                    <option value='smartphone'>smartphone</option>
                    <option value='tablet'>tablet</option>
                    <option value='notebook'>notebook</option>
                  </select>
                </div>
                <div className='col-md-4 my-3'>
                  <label htmlFor='marca' className='form-label'>Marca</label>
                  <select onChange={selectBrandChange} name='marca' id='marca' className='form-select' value={selectedBrand} required>
                    <option value='' disabled selected>Selecione a marca</option>
                    <InputBrands />
                  </select>
                </div>
                <div className='col-md-4 my-3'>
                  <label htmlFor='modelo' className='form-label'>Modelo</label>
                  <select onChange={selectModelChange} name='modelo' id='modelo' className='form-select' value={selectedModel} required>
                    <option value='0' disabled selected>Selecione o modelo</option>
                    <InputModels />
                  </select>
                </div>
                <div className='col-md-4 my-3'>
                  <label htmlFor='dataAgendamento' className='form-label'>Data desejada</label>
                  <input onChange={inputDate} type='date' className='form-control' id='dataAgendamento' name='dataAgendamento' required />
                </div>
                <div className='col-12- my-3'>
                  <label htmlFor='defeito' className='form-label'>Defeito</label>
                  <textarea onChange={inputProblem} name='defeito' id='defeito' className='form-control' placeholder='Ex:O defeito apresentado...' required />
                </div>
                <div className='d-flex justify-content-end mt-2 mb-3'>
                  <button className='btn btn-primary' type='button' onClick={agendar}>Agendar</button>
                </div>
                <Modal show={scheduleMShow}>
                  <div className='lg'>
                    <div className='modal-header'>
                      <h1 className='modal-title fs-5' id='preAgendamentoModalLabel'>Ordem de serviço!</h1>
                      <Button id='fecharModalAgendamento' type='button' className='btn-close' onClick={closeModalSchedule} aria-label='Close' />
                    </div>
                    <div className='modal-body'>
                      <p id='dataAgendada' className='my-auto ms-2 p-2'>{id}</p>
                    </div>
                  </div>
                </Modal>
                <Toast show={toast400SShow} className='toast align-items-center text-white bg-danger w-50' role='alert' aria-live='assertive' aria-atomic='true' id='toast400Cadastrar'>
                  <div className='d-flex' data-bs-theme='dark'>
                    <p className='my-auto ms-2 p-2'>Usuário ou senha incorreto!</p>
                    <button type='button' className='btn-close btn-white me-2 m-auto' data-bs-dismiss='toast' aria-label='Close' />
                  </div>
                </Toast>
                <Toast show={toast500SShow} className='toast align-items-center text-white bg-danger w-50' role='alert' aria-live='assertive' aria-atomic='true' id='toast500Cadastrar'>
                  <div className='d-flex' data-bs-theme='dark'>
                    <p className='my-auto ms-2 p-2'>Serviço indisponivel!</p>
                    <button type='button' className='btn-close btn-white me-2 m-auto' data-bs-dismiss='toast' aria-label='Close' />
                  </div>
                </Toast>
              </div>
            </form>
          </section>
        </body>
      </main>
    )
}
