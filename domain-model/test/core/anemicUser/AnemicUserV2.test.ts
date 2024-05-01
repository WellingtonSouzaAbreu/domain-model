import AnemicUserV2 from "@/core/anemicUser/AnemicUserV2";

const validUser = () => new AnemicUserV2(1, "John", "fulano@zmail.com", "123456")

describe('Testes de usuário anêmico v2', () => {
    test('Deve permitir usuário sem nome', () => {
        const user = validUser()
        user.name = "";

        expect(user.name).toBe("");
    })

    test('Deve permitir usuário com nome undefined', () => {
        const user = validUser()
        user.name = undefined as any;

        expect(user.name).toBeUndefined();
    })

    test('Deve permitir usuário com id negativo', () => {
        const user = validUser()
        user.id = -8;

        expect(user.id).toBe(-8);
    })

    test('Deve permitir usuário com email inválido', () => {
        const user = validUser()
        user.email = '123';

        expect(user.email).toBe('123');
    })

    test('Deve permitir usuário com senha de 1 dígito', () => {
        const user = validUser()
        user.password = 'a';

        expect(user.password).toBe('a');
    })
})