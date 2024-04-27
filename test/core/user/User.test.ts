import { v4 as uuid, validate } from 'uuid';

import { errorMessages } from "@/core/constants/errorMessages"
import { User } from "@/core/user/User"

test('Deve lançar erro ao tentar criar uma pessoa com nome vazio', () => {
    expect(() => new User({ name: '', cpf: '408.375.000-65' })).toThrow(errorMessages.EMPTY_NAME)
})

test('Deve criar um usuário válido', () => {
    const user = new User({ name: 'Fulano de tal', cpf: '408.375.000-60' })

    expect(user.id.new).toBeTruthy()
    expect(user.name.firstName).toBe('Fulano')
})

test('Deve clonar o usuário alterando tudo exceto o id', () => {
    const user = new User({ name: 'Fulano de tal', cpf: '408.375.000-60' })
    const userClone = user.clone({ name: 'Fulano de tal', cpf: '048.415.792-22' })

    expect(user.id.isEqual(userClone.id)).toBe(true)
    expect(userClone.name.value).toBe('Fulano de tal')
    expect(userClone.cpf.value).toBe('04841579222')
})

test('Deve clonar o usuário alterando somente o ID', () => {
    const user = new User({ name: 'Fulano de tal', cpf: '408.375.000-60' })
    const userClone = user.clone({ id: uuid() })

    expect(user.id.isDifferent(userClone.id)).toBe(true)
    expect(userClone.name.value).toBe('Fulano de tal')
    expect(userClone.cpf.value).toBe('40837500060')
})

test('Deve clonar o usuário não alterando nada', () => {
    const user = new User({ name: 'Fulano de tal', cpf: '408.375.000-60' })
    const userClone = user.clone({})

    expect(userClone.name.value).toBe('Fulano de tal')
    expect(userClone.cpf.value).toBe('40837500060')
})