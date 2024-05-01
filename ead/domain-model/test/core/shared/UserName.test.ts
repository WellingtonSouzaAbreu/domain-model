import { errorMessages } from "@/core/constants/errorMessages"
import { UserName } from "@/core/shared/UserName"

describe('Teste de UserName.ts', () => {
    test('Deve lançar um erro ao tentar criar nome vazio', () => {
        expect(() => new UserName('')).toThrow(errorMessages.EMPTY_NAME)
    })

    test('Deve lançar um erro ao tentar criar nome com menos de 3 caracteres', () => {
        expect(() => new UserName('123')).toThrow(errorMessages.SMALL_NAME)
    })

    test('Deve lançar um erro ao tentar criar nome com mais de 20 caracteres', () => {
        const largeName = 'Deve lançar um erro ao tentar criar nome muito grande Deve lançar um erro ao tentar criar nome muito grande Deve lançar um erro ao tentar criar nome muito grande Deve lançar um erro ao tentar criar nome muito grande Deve lançar um erro ao tentar criar nome muito grande'
        expect(() => new UserName(largeName)).toThrow(errorMessages.LARGE_NAME)
    })

    test('Deve lançar um erro ao tentar criar nome undefined', () => {
        expect(() => new UserName()).toThrow(errorMessages.SINGLE_NAME)
    })

    test('Deve lançar um erro ao tentar criar nome sem sobrenome', () => {
        expect(() => new UserName('Wellington')).toThrow(errorMessages.SINGLE_NAME)
    })

    test('Deve lançar um erro ao tentar criar nome com caracteres especiais', () => {
        expect(() => new UserName('Wellingt@n souza')).toThrow(errorMessages.NAME_INVALID_CHARACTERS)
    })

    test('Deve criar nome completo com sobrenomes', () => {
        const userName = new UserName('Wellington Souza Abreu')

        expect(userName.value).toBe('Wellington Souza Abreu')
        expect(userName.firstName).toBe('Wellington')
        expect(userName.lastName).toBe('Abreu')
    })
})