import { Entity, EntityProps } from "@/core/shared/Entity"
import { Id } from "@/core/shared/Id"

interface TesteProps extends EntityProps {
    name?: string
    age?: number
}

class Teste extends Entity<Teste, TesteProps> {
    name: string
    age: number

    constructor(props: TesteProps) {
        super(props)
        this.name = props.name ?? ''
        this.age = props.age ?? 0
    }
}

describe('Teste de Entidade.ts', () => {
    test('Deve comparar duas entidades diferentes', () => {
        const entity1 = new Teste({ name: 'Teste', age: 12 })
        const entity2 = new Teste({ name: 'Teste', age: 12 })
        expect(entity1.isEqual(entity2)).toBe(false)
        expect(entity1.isDifferent(entity2)).toBe(true)
    })

    test('Deve comparar duas entidades apenas com IDs iguais', () => {
        const mockId = Id.generate().value
        const entity1 = new Teste({ id: mockId, name: 'Teste123', age: 50 })
        const entity2 = new Teste({ id: mockId, name: 'Teste321', age: 25 })

        expect(entity1.isEqual(entity2)).toBe(true)
        expect(entity1.isDifferent(entity2)).toBe(false)
    })

    test('Deve comparar duas entidades com undefined ou null', () => {
        const entity = new Teste({ name: 'Teste123', age: 50 })

        expect(entity.isEqual(undefined as any)).toBe(false)
        expect(entity.isEqual(null as any)).toBe(false)
        expect(entity.isDifferent(undefined as any)).toBe(true)
        expect(entity.isDifferent(null as any)).toBe(true)
    })

    test('Deve clonar uma entidade com nome diferente', () => {
        const el = new Teste({ name: 'Maria', age: 55 })
        const e2 = el.clone({ name: 'Maria aparecida' })

        expect(e2.age).toBe(55)
        expect(e2.name).toBe('Maria aparecida')
        expect(e2.id.value).toBe(el.id.value)
    })
})