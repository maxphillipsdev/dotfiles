# source zplug
export ZPLUG_HOME=$HOMEBREW_PREFIX/opt/zplug
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
. $HOMEBREW_PREFIX/opt/asdf/libexec/asdf.sh

# hook in direnv
eval "$(direnv hook zsh)"

# pnpm
export PNPM_HOME="/Users/max/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"
# pnpm end

# Add lunarvim to PATH
export PATH=/Users/max.phillips/.local/bin:$PATH
