module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          }
        ]
      ],
    },
    styled: {
      plugins: [
        [
          'transform-rename-import', {
            original: '^sibbox$',
            replacement: 'sibbox/styled-components',
          }
        ]
      ]
    }
  }
}
