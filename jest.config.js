module.exports = {
    preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ["**/test/*.test.ts"],
	collectCoverage: false, // Deixar true para visualizar % de cobertura de testes
	moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" }
}