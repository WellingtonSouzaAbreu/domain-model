import { errorMessages } from "@/core/constants/errorMessages"
import { CPF } from "@/core/shared/CPF"

describe('Teste de CPF.ts', () => {
    test('Deve criar corretamente quando o cpf for válido', () => {
        const cpf = new CPF('712.960.820-08')

        expect(cpf.value).toBe('71296082008')
        expect(CPF.validateCPF('408.375.000-60')).toBe(true)
        expect(CPF.validateCPF('394.534.490-59')).toBe(true)
        expect(CPF.validateCPF('000.411.730-15')).toBe(true)
        expect(CPF.validateCPF('501.530.390-43')).toBe(true)
    })

    test('Deve lançar erro quando o cpf for vazio', () => {
        expect(() => new CPF('')).toThrow(errorMessages.EMPTY_VALUE)
    })

    test('Deve lançar erro quando o cpf for vazio', () => {
        expect(() => new CPF(null as any)).toThrow(errorMessages.NULL_VALUE)
    })

    test('Deve lançar erro quando o cpf for inválido', () => {
        expect(() => new CPF('048.415.792-11')).toThrow(errorMessages.INVALID_CPF)
        expect(() => new CPF('048.415.792-2')).toThrow(errorMessages.INVALID_CPF)
        expect(() => new CPF('123.456.789-00')).toThrow(errorMessages.INVALID_CPF)
        expect(() => new CPF('123.456.789-01')).toThrow(errorMessages.INVALID_CPF)
    })

    test('Deve retornar o CPF formadado', () => {
        const cpf = new CPF('71296082008')
        expect(cpf.formated()).toBe('712.960.820-08')
    })
})