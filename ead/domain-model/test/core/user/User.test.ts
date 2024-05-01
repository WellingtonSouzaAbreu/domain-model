import { v4 as uuid, validate } from 'uuid';

import { errorMessages } from "@/core/constants/errorMessages"
import { User } from "@/core/user/User"
import { UserBuilder } from '@/test/data/UserBuilder';

test('Deve lançar erro ao tentar criar uma pessoa com nome vazio', () => {
    expect(() => UserBuilder.create().withCpf('408.375.000-65').withName('').build()).toThrow(errorMessages.EMPTY_NAME)
})

test('Deve criar um usuário válido', () => {
    const user = UserBuilder.create()
        .withName('Fulano ciclano')
        .withoutId()
        .build()

    expect(user.id.new).toBeTruthy()
    expect(user.name.firstName).toBe('Fulano')
})

test('Deve clonar o usuário alterando tudo exceto o id', () => {
    const user = UserBuilder.create()
        .withName('Fulano de tal')
        .withCpf('408.375.000-60')
        .withoutId()
        .build()

    const userClone = user.clone({ name: 'Outro user', cpf: '048.415.792-22' })

    expect(user.id.isEqual(userClone.id)).toBe(true)
    expect(userClone.name.value).toBe('Outro user')
    expect(userClone.cpf.value).toBe('04841579222')
})

test('Deve clonar o usuário alterando somente o ID', () => {
    const user = UserBuilder.create()
        .withName('Fulano de tal')
        .withCpf('408.375.000-60')
        .build()

    const userClone = user.clone({ id: uuid() })

    expect(user.id.isDifferent(userClone.id)).toBe(true)
    expect(userClone.name.value).toBe('Fulano de tal')
    expect(userClone.cpf.value).toBe('40837500060')
})

test('Deve clonar o usuário não alterando nada', () => {
    const user = UserBuilder.create()
        .withName('Fulano de tal')
        .withCpf('408.375.000-60')
        .build()
    const userClone = user.clone({})

    expect(userClone.name.value).toBe('Fulano de tal')
    expect(userClone.cpf.value).toBe('40837500060')
})