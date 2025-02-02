/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

// const esModules = ['axios'].join('|');

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  globals: {
    'ts-jest': {
      tsconfig: './configs/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.test.[jt]sx?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
