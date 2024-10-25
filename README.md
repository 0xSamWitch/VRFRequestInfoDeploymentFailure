### Sonic testnet gas estimation deployment issue

When deploying normally it reverts if there is an issue, but it seems like the gas estimation is off. The deployment transaction is sent without using enough gas

To start copy the .env.sample file to .env and fill in PRIVATE_KEY, starts with 0x

```
yarn install
yarn deploy --network sonic_testnet
```
