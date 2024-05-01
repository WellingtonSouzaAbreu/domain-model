import { Validator } from "@/core/utils/Validator"
import exp from "constants"

describe('Teste de Validator', () => {

    test('Deve combinar os erros', () => {
        const errors = Validator.stackErros(
            Validator.notEmpty('', 'erro1'),
            Validator.notEmpty('', 'erro2'),
            Validator.notEmpty('teste', 'erro1')
        )

        expect(errors?.join(', ')).toBe('erro1, erro2')
    })

    test('Deve retornar null quando não houver erros', () => {
        const errors = Validator.stackErros(
            Validator.notEmpty('teste', 'erro1'),
            Validator.notEmpty('teste', 'erro2'),
            Validator.notEmpty('teste', 'erro1')
        )

        expect(errors).toBeNull()
    })

    test('Deve retornar null com texto não nulo', () => {
        const error = Validator.notNull('Bom dia', 'Texto inválido')
        expect(error).toBeNull()
    })

    test('Deve retornar mensagem de erro com valor nulo', () => {
        const errorMessage = 'Texto inválido'
        const error = Validator.notNull(null, errorMessage)
        expect(error).toBe(errorMessage)
    })
    test('Deve retornar null com texto não vazio', () => {
        const error = Validator.notEmpty('Bom dia', 'Texto vazio')
        expect(error).toBeNull()
    })

    test('Deve retornar mensagem de erro com valor vazio', () => {
        const errorMessage = 'Texto vazio'
        const error = Validator.notEmpty('   ', errorMessage)
        expect(error).toBe(errorMessage)
    })

    test('Deve retornar mensagem de erro com valor null', () => {
        const errorMessage = 'Texto vazio'
        const error = Validator.notEmpty(null as any, errorMessage)
        expect(error).toBe(errorMessage)
    })

    test('Deve retornar null com texto maior que 10', () => {
        const error = Validator.sizeSmallerThan('Bom dia dia dia', 10, 'Texto muito grande')
        expect(error).toBeNull()
    })

    test('Deve retornar mensagem de erro com texto menor que 10', () => {
        const errorMessage = 'Texto muito grande'
        const error = Validator.sizeSmallerThan('Bom dia', 10, errorMessage)

        expect(error).toBe(errorMessage)
    })

    test('Deve retornar retornar null com array maior que 10', () => {
        const errorMessage = 'Array muito grande'
        const error = Validator.sizeSmallerThan([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10, errorMessage)

        expect(error).toBeNull()
    })

    test('Deve retornar mensagem de erro com array menos que 10', () => {
        const errorMessage = 'Array muito grande'
        const error = Validator.sizeSmallerThan([1, 2, 3], 10, errorMessage)

        expect(error).toBe(errorMessage)
    })

    test('Deve retornar mensagem de erro com valor null', () => {
        const errorMessage = 'Valor inválido'
        const error = Validator.sizeSmallerThan(null as any, 10, errorMessage)

        expect(error).toBe(errorMessage)
    })

    test('Deve retornar mensagem de erro com valor null', () => {
        const errorMessage = 'Valor inválido'
        const error = Validator.sizeBigThan(null as any, 10, errorMessage)

        expect(error).toBe(errorMessage)
    })

    test('Deve retornar mensagem de erro quando regex não dá match', () => {
        const errorMessage = 'Nada de regex encontrado'
        const error = Validator.regex('teste', /ue/, errorMessage)

        expect(error).toBe(errorMessage)
    })

    test('Deve retornar mensagem de erro quando passado valor null para regex', () => {
        const errorMessage = 'Valor inválido'
        const error = Validator.regex(null as any, /ue/, errorMessage)

        expect(error).toBe(errorMessage)
    })
})