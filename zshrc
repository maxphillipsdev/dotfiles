# source zplug
export ZPLUG_HOME=/usr/local/opt/zplug
source $ZPLUG_HOME/init.zsh

# zplug plugins
# Supports oh-my-zsh plugins and the like
zplug "plugins/git",   from:oh-my-zsh
zplug "spaceship-prompt/spaceship-prompt", use:spaceship.zsh, from:github, as:theme
zplug "joshskidmore/zsh-fzf-history-search", from:github

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

# fh - repeat history
fh() {
  print -z $( ([ -n "$ZSH_NAME" ] && fc -l 1 || history) | fzf +s --tac | sed -E 's/ *[0-9]*\*? *//' | sed -E 's/\\/\\\\/g')
}

# source asdf version manager
. /opt/homebrew/opt/asdf/libexec/asdf.sh

# hook in direnv
eval "$(direnv hook zsh)"

# pnpm
export PNPM_HOME="/Users/max/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"
# pnpm end

# configure fzf for ctrl-r history search
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
