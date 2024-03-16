local lsp_zero = require('lsp-zero')

lsp_zero.on_attach(function(client, bufnr)
  lsp_zero.default_keymaps({ buffer = bufnr })
  lsp_zero.buffer_autoformat()
end)

require("conform").setup({
  format_on_save = {
    -- These options will be passed to conform.format()
    timeout_ms = 500,
    lsp_fallback = true,
  },
})

local mason = require('mason')
mason.setup({})

local masonLSPConfig = require('mason-lspconfig')
masonLSPConfig.setup({
  -- Replace the language servers listed here
  -- with the ones you want to install
  ensure_installed = {
    'tsserver',
    'eslint',
    'rust_analyzer',
  },
  handlers = {
    lsp_zero.default_setup,
  },
  require('mason').setup({})
})

local cmp = require('cmp')
local cmp_action = lsp_zero.cmp_action()
cmp.setup({
  completion = {
    autocomplete = false
  },
  mapping = cmp.mapping.preset.insert({
    ['<C-Space>'] = cmp.mapping.complete(),
    ['<Tab>'] = cmp_action.luasnip_supertab(),
    ['<S-Tab>'] = cmp_action.luasnip_shift_supertab(),
    ['<CR>'] = cmp.mapping.confirm({ select = false }),
  })
})

require('telescope').load_extension('fzf')
