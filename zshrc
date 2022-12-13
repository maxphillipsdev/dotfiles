# source zplug
export ZPLUG_HOME=/opt/homebrew/opt/zplug
source $ZPLUG_HOME/init.zsh

# zplug plugins
# Supports oh-my-zsh plugins and the like
zplug "plugins/git",   from:oh-my-zsh
zplug "spaceship-prompt/spaceship-prompt", use:spaceship.zsh, from:github, as:theme

# Install plugins if there are plugins that have not been installed
if ! zplug check --verbose; then
    printf "Install? [y/N]: "
    if read -q; then
        echo; zplug install
    fi
fi

zplug load

# nvim alias
alias vim=nvim

# enable autocd
setopt autocd 

# source asdf version manager
. /opt/homebrew/opt/asdf/libexec/asdf.sh

# hook in direnv
eval "$(direnv hook zsh)"

# pnpm
export PNPM_HOME="/Users/max/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"
# pnpm end
