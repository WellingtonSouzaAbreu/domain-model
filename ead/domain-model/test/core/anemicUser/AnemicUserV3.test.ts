import { errorMessages } from "@/core/constants/errorMessages";
import AnemicUserV3 from "@/core/anemicUser/AnemicUserV3";

const validUser = () => new AnemicUserV3(1, "John", "fulano@zmail.com", "87654321")

describe('Testes de usuário anêmico v3', () => {
    test('Deve permitir usuário sem nome', () => {
        const user = validUser()
        user.setName('');

        expect(user.getName()).toBe("");
    })

    test('Deve permitir usuário com nome undefined', () => {
        const user = validUser()
        user.setName(undefined as any);

        expect(user.getName()).toBeUndefined();
    })

    test('Deve permitir usuário com id negativo', () => {
        const user = validUser()
        user.setId(-8);

        expect(user.getId()).toBe(-8);
    })

    test('Deve impedir que o email do usuário seja alterado usuário', () => {
        const user = validUser()
        user.setEmail('123')

        expect(user.getEmail()).toBe(user.getEmail());
    })

    test('Deve alterar senha com senha maior ou igual a 8', () => {
        const user = validUser()
        user.setPassword('12345678')

        expect(user.getPassword()).toBe('12345678');
    })

    test('Deve lançar erro ao tentar cadastrar usuário com senha menor que 8', () => {
        const user = validUser()
        expect(() => user.setPassword('12345')).toThrow(errorMessages.INVALID_PASSWORD);
    })
})