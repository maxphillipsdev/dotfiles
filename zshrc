############################################
# Setup env vars
#
# pnpm
export PNPM_HOME="/Users/max/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"
# pnpm end

# .local
export PATH=$HOME/.local/bin:$PATH

# zplug
export ZPLUG_HOME=$(brew --prefix)/opt/zplug

############################################
# Source stuff
#
# zplug
source $ZPLUG_HOME/init.zsh

# zplug plugins
# Supports oh-my-zsh plugins and the like
zplug "plugins/git",   from:oh-my-zsh
zplug "spaceship-prompt/spaceship-prompt", use:spaceship.zsh, from:github, as:theme
zplug "joshskidmore/zsh-fzf-history-search", from:github
zplug "zsh-users/zsh-syntax-highlighting"
zplug "birdhackor/zsh-exa-ls-plugin"

# Install plugins if there are plugins that have not been installed
if ! zplug check --verbose; then
    printf "Install? [y/N]: "
    if read -q; then
        echo; zplug install
    fi
fi

# load zplug
zplug load

# nvim alias
alias vim=lvim

# enable autocd
setopt autocd 

# source asdf version manager
. $(brew --prefix)/opt/asdf/libexec/asdf.sh

# hook in direnv
eval "$(direnv hook zsh)"
export PATH="/usr/local/sbin:$PATH"
export PATH=$PATH:/Users/max.phillips/.spicetify

# fzf catppuccin theme
export FZF_DEFAULT_OPTS=" \
--color=bg+:#363a4f,bg:#24273a,spinner:#f4dbd6,hl:#ed8796 \
--color=fg:#cad3f5,header:#ed8796,info:#c6a0f6,pointer:#f4dbd6 \
--color=marker:#f4dbd6,fg+:#cad3f5,prompt:#c6a0f6,hl+:#ed8796"
