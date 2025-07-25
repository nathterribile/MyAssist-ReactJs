import { useState } from 'react'
import { Navbar, NavDropdown, Nav, Modal, Button, Container, Form, Toast } from 'react-bootstrap'
import assist from '../../assets/images/Assist.png'
import computacao from '../../assets/images/Computação.jpg'
import eletrodomesticos from '../../assets/images/Eletrodomesticos.jpg'
import eletronico from '../../assets/images/eletronico.jpg'
import { useNavigate } from 'react-router-dom'
import type { NavbarCollapseProps } from 'react-bootstrap'

export function Home () {
  const MyNavCollapse = (props: NavbarCollapseProps) => (
    <Navbar.Collapse className='align-itens-end d-flex' id='responsive-navbar-nav' role='navigation' {...(props)} />
  )
  const [loginMShow, setLMShow] = useState(false)
  const [user, setUser] = useState('')
  const inputUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value.toString())
  }
  const [password, setPassword] = useState('')
  const inputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const [toast400LShow, set400TLShow] = useState(false)
  const [toast500LShow, set500TLShow] = useState(false)
  const handleLogin = () => {
    console.log(user)
    fetch('https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net//usuario/login?usuario=' + user + '&senha=' + password, {
      method: 'POST'
    })
      .then(
        (response) => {
          if (response.ok) {
            localStorage.setItem('isAuthenticated', 'true')

            navigate('/admin')
          }
          return Promise.reject(response)
        })
      .catch((response) => {
        if (response.status === 400) {
          set400TLShow(true)
        } else {
          set500TLShow(true)
        }

        setUser('')
        setPassword('')
      })
  }
  const handleSchedule = () => {
    navigate('/schedule')
  }
  const [attentionMShow, setAMShow] = useState(false)
  const navigate = useNavigate()

  return (
    <main>
      <Navbar className='navbar navbar-dark bg-primary p-5 mb-5 '>
        <Container>
          <div className='navbar-brand icon-logo text-white'><i className='bi bi-motherboard' /> MyAssist</div>
          <Navbar.Toggle aria-controls='responsive-navbar-nav '/>
          <MyNavCollapse/>
            <Nav className="ms-auto navbar-nav">
              <NavDropdown title='Serviços' id='collapsible-nav-dropdown'>
                <NavDropdown.Item href=''><strong>Computadores</strong></NavDropdown.Item>
                <NavDropdown.Item href=''><strong>Eletrodomésticos</strong></NavDropdown.Item>
                <NavDropdown.Item href=''><strong>Eletrônicos</strong></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => setLMShow(true)}>Login</Nav.Link>
              <Modal show={loginMShow}>
                <Modal.Header closeButton onClick={() => setLMShow(false)}>
                  <Modal.Title>Área de login - Funcionários</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                      <Form.Label>Usuário</Form.Label>
                      <Form.Control type='text' placeholder='Ex: user123456' autoFocus onChange={inputUserChange} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                      <Form.Label>Senha</Form.Label>
                      <Form.Control type='password' placeholder='Ex: suasenha123456' autoFocus onChange={inputPasswordChange} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='primary' onClick={handleLogin}>Acessar</Button>
                </Modal.Footer>
                <Toast show={toast400LShow} className='toast align-items-center text-white bg-danger w-50' role='alert' aria-live='assertive' aria-atomic='true' id='toast400Logar'>
                  <div className='d-flex' data-bs-theme='dark'>
                    <p className='my-auto ms-2 p-2'>Usuário ou senha incorreto!</p>
                    <button type='button' className='btn-close btn-white me-2 m-auto' data-bs-dismiss='toast' aria-label='Close' />
                  </div>
                </Toast>
                <Toast show={toast500LShow} className='toast align-items-center text-white bg-danger w-50' role='alert' aria-live='assertive' aria-atomic='true' id='toast500Logar'>
                  <div className='d-flex' data-bs-theme='dark'>
                    <p className='my-auto ms-2 p-2'>Serviço indisponivel!</p>
                    <button type='button' className='btn-close btn-white me-2 m-auto' data-bs-dismiss='toast' aria-label='Close' />
                  </div>
                </Toast>
              </Modal>
            </Nav>
        </Container>
      </Navbar>
      <body className='container px-3 mb-5'>
        <div className='row border border-2 rounded d-flex align-itens-center justify-content-center'>
          <div className='col-md-6 text-center'>
            <h2 className='display-6 my-3'>A melhor assistência técnica de São Paulo</h2>
            <p className='lead my-4 w-75 mx-auto'>Oferecemos assistência técnica especializada, com reparo com uso de peças originais e garantia de serviço. Contamos com profissionais qualificados e constantemente treinados.</p>
            <p className='lead my-4 w-75 mx-auto'>Evite filas e faça um pré-agendamento antes de deslocar-se ao Centro de Serviço para realizar a Assistência Técnica de seu smartphone, tablet ou notebook.</p>
            <Button className='btn btn-primary my-5' data-bs-toggle='modal' onClick={() => setAMShow(true)}>Mais informações aqui</Button>
            <Modal show={attentionMShow}>
              <div className='lg'>
                <div className='modal-header'>
                  <h1 className='modal-title fs-5' id='preAgendamentoModalLabel'>ATENÇÃO</h1>
                  <Button id='fecharModalAgendamento' type='button' className='btn-close' onClick={() => setAMShow(false)} aria-label='Close' />
                </div>
                <div className='modal-body'>
                  <p className='lead my-4 w-75 mx-auto'>Pré-agendamento somente para smartphone, tablets e notebooks.</p>
                  <div className='modal-footer justify-content-end'>
                    <Button type='button' className='btn btn-primary' onClick={handleSchedule}>Agendar</Button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <figure className='col-md-6 text-center'>
            <img src={assist} alt='Ilustração da Assistência técnica' className='img-fluid' />
          </figure>
        </div>
        <h2 className='my-4 display-6'>Serviços</h2>
        <div className='row'>
          <div className='col-md-6 col-lg-4 my-2'>
            <div className='card'>
              <img src={computacao} className='card-img-top' alt='...' />
              <a href='#' className='btn btn-primary'>Computadores</a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 my-2'>
            <div className='card'>
              <img src={eletrodomesticos} className='card-img-top' alt='...' />
              <a href='#' className='btn btn-primary'>Eletrodomésticos</a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 my-2'>
            <div className='card'>
              <img src={eletronico} className='card-img-top' alt='...' />
              <a href='#' className='btn btn-primary'>Eletrônicos</a>
            </div>
          </div>
        </div>
      </body>
    </main>
  )
}
