import AnemicUserV1 from "@/core/anemicUser/AnemicUserV1";

const validUser: AnemicUserV1 = {
    id: 1,
    name: "John",
    email: "fulano@zmail.com",
    password: "123456",
}

describe('Testes de usuário anêmico v1', () => {
    test('Deve permitir usuário sem nome', () => {
        const user: AnemicUserV1 = { ...validUser, name: "" };
        expect(user.name).toBe("");
    })

    test('Deve permitir usuário com nome undefined', () => {
        const user: AnemicUserV1 = { ...validUser, name: undefined as any };
        expect(user.name).toBeUndefined();
    })

    test('Deve permitir usuário com id negativo', () => {
        const user: AnemicUserV1 = { ...validUser, id: -8 };
        expect(user.id).toBe(-8);
    })

    test('Deve permitir usuário com email inválido', () => {
        const user: AnemicUserV1 = { ...validUser, email: '123' };
        expect(user.email).toBe('123');
    })

    test('Deve permitir usuário com senha de 1 dígito', () => {
        const user: AnemicUserV1 = { ...validUser, password: 'a' };
        expect(user.password).toBe('a');
    })
})