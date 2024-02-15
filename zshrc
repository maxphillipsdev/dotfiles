eval "$(/opt/homebrew/bin/brew shellenv)"

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
zplug "joshskidmore/zsh-fzf-history-search", from:github
zplug "zsh-users/zsh-syntax-highlighting"
zplug "plugins/git", from:oh-my-zsh

# Setup starship (speedy prompt written in rust)
eval "$(starship init zsh)"

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
alias vim=nvim

# enable autocd
setopt autocd 

# hook in direnv
eval "$(direnv hook zsh)"
export PATH="/usr/local/sbin:$PATH"
export PATH=$PATH:/Users/max.phillips/.spicetify

# Android SDK
export ANDROID_HOME=$HOME/Library/Android/sdk

export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

# VSCode insiders
alias codi=code-insiders

# RTX CLI
eval "$($(brew --prefix)/bin/mise activate zsh)"

# bun completions
[ -s "/opt/homebrew/Cellar/bun/1.0.0/share/zsh/site-functions/_bun" ] && source "/opt/homebrew/Cellar/bun/1.0.0/share/zsh/site-functions/_bun"
