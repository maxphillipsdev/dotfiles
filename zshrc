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
zplug "zsh-users/zsh-autosuggestions"
zplug "zsh-users/zsh-completions"

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
