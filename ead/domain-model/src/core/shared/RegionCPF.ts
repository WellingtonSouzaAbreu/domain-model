export class RegionCPF {
    static readonly AllRegions = [
        new RegionCPF(0, ['RS']),
        new RegionCPF(1, ['DF', 'GO', 'MS', 'MT', 'TO']),
        new RegionCPF(2, ['AC', 'AM', 'AP', 'PA', 'RO', 'RR']),
        new RegionCPF(3, ['CE', 'MA', 'PI']),
        new RegionCPF(4, ['AL', 'PB', 'PE', 'RN']),
        new RegionCPF(5, ['BA', 'SE']),
        new RegionCPF(6, ['MG']),
        new RegionCPF(7, ['ES', 'RJ']),
        new RegionCPF(8, ['SP']),
        new RegionCPF(9, ['PR', 'SC'])
    ]

    constructor(
        readonly code: number,
        readonly states: string[]
    ) {

    }

    static readonly RS = RegionCPF.AllRegions[0]
    static readonly DF_GO_MS_MT_TO = RegionCPF.AllRegions[1]
    static readonly AC_AM_AP_PA_RO_RR = RegionCPF.AllRegions[2]
    static readonly CE_MA_PI = RegionCPF.AllRegions[3]
    static readonly AL_PB_PE_RN = RegionCPF.AllRegions[4]
    static readonly BA_SE = RegionCPF.AllRegions[5]
    static readonly MG = RegionCPF.AllRegions[6]
    static readonly ES_RJ = RegionCPF.AllRegions[7]
    static readonly SP = RegionCPF.AllRegions[8]
    static readonly PR_SC = RegionCPF.AllRegions[9]

    static getByCode(code: number): RegionCPF {
        return RegionCPF.AllRegions[code]
    }

    static getByCpf(cpf: string): RegionCPF {
        const code = +cpf.replace(/\D/g, '')[8]
        return RegionCPF.AllRegions[code]
    }

    isEqual(region: RegionCPF): boolean {
        return this.code === region?.code
    }

    isDifferent(region: RegionCPF): boolean {
        return this.code !== region?.code
    }
}