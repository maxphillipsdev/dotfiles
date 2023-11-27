local lsp = require('lsp-zero')

lsp.preset('recommended')
lsp.setup()

require('mason').setup({})
require('mason-lspconfig').setup({
				-- Replace the language servers listed here 
				-- with the ones you want to install
				ensure_installed = {
								'tsserver', 
								'eslint',
								'rust_analyzer',
				},
				handlers = {
								lsp.default_setup,
				},
  require('mason').setup({})
})
