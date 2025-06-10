# shell.nix
{ pkgs ? import <nixpkgs> {} }:

  let libPath = pkgs.lib.makeLibraryPath [
    pkgs.nodejs_20
    pkgs.xorg.libX11
  ];

in
pkgs.mkShell {
  buildInputs = with pkgs; [
    curl
    git

#    nodejs
#    nodePackages.node-gyp

    xorg.libX11
    xorg.libXtst
    xorg.libXi
    libpng
    zlib

    gcc
    pkg-config

    (python3.withPackages (ps: with ps; [
      distutils
    ]))


  ];

  # Установка npm пакетов
  shellHook = ''
#    export NVM_DIR=$HOME/.nvm
#    if [ ! -d "$NVM_DIR" ]; then
#      echo "nvm установка"
#      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
#    fi
#    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
#    nvm install 16
#    nvm use 16

#    CURRENT_DIR=$PWD

#    export NPM_CONFIG_PREFIX=$CURRENT_DIR/.npm-global
#    export PATH=$NPM_CONFIG_PREFIX/bin:$PATH
#    export NODE_PATH=$NPM_CONFIG_PREFIX/lib/node_modules

    export LD_LIBRARY_PATH=${libPath}:$LD_LIBRARY_PATH

#    export npm_config_node_gyp=${pkgs.node-gyp}/bin/node-gyp

#    npm install --global node-gyp
#    npx node-gyp configure
#    node-gyp install

#    NODE_LIB=$HOME/.nvm/versions/node/v16.20.2/include/node
#    export CPLUS_INCLUDE_PATH="$NODE_LIB:$CPLUS_INCLUDE_PATH"
#    export C_INCLUDE_PATH="$NODE_LIB:$C_INCLUDE_PATH"

    if [ ! -d "./node_modules" ];
    then
        echo "node_modules отсутствуют"
        npm ci
    else
        echo "node_modules уже установлены"
    fi

    echo ${libPath}

    npm run start:development;
#     exit;

  '';
}
