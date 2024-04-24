import { sum } from "@/index"

test('Deve somar dois números', () => {
    const a = 2
    const b = 3
    const result = sum(a, b)
    expect(result).toBe(5)
})