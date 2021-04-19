# Deployment steps:
## Core:
- UniswapV2Factory.sol
- Token1.sol
- Token2.sol
## Periphery:
- WETH.sol
- UniswapV2Router02.sol

## Migrator:
- BonusToken.sol
- LiquidityMigrator.sol
# Core:

```bash
$ cd core
$ truffle migrate --reset --network bsctestnet


Starting migrations...
======================
> Network name:    'bsctestnet'
> Network id:      97
> Block gas limit: 30000000 (0x1c9c380)


2_deploy_contracts.js
=====================

   Deploying 'UniswapV2Factory'
   ----------------------------
   > transaction hash:    0x5ef2e1dfa3ca2c24a778873095e39be2487a9c8555b7774bb84555a873e1ee72
   > Blocks: 2            Seconds: 4
   > contract address:    0xD7E0141A9757Cf48b0DFa70588201C6Ed93ae475
   > block number:        8107962
   > block timestamp:     1618814059
   > account:             0x0734Ae19820f80487FB599F3899eb6932c52bC2A
   > balance:             6.16724596
   > gas used:            4137702 (0x3f22e6)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.08275404 ETH


   Deploying 'Token1'
   ------------------
   > transaction hash:    0x4ede418a7267eef2adcc6df7a52f23505a6f8e54d72500e3fcee3c27e7258792
   > Blocks: 2            Seconds: 4
   > contract address:    0x31e4ADD55733FD19CAb1AE3b6650aA8E0Dbbae83
   > block number:        8107965
   > block timestamp:     1618814068
   > account:             0x0734Ae19820f80487FB599F3899eb6932c52bC2A
   > balance:             6.1461717
   > gas used:            1053713 (0x101411)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02107426 ETH


   Deploying 'Token2'
   ------------------
   > transaction hash:    0x8795e5ceee8da8ab0800c86d17866fbf1d7c92eb5121d6f2ac060800d404f0e3
   > Blocks: 1            Seconds: 4
   > contract address:    0x1CEDeC3602f92936544B57d2C2fB33af6fD5D0e7
   > block number:        8107968
   > block timestamp:     1618814077
   > account:             0x0734Ae19820f80487FB599F3899eb6932c52bC2A
   > balance:             6.12509744
   > gas used:            1053713 (0x101411)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02107426 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.12490256 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.12490256 ETH

```

# Periphery:
