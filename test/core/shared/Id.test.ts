import { errorMessages } from "@/core/constants/errorMessages"
import { Id } from "@/core/shared/Id"

describe('Teste de Id.ts', () => {
    test('Deve criar um novo id válido', () => {
        const id = new Id()
        expect(id.value).toHaveLength(36)
        expect(id.new).toBeTruthy()

    })

    test('Deve gerar um novo ID diferente do instanciado', () => {
        const newId = new Id().value
        const idGenerated = Id.generate().value
        expect(newId !== idGenerated).toBeTruthy()
    })

    test('Deve lançar um erro ao tentar criar id inválido', () => {
        expect(() => new Id('123')).toThrow(errorMessages.INVALID_ID)
    })

    test('Deve retornar falta para um id de comparação undefined', () => {
        const id1 = new Id()
        expect(id1.isEqual()).toBe(false)
    })
    test('Deve retornar falta para um id de comparação undefined', () => {
        const id1 = new Id()
        expect(id1.isDifferent()).toBe(true)
    })

    test('Deve comparar dois IDs iguais', () => {
        const id1 = new Id()
        const id2 = new Id(id1.value)

        expect(id1.isEqual(id2)).toBe(true)
    })

    test('Deve comparar dois IDs diferentes', () => {
        const id1 = new Id()
        const id2 = new Id()

        expect(id1.isDifferent(id2)).toBe(true)
    })
})