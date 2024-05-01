import { RegionCPF } from "@/core/shared/RegionCPF"

describe('Teste de RegionCPF.ts', () => {
    test('Deve criar uma RegionCPF por código', () => {
        const region = RegionCPF.getByCode(0)

        expect(region.code).toBe(0)
        expect(region.states[0]).toBe('RS')
    })

    test('Deve criar uma RegionCPF por CPF', () => {
        const region = RegionCPF.getByCpf('345.799.510-93')

        expect(region.code).toBe(0)
        expect(region.states[0]).toBe('RS')
    })

    test('Deve comparar regiões como iguais', () => {
        const regionA = RegionCPF.getByCpf('671.443.697-17')
        const regionB = RegionCPF.getByCpf('054.319.017-02')

        expect(regionA.isEqual(regionB)).toBe(true)
    })

    test('Deve comparar regiões como diferentes', () => {
        const regionA = RegionCPF.getByCpf('671.443.697-17')
        const regionB = RegionCPF.getByCpf('048.415.792-22')

        expect(regionA.isDifferent(regionB)).toBe(true)
    })

    test('Deve comparar regiões como undefined', () => {
        const region = RegionCPF.getByCpf('671.443.697-17')
        expect(region.isEqual(undefined as any)).toBe(false)
        expect(region.isDifferent(undefined as any)).toBe(true)
    })

    test('Deve criar uma RegionCPF de SP', () => {
        const region = RegionCPF.SP

        expect(region.code).toBe(8)
        expect(region.states[0]).toBe('SP')
    })

    test('Deve criar uma RegionCPF de CE_MA_PI', () => {
        const region = RegionCPF.CE_MA_PI

        expect(region.code).toBe(3)
        expect(region.states[0]).toBe('CE')
        expect(region.states[1]).toBe('MA')
        expect(region.states[2]).toBe('PI')
    })
})