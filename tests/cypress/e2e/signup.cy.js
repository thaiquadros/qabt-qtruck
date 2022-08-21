import signupPage from '../support/pages/Signup'

describe('Signup', () => {
    context('quando é um novo usuário', () => {
        it('deve cadastrar um novo usuário', () => {
            
            // Dado que eu tenha o koi targaryen
            const user = {
                name: 'Becca Milano',
                instagram: '@becca_milano',
                password: 'pwd123'
            }

            // e que este usuário não exista no banco
            cy.deleteMany({ instagram: user.instagram }, {collection: 'users'}).then(res => {
                cy.log(res)
            });

            // quando faço o cadastro do mesmo
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()

            // Então devo ver a mensagem de sucesso
            signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
        })
    })
})