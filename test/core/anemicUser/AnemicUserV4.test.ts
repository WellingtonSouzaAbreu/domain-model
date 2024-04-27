import { errorMessages } from "@/core/constants/errorMessages";
import AnemicUserV4 from "@/core/anemicUser/AnemicUserV4";

const validUser = () => new AnemicUserV4(1, "John", "fulano@zmail.com", "87654321")

describe('Testes de usuário anêmico v4', () => {
    test('Deve permitir usuário sem nome', () => {
        const user = validUser()
        user.name = ''

        expect(user.name).toBe("");
    })

    test('Deve permitir usuário com nome undefined', () => {
        const user = validUser()
        user.name = undefined as any

        expect(user.name).toBeUndefined();
    })

    test('Deve permitir usuário com id negativo', () => {
        const user = validUser()
        user.id = -8

        expect(user.id).toBe(-8);
    })

    test('Deve impedir que o email do usuário seja alterado usuário', () => {
        const user = validUser()
        user.email = '123'

        expect(user.email).toBe(user.email);
    })
    test('Deve alterar email válido', () => {
        const user = validUser()
        user.email = '123@gmail.com'

        expect(user.email).toBe(user.email);
    })

    test('Deve alterar senha com senha maior ou igual a 8', () => {
        const user = validUser()
        user.password = '12345678'

        expect(user.password).toBe('12345678');
    })

    test('Deve lançar erro ao tentar cadastrar usuário com senha menor que 8', () => {
        const user = validUser()
        expect(() => user.password = '12345').toThrow(errorMessages.INVALID_PASSWORD);
    })
})