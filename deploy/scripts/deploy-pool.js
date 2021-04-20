const Factory = artifacts.require('UniswapV2Factory');
const Router = artifacts.require('UniswapV2Router02');
const Pair = artifacts.require('UniswapV2Pair');
const Token1 = artifacts.require('Token1');
const Token2 = artifacts.require('Token2');
module.exports = async function (deployer, network) {
    const factoryAddress = '0xef21b3754fa928b4B251EE4B12C7e4D32B710C1C';
    const token1Address = '0xb1Ff5817dd522b70b13e4A12C5F3BBD1638a9003';
    const token2Address = '0xa2f925EdFBdFa92a546382cEE4f5B8dde0d3Db01';
    const routerAddress = '0x32db9F71B32D43Cfd17058Bd11cf9aC3c52661B3';
    try {
        const [admin, _] = await web3.eth.getAccounts();
        const factory = await Factory.at(factoryAddress);
        console.log("%c 👻: factory ", factory.address);
        const router = await Router.at(routerAddress);
        console.log("%c 👓: router ", router.address);
        const token1 = await Token1.at(token1Address);
        const token2 = await Token2.at(token2Address);

        console.log("%c 📵: token1.address ", token1.address)
        console.log("%c ⛹️‍♂️: token2.address ", token2.address)

        const pairAddress = await factory.getPair.call(token1.address, token2.address);
        console.log("%c 🌤️: pairAddress ", pairAddress);

        // const token1Amount = web3.utils.toHex(1*10**18);
        // const token2Amount  = web3.utils.toHex(15*10**18);
        const token1Amount = await web3.utils.toWei('10', 'ether');
        const token2Amount = await web3.utils.toWei('20', 'ether');
        await token1.approve(router.address, token1Amount);
        await token2.approve(router.address, token2Amount);
        await router.addLiquidity(
            token1.address,
            token2.address,
            token1Amount,
            token2Amount,
            token1Amount,
            token2Amount,
            admin,
            Math.floor(Date.now() / 1000) + 60 * 10
        );
        const pair = await Pair.at(pairAddress);
        const balance = await pair.balanceOf(admin);
        console.log(`balance LP: ${balance.toString()}`);
    } catch (e) {
        console.log(e);
    }
};