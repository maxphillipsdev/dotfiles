
vim.g.mapleader = " "
vim.keymap.set("n", "<leader>pv", vim.cmd.Ex)

vim.keymap.set("n", "<C-p>", require('telescope.builtin').git_files, {})
vim.keymap.set("n", "<leader>ps", function()
				require('telescope.builtin').grep_string({ search = vim.fn.input("Grep > ") });
end)
