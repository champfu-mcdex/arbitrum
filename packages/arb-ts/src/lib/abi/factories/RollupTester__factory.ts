/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { RollupTester, RollupTesterInterface } from '../RollupTester'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'afterSendAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'afterSendCount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'afterLogAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'afterLogCount',
        type: 'uint256',
      },
    ],
    name: 'NodeConfirmed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'parentNodeHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'executionHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'inboxMaxCount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'afterInboxBatchEndCount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'afterInboxBatchAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32[3][2]',
        name: 'assertionBytes32Fields',
        type: 'bytes32[3][2]',
      },
      {
        indexed: false,
        internalType: 'uint256[4][2]',
        name: 'assertionIntFields',
        type: 'uint256[4][2]',
      },
    ],
    name: 'NodeCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'NodeRejected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'challengeContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'asserter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'challenger',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'challengedNode',
        type: 'uint256',
      },
    ],
    name: 'RollupChallengeStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'machineHash',
        type: 'bytes32',
      },
    ],
    name: 'RollupCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'initialBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'finalBalance',
        type: 'uint256',
      },
    ],
    name: 'UserStakeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'initialBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'finalBalance',
        type: 'uint256',
      },
    ],
    name: 'UserWithdrawableFundsUpdated',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'STORAGE_GAP_1',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'STORAGE_GAP_2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: '_stakerMap',
    outputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'latestStakedNode',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountStaked',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'currentChallenge',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isStaked',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'amountStaked',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'arbGasSpeedLimitPerBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'baseStake',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'challengeExecutionBisectionDegree',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'challengeFactory',
    outputs: [
      {
        internalType: 'contract IChallengeFactory',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'confirmPeriodBlocks',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'currentChallenge',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'delayedBridge',
    outputs: [
      {
        internalType: 'contract IBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'extraChallengeTimeBlocks',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'firstUnresolvedNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAdminFacet',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getFacets',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'getNode',
    outputs: [
      {
        internalType: 'contract INode',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getNodeHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'stakerNum',
        type: 'uint256',
      },
    ],
    name: 'getStakerAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUserFacet',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_machineHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256[4]',
        name: '_rollupParams',
        type: 'uint256[4]',
      },
      {
        internalType: 'address',
        name: '_stakeToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_extraConfig',
        type: 'bytes',
      },
      {
        internalType: 'address[6]',
        name: 'connectedContracts',
        type: 'address[6]',
      },
      {
        internalType: 'address[2]',
        name: '_facets',
        type: 'address[2]',
      },
      {
        internalType: 'uint256[2]',
        name: 'sequencerInboxParams',
        type: 'uint256[2]',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'isStaked',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'isZombie',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastStakeBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestConfirmed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestNodeCreated',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'latestStakedNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minimumAssertionPeriod',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nodeFactory',
    outputs: [
      {
        internalType: 'contract INodeFactory',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'outbox',
    outputs: [
      {
        internalType: 'contract IOutbox',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAdminFacet',
        type: 'address',
      },
    ],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rollupEventBridge',
    outputs: [
      {
        internalType: 'contract RollupEventBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sequencerBridge',
    outputs: [
      {
        internalType: 'contract ISequencerInbox',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakeToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakerCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'withdrawableFunds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'zombieNum',
        type: 'uint256',
      },
    ],
    name: 'zombieAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'zombieCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'zombieNum',
        type: 'uint256',
      },
    ],
    name: 'zombieLatestStakedNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5060008054600160ff199182168117909255600b80549091169055600c8190556100386100f7565b610089576040805162461bcd60e51b815260206004820152601460248201527f434f4e5354525543544f525f4e4f545f494e4954000000000000000000000000604482015290519081900360640190fd5b506000600c556100a06001600160e01b036100f716565b156100f2576040805162461bcd60e51b815260206004820152601360248201527f494e56414c49445f434f4e5354525543544f5200000000000000000000000000604482015290519081900360640190fd5b6100ff565b600c54151590565b6117d18061010e6000396000f3fe60806040526004361061024a5760003560e01c80637b6abd9c11610139578063d4f43293116100b6578063e4781e101161007a578063e4781e1014610731578063e8bd492214610746578063ef40a670146107af578063f33e1fac146107e2578063f51de41b1461080c578063f8d1f1941461082157610259565b8063d4f43293146106c8578063d735e21d146106dd578063d93fe9c4146106f2578063dc72a33b14610707578063dff697871461071c57610259565b806391c657e8116100fd57806391c657e81461060e5780639e8a713f14610641578063c474d2c514610656578063ce11e6ab14610689578063d01e66021461069e57610259565b80637b6abd9c1461050f5780637ba9534a146105ba5780637f4320ce146105cf5780638640ce5f146105e45780638da5cb5b146105f957610259565b80636177fd18116101c757806369fd251c1161018b57806369fd251c146104885780636f791d29146104bb578063715ea22b146104d057806376e7e23b146104e5578063771b2f97146104fa57610259565b80636177fd18146103c657806362a82d7d146103f957806363721d6b1461042357806365f7f80d14610438578063662ea47d1461044d57610259565b80634f0f4aa91161020e5780634f0f4aa91461033457806351ed6a301461035e5780635c975abb146103735780635dbaf68b1461039c5780635e8ef106146103b157610259565b80632e7acfa6146102615780632f30cabd146102885780633e55c0c7146102bb5780633e96576e146102ec57806345e38b641461031f57610259565b366102595761025761084b565b005b61025761084b565b34801561026d57600080fd5b50610276610865565b60408051918252519081900360200190f35b34801561029457600080fd5b50610276600480360360208110156102ab57600080fd5b50356001600160a01b031661086b565b3480156102c757600080fd5b506102d061088a565b604080516001600160a01b039092168252519081900360200190f35b3480156102f857600080fd5b506102766004803603602081101561030f57600080fd5b50356001600160a01b0316610899565b34801561032b57600080fd5b506102766108b7565b34801561034057600080fd5b506102d06004803603602081101561035757600080fd5b50356108bd565b34801561036a57600080fd5b506102d06108d8565b34801561037f57600080fd5b506103886108e7565b604080519115158252519081900360200190f35b3480156103a857600080fd5b506102d06108f1565b3480156103bd57600080fd5b50610276610900565b3480156103d257600080fd5b50610388600480360360208110156103e957600080fd5b50356001600160a01b0316610906565b34801561040557600080fd5b506102d06004803603602081101561041c57600080fd5b503561092e565b34801561042f57600080fd5b50610276610958565b34801561044457600080fd5b5061027661095e565b34801561045957600080fd5b50610462610964565b604080516001600160a01b03938416815291909216602082015281519081900390910190f35b34801561049457600080fd5b506102d0600480360360208110156104ab57600080fd5b50356001600160a01b031661097f565b3480156104c757600080fd5b506103886109a0565b3480156104dc57600080fd5b506102d06109a9565b3480156104f157600080fd5b506102766109d3565b34801561050657600080fd5b506102766109d9565b34801561051b57600080fd5b50610257600480360361024081101561053357600080fd5b81359160208101916001600160a01b0360a083013581169260c081013590911691810190610100810160e082013564010000000081111561057357600080fd5b82018360208201111561058557600080fd5b803590602001918460018302840111640100000000831117156105a757600080fd5b919350915060c0810161010082016109df565b3480156105c657600080fd5b5061027661104e565b3480156105db57600080fd5b50610276611054565b3480156105f057600080fd5b5061027661105a565b34801561060557600080fd5b506102d0611060565b34801561061a57600080fd5b506103886004803603602081101561063157600080fd5b50356001600160a01b031661106f565b34801561064d57600080fd5b506102d06110c9565b34801561066257600080fd5b506102576004803603602081101561067957600080fd5b50356001600160a01b03166110d8565b34801561069557600080fd5b506102d06112e5565b3480156106aa57600080fd5b506102d0600480360360208110156106c157600080fd5b50356112f4565b3480156106d457600080fd5b506102d0611323565b3480156106e957600080fd5b50610276611333565b3480156106fe57600080fd5b506102d0611339565b34801561071357600080fd5b50610276611348565b34801561072857600080fd5b5061027661134e565b34801561073d57600080fd5b50610276611354565b34801561075257600080fd5b506107796004803603602081101561076957600080fd5b50356001600160a01b031661135a565b604080519586526020860194909452848401929092526001600160a01b0316606084015215156080830152519081900360a00190f35b3480156107bb57600080fd5b50610276600480360360208110156107d257600080fd5b50356001600160a01b0316611396565b3480156107ee57600080fd5b506102766004803603602081101561080557600080fd5b50356113b4565b34801561081857600080fd5b506102d06113dc565b34801561082d57600080fd5b506102766004803603602081101561084457600080fd5b50356113eb565b610853610863565b61086361085e6113fd565b6114e2565b565b600c5481565b6001600160a01b0381166000908152600a60205260409020545b919050565b6011546001600160a01b031681565b6001600160a01b031660009081526008602052604090206001015490565b60185481565b6000908152600560205260409020546001600160a01b031690565b6017546001600160a01b031681565b600b5460ff165b90565b6014546001600160a01b031681565b600e5481565b6001600160a01b0316600090815260086020526040902060030154600160a01b900460ff1690565b60006007828154811061093d57fe5b6000918252602090912001546001600160a01b031692915050565b60095490565b60015490565b60008061096f611323565b6109776109a9565b915091509091565b6001600160a01b039081166000908152600860205260409020600301541690565b60005460ff1690565b6000601c6001815481106109b957fe5b6000918252602090912001546001600160a01b0316905090565b600f5481565b600d5481565b6109e7611506565b15610a28576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b610a4b8260005b60200201356001600160a01b03166001600160a01b031661150e565b610a93576040805162461bcd60e51b8152602060048201526014602482015273119050d15517cc17d393d517d0d3d395149050d560621b604482015290519081900360640190fd5b610a9e826001610a2f565b610ae6576040805162461bcd60e51b8152602060048201526014602482015273119050d15517cc57d393d517d0d3d395149050d560621b604482015290519081900360640190fd5b604080516001600160a01b038981166024808401919091528351808403909101815260449092018352602080830180516001600160e01b031663189acdbd60e31b17815293518351600095928801359093169392909182918083835b60208310610b615780518252601f199092019160209182019101610b42565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610bc1576040519150601f19603f3d011682016040523d82523d6000602084013e610bc6565b606091505b5050905080610c0e576040805162461bcd60e51b815260206004820152600f60248201526e1190525317d253925517d19050d155608a1b604482015290519081900360640190fd5b6010805485356001600160a01b039081166001600160a01b03199283161792839055601180546020890135831690841617905560128054909216604080890135831691821790935582516319dc7ae560e31b8152600481019190915260016024820152915192169163cee3d7289160448082019260009290919082900301818387803b158015610c9d57600080fd5b505af1158015610cb1573d6000803e3d6000fd5b5050505083600360068110610cc257fe5b601380546001600160a01b0319166001600160a01b0360209390930293909301358216929092179091556010546040805163722dbe7360e11b8152606088013584166004820152600160248201529051919092169163e45b7ce691604480830192600092919082900301818387803b158015610d3d57600080fd5b505af1158015610d51573d6000803e3d6000fd5b50506013546001600160a01b0316915062fc32f790508a600060200201358b600260200201358c600360200201358c8c8c8c6040518863ffffffff1660e01b815260040180888152602001878152602001868152602001856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b03168152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505098505050505050505050600060405180830381600087803b158015610e2b57600080fd5b505af1158015610e3f573d6000803e3d6000fd5b5050505083600460068110610e5057fe5b601480546001600160a01b03199081166001600160a01b03602094909402949094013583169390931790556015805490921660a08701359091161790556000610e988b611514565b9050610ea38161160b565b8935600c5560208a0135600d556040808b0135600e5560608b0135600f55601680546001600160a01b0319166001600160a01b038b811691909117909155604b601855610190601b556011548251632a126f8f60e01b8152863560048201529251911691632a126f8f91602480830192600092919082900301818387803b158015610f2d57600080fd5b505af1158015610f41573d6000803e3d6000fd5b50506011546001600160a01b031691506369dda4af905084600160200201356040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610f9657600080fd5b505af1158015610faa573d6000803e3d6000fd5b50610fbe9250601c91508690506002611714565b50604080518c815290517f4ac0014773275a3dfb58c58539631006301de41998cce7c4f8698d297c88bb2d9181900360200190a1610ffa611506565b611041576040805162461bcd60e51b81526020600482015260136024820152721253925512505312569157d393d517d2539255606a1b604482015290519081900360640190fd5b5050505050505050505050565b60035490565b601a5481565b60045490565b6016546001600160a01b031681565b6000805b6009548110156110c0576009818154811061108a57fe5b60009182526020909120600290910201546001600160a01b03848116911614156110b8576001915050610885565b600101611073565b50600092915050565b6013546001600160a01b031681565b60006110e261165a565b9050336001600160a01b03821614611132576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b601954601a546119918214611182576040805162461bcd60e51b81526020600482015260116024820152701053149150511657d413d4d517d2539255607a1b604482015290519081900360640190fd5b8062015180146111cd576040805162461bcd60e51b81526020600482015260116024820152701053149150511657d413d4d517d2539255607a1b604482015290519081900360640190fd5b60115460408051632a126f8f60e01b81526004810185905290516001600160a01b0390921691632a126f8f9160248082019260009290919082900301818387803b15801561121a57600080fd5b505af115801561122e573d6000803e3d6000fd5b5050601154604080516369dda4af60e01b81526004810186905290516001600160a01b0390921693506369dda4af925060248082019260009290919082900301818387803b15801561127f57600080fd5b505af1158015611293573d6000803e3d6000fd5b505060006019819055601a819055601c80548894509092506112b157fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555050505050565b6012546001600160a01b031681565b60006009828154811061130357fe5b60009182526020909120600290910201546001600160a01b031692915050565b6000601c6000815481106109b957fe5b60025490565b6015546001600160a01b031681565b601b5481565b60075490565b60195481565b6008602052600090815260409020805460018201546002830154600390930154919290916001600160a01b03811690600160a01b900460ff1685565b6001600160a01b031660009081526008602052604090206002015490565b6000600982815481106113c357fe5b9060005260206000209060020201600101549050919050565b6010546001600160a01b031681565b60009081526006602052604090205490565b60006004361015611443576040805162461bcd60e51b815260206004820152600b60248201526a4e4f5f46554e435f53494760a81b604482015290519081900360640190fd5b6016546001600160a01b03166000811580159061146857506001600160a01b03821633145b611479576114746109a9565b611481565b611481611323565b9050611495816001600160a01b031661150e565b6114dc576040805162461bcd60e51b815260206004820152601360248201527215105491d15517d393d517d0d3d395149050d5606a1b604482015290519081900360640190fd5b91505090565b3660008037600080366000845af43d6000803e808015611501573d6000f35b3d6000fd5b600c54151590565b3b151590565b60008061156a604051806101200160405280600081526020018581526020016000815260200160008152602001600081526020016000801b81526020016000801b8152602001438152602001600181525061167f565b6015546040805163d45ab2b560e01b815260048101849052600060248201819052604482018190526064820181905243608483015291519394506001600160a01b039092169263d45ab2b59260a4808201936020939283900390910190829087803b1580156115d857600080fd5b505af11580156115ec573d6000803e3d6000fd5b505050506040513d602081101561160257600080fd5b50519392505050565b6000805260056020527f05b8ccbb9d4d8fb16ea74ce3c29a41f1b461fbdaff4714a0d9a8eb05499746bc80546001600160a01b0319166001600160a01b03929092169190911790556001600255565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6000816000015182602001518360400151846060015185608001518660a001518760c001518860e00151896101000151604051602001808a81526020018981526020018881526020018781526020018681526020018581526020018481526020018381526020018281526020019950505050505050505050604051602081830303815290604052805190602001209050919050565b828054828255906000526020600020908101928215611767579160200282015b828111156117675781546001600160a01b0319166001600160a01b03843516178255602090920191600190910190611734565b50611773929150611777565b5090565b6108ee91905b808211156117735780546001600160a01b031916815560010161177d56fea26469706673582212201755b7b26deac85c1de420a448da9da9c2bf0e3bda9ccba0acff9f029d74a01b64736f6c634300060b0033'

export class RollupTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RollupTester> {
    return super.deploy(overrides || {}) as Promise<RollupTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): RollupTester {
    return super.attach(address) as RollupTester
  }
  connect(signer: Signer): RollupTester__factory {
    return super.connect(signer) as RollupTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): RollupTesterInterface {
    return new utils.Interface(_abi) as RollupTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RollupTester {
    return new Contract(address, _abi, signerOrProvider) as RollupTester
  }
}