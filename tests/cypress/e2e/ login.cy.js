import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('login', () => {

  context('com credenciais válidas', () => {
    it('deve logar com sucesso', () => {
      const user = {
        name: 'Fernando',
        instagram: '@papitorocks',
        password: 'pwd123'
      }
      loginPage.go()
      loginPage.form(user)
      loginPage.submit()

      mapPage.loggedUser(user.name)
    })
  })

  context('com senha incorreta', () => {
    it('deve notificar falha de credenciais', () => {
      const user = {
        instagram: '@papitorocksrj',
        password: '123456'
      }
      loginPage.go()
      loginPage.form(user)
      loginPage.submit()
      loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
    })
  })

  context('com instagram inexistente', () => {
    it('não deve logar com instagram inexistente', () => {
      const user = {
        instagram: '@papitorocks',
        password: '123456'
      }
      loginPage.go()
      loginPage.form(user)
      loginPage.submit()
      loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
    })
  })


  context('sem informar código do instagram', () => {
    it('instagram deve ser obrigatório', () => {
      const user = {
        password: "pwd123"
      }
      loginPage.go()
      loginPage.form(user)
      loginPage.submit()
      loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
    })
  })

  context('sem informar senha', () => {
    it('senha deve ser obrigatório', () => {
      const user = {
        instagram: "@papitorocks"
      }
      loginPage.go()
      loginPage.form(user)
      loginPage.submit()
      loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
    })
  })

  context('sem informar nenhum dos campos', () => {
    it('todos campos devem ser  obrigatórios', () => {
      loginPage.go()
      loginPage.submit()
      loginPage.modal.haveText('Por favor, informe suas credenciais!')
    })
  })
})